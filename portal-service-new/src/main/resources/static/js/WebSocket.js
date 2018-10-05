$(function () {
    'use strict';
    var client;


    function onConnect() {

        client = Stomp.over(new SockJS('/WebSocketEndPoint'));
//                client.debug = false;
        client.connect({}, function (frame) {

            client.subscribe('/user/topic/sendMessengerToOneUser', function (message) {       
                var notiCount = Number($("#notificationId").text());
                    $("#notificationId").text(notiCount + 1);
                    $.notify({
                        message: JSON.parse(message.body).message,
                        url: JSON.parse(message.body).url,
                        target: "_blank",

                    }, {type: JSON.parse(message.body).type, placement:{from:'top', align:'center'}});
            }),
            client.subscribe('/topic/sendMessengerToAllUser', function (message) {
                var notiCount = Number($("#notificationId").text());
                $("#notificationId").text(notiCount + 1);
                $.notify({
                    message: JSON.parse(message.body).message,
                    url: JSON.parse(message.body).url,
                    target: "_blank",

                    }, {type: JSON.parse(message.body).type,  placement:{from:'top', align:'center'}});

            });
        });

    }

    onConnect();
});
