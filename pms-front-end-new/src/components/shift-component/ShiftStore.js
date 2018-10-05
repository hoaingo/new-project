import { observable, action } from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class ShiftStore {
    @observable shift = [];
    @observable currentShift = [];
    @observable isdeny = false;
    @observable needRenderCalendar = false;

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetchData(account) {
        fetch(path.account.GET_SHIFT, {
            method: 'POST',
            body: JSON.stringify(account),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
                if (data.listShift.length != 0) {
                    this.shift = data.listShift.map((item) => {
                        return ({
                            title: item.className + "-" + item.courseLevelName + "-" + item.roomName + "-" + item.floor,
                            start: new Date(item.startTime),
                            end: new Date(item.endTime),
                            // end: new Date(y, m, 22),
                            // url: 'http://www.creative-tim.com/',

                            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
                            className: item.type == 'exam' ? 'event-orange' : 'event-green'
                        })
                    })
                }
                else{
                    MyNotification.alertSuccess("You don't have any shift at the moment.");
                    this.needRenderCalendar = true;
                }
            }).catch(error => {
                MyNotification.alertError('Occurred error: "' + error + '" during process, get shift false!');
                this.isdeny = true;
                this.shift = [];
            })
    }

    @action
    updateShift(shift) {
        this.currentShift = shift
    }
}

export default new ShiftStore;