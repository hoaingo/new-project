import { observable, action } from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class Store {
    @observable type = '';
    @observable items = { limit: 5, page: 0, totalPage: 0, totalRecord: 0, records: [] };
    @observable valueFieldName1 = "";
    @observable newItems = {

        courseId: '',
        status: 'ACTIVE'


    };
    @observable course = [];
    @observable alerts = [];
    @observable isdeny = false;
    @observable styleAlert = "";

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetchData = (pageNumber) => {
        var url = path.course_level.GET_ALL_BRANCH + pageNumber + "&limit=" + this.items.limit + "&branchName=" + this.valueFieldName1

        fetch(url, {
            credentials: 'include'
        }).then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then((data) => {
                this.items = data
            }).catch(error => {
                this.isdeny = true;
                MyNotification.alertError('Connect branch fail!', '');

            })
    }

    fetchBranchName() {
        fetch(path.course_level.GET_ALL_COURSE_NAME,{
            credentials : 'include'
        })
        .then(this.handleErrors)
        .then( response => response.json())
        .then( data => {
          
            this.course = data
                   
        }).catch( error => {
            this.isdeny = true;
            this.generate("danger","False !","Connec false !");      
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