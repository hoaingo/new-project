import { observable, action } from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class Store {
    @observable type = '';
    @observable items = { limit: 5, page: 0, totalPage: 0, totalRecord: 0, records: [] };
    @observable valueFieldName1 = "";
    @observable valueFieldName2 = "";
    @observable roomName = "";
    @observable newItems = {
        courseId: '',
        status: 'ACTIVE',
        startTime: "12:00",
        endTime: "13:00"
    };
    @observable currentTimeSheet = {
        startTime: "12:00",
        endTime: "13:00"
    };
    @observable course = [];
    @observable room = [];
    @observable alerts = [];
    @observable isdeny = false;
    @observable styleAlert = "";
    @observable dayOfWeek = [{
        "value": "Monday",
        "label": "Monday",
        name: 'day'
    }, {
        "value": "Tuesday",
        "label": "Tuesday",
        name: 'day'
    }, {
        "value": "Wednesday",
        "label": "Wednesday",
        name: 'day'
    }, {
        "value": "Thursday",
        "label": "Thursday",
        name: 'day'
    }, {
        "value": "Friday",
        "label": "Friday",
        name: 'day'
    }, {
        "value": "Saturday",
        "label": "Saturday",
        name: 'day'
    }, {
        "value": "Sunday",
        "label": "Sunday",
        name: 'day'
    }];

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetchCourseName() {
        fetch(path.course_level.GET_ALL_COURSE_NAME, {
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data => {
                this.course = data
            }).catch(error => {
                this.isdeny = true;
                this.generate("danger", "False !", "Connec false !");
            })
    }


    fetchData = (pageNumber) => {
        var url = path.course_level.GET_ALL_COURSE_LEVEL_PAGING_FILTER + pageNumber + "&limit=" + this.items.limit + "&courseName=" + this.valueFieldName1 + "&courseLevelName=" + this.valueFieldName2

        fetch(url, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then((data) => {
                this.items = data
            }).catch(error => {
                this.isdeny = true;
                MyNotification.alertError('Connect course level fail !', '');
            })
    }

    fetchTimeSheet = (courseLevelId) => {
        var url = path.course_level.GET_TIME_SHEET + courseLevelId

        fetch(url, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then((data) => {
                this.timeSheet = data
            }).catch(error => {
                MyNotification.alertError('Connect time sheet fail !', '');
            })
    }

    fetchRoom = (pageNumber) => {
        var url = path.course_level.GET_ALL_ROOM + pageNumber + "&limit=999&roomName=" + this.roomName

        fetch(url, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then((data) => {
                this.room = data.records
            }).catch(error => {
                this.isdeny = true;
                MyNotification.alertError('Connect room fail !', '');
            })
    }

    resetData() {
        this.newItems = {};
    }

    @action
    updateItem(item) {
        this.newItems = item
    }

    @action
    updateTimeSheet(timeSheet) {
        this.currentTimeSheet = timeSheet
    }

    @action
    generate(style, headline, message) {
        const newAlert = {
            id: (new Date()).getTime(),
            headline: headline,
            message: message
        };
        this.styleAlert = style;
        this.alerts = [...this.alerts, newAlert];
    }
}


export default new Store;