import { observable, action } from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class StudentStore {
    @observable newStudent = {
        studentStatus: "INACTIVE",
        studentGender: "Male"
    };
    @observable isdeny = false;
    @observable student = { limit: 5, page: 0, totalPage: 0, totalRecord: 0, records: [] };
    @observable valueFieldName1 = "";
    @observable valueFieldName2 = "";
    @observable pageEdit = 1;

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    insertStudent = (data) => {
        fetch(path.student.INSERT_STUDENT, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        }).then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(response => {
                if (response) {
                    // this.props.goBack();
                    this.pageEdit = this.student.totalPage
                    MyNotification.alertSuccess("Add new student success!", "");
                    this.fetchListAccount(!!this.pageEdit ? this.pageEdit : 1);
                }
                else {
                    MyNotification.alertError("User student name must be unique, insert unaccepted!")
                }

            }).catch(error => {
                MyNotification.alertError("Add new student fail!", "");
            })
    }

    fetchListAccount = pageNumber => {
        var url = path.student.GET_ALL_STUDENT_PAGING_FILTER + pageNumber + "&limit=" + this.student.limit + "&studentName=" + this.valueFieldName1 + "&className=" + this.valueFieldName2;

        fetch(url, {
            credentials: "include"
        })
            .then(this.handleErrors)
            // .then(response => response.json())
            .then(response => response.json())
            .then(data => {
                this.student = data;
            })
            .catch(error => {
                this.isdeny = true;
                MyNotification.alertError('Occurred error: "' + error + '" during get list student.', "");
            });
    };

    fetchData(student) {
        fetch(path.student.GET_SCHEDULE, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
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
            }).catch(error => {
                MyNotification.alertError('Occurred error: "' + error + '" during process, get shift false!');
                this.isdeny = true;
                this.shift = [];
            })
    }

    @action
    updateStudent(student) {
        this.newStudent = student
    }
}

export default new StudentStore;