'use strict';

const applicationServerPublicKey = "BNe-9TOPxbWCRxBGoO_e85uMxg21hd2AofAKleyUmJYOrNm24OITNDQoPy9cmJzzYtu1yi-PWemh0humx54SDsM";
var serviceWorkerName = "js/sw.js";
var context_path = $('meta[name=context-path]').attr("content");
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function sendSubscriptionToServer(endpoint, key, auth) {
    var encodedKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
    var encodedAuth = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
    var subscription = {
        endpoint: endpoint,
        keys: {p256dh: encodedKey, auth: encodedAuth}
    };
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: context_path + "subscribe",
        data: JSON.stringify(subscription),
        dataType: "json",
        success: function (result) {
            console.log(result);
        },
        error: function (e) {
            console.warn("ERROR: ", e);
        }
    });

}

function subscribe() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
            .then(function (subscription) {
                console.log('User is subscribed:', subscription);
                var endpoint = subscription.endpoint;
                var key = subscription.getKey("p256dh");
                var auth = subscription.getKey("auth");

                return sendSubscriptionToServer(endpoint, key, auth);
            })
            .catch(function (err) {
                console.warn('Failed to subscribe the user: ', err);
            });
}

function unsubscribe() {
    var endpoint = null;
    swRegistration.pushManager
            .getSubscription()
            .then(function (subscription) {
                if (subscription) {
                    endpoint = subscription.endpoint;
                    return subscription.unsubscribe();
                }
            })
            .catch(function (error) {
                console.log("Error unsubscribing", error);
            })
            .then(function () {
                // removeSubscriptionFromServer(endpoint);
                console.log("User is unsubscribed.");
            });
}
function removeSubscriptionFromServer(endpoint) {
    $.ajax({
        type: "POST",
        url: context_path + "unSubscribe",
        data: {endpoint: endpoint},
        dataType: "text",
        success: function (result) {
            console.log(result);
        },
        error: function (e) {
            console.warn("ERROR: ", e);
        }
    });
}


function initialiseState() {
    if (!("showNotification" in ServiceWorkerRegistration.prototype)) {
        console.warn("Notifications aren't supported.");
        return;
    }
    if (Notification.permission === "denied") {
        console.warn("The user has blocked notifications.");
        return;
    }

    if (!("PushManager" in window)) {
        console.warn("Push messaging isn't supported.");
        return;
    }

    swRegistration.pushManager.getSubscription()
            .then(function (subscription) {
                if (!subscription) {
                    subscribe();
                }

            })
            .catch(function (err) {
                console.log('Error during getSubscription()', err);
            });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
    navigator.serviceWorker.register(context_path + 'js/sw.js')
            .then(function (swReg) {
                console.log('Service Worker is registered', swReg);
                swRegistration = swReg;
                swRegistration.update();
                initialiseState();
            })
            .catch(function (error) {
                console.error('Service Worker Error', error);
            });
} else {
    console.warn('Push messaging is not supported');
}