import { observable, action } from 'mobx';
import path from './components/path_variable';

export class MainStore {

    @observable allMenu = [];
    @observable cardMenu = [];
    @observable oldCardMenu = [];
    @observable history = [];
    @observable count = 0;
    @observable ischange = false;
    @observable loginAccount = {};
    @observable monthRevenue = [];
    @observable reportClass = [];
    @observable reportStudent = [];
    @observable reportTeacher = [];
    @observable monthRevenueElemenetId = 'month-revenue';
    @observable reportClassElemenetId = 'report-class';
    @observable reportStudentElemenetId = 'report-student';
    @observable reportTeacherElemenetId = 'report-teacher';
    @observable percentStudent = ''
    @observable percentTeacher = ''
    @observable percentRevenue = ''
    

    constructor() {

    }
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetchData = () => {
        fetch('/get-menu-by-role', {
            credentials: 'include'
        }).then(this.handleErrors)
            .then((result) => result.json())
            .then((data) => {

                this.allMenu = data;
                console.log("all Mnu", mainStore.allMenu)
                this.setState({
                    menu: data

                })

            }).catch(error => {

            })
    }

    fetchMonthRevenue = () => {
        fetch(path.report.GET_REPORT_MONTH_REVENUE, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then((result) => result.json())
            .then((data) => {
                this.monthRevenue = data;
            }).catch(error => {
                console.log('error', error)
            })
    }


    fetchReportClass = () => {
        fetch(path.report.GET_REPORT_CLASS, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then((result) => result.json())
            .then((data) => {
                this.reportClass = data;
            }).catch(error => {
                console.log('error', error)
            })
    }

    fetchReportTeacher = () => {
        fetch(path.report.GET_REPORT_TEACHER, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then((result) => result.json())
            .then((data) => {
                this.reportTeacher = data;
            }).catch(error => {
                console.log('error', error)
            })
    }

    fetchReportStudent = () => {
        fetch(path.report.GET_REPORT_STUDENT, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then((result) => result.json())
            .then((data) => {
                this.reportStudent = data;
            }).catch(error => {
                console.log('error', error)
            })
    }
}

export default new MainStore;
