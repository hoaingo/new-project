import {observable, action} from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class Store{

    // @observable shipping= [];
    // @observable items= [];
    @observable type = '';
    @observable items= {limit : 5 , page : 0 , totalPage : 0 , totalRecord : 0 , records : []};
    @observable valueFieldName1 = "";
    @observable valueFieldName2 = "";
    @observable newItems ={};
    @observable alerts = [];
    @observable isdeny = false;
    @observable styleAlert = "";

    constructor(){
        
    }
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    
    // fetchData() {
    //     fetch(path.course.GET_ALL_COURSE,{
    //         credentials : 'include'
    //     })
    //     .then(this.handleErrors)
    //     .then( response => response.json())
    //     .then( data => {
          
    //         this.items = data
                   
    //     }).catch( error => {
    //         this.isdeny = true;
    //         this.generate("danger","False !","Connec false !");      
    //     }) 
    // }
    fetchData = (pageNumber) => {
            
        var url = path.course.GET_ALL_COURSE_PAGING_FILTER  + pageNumber + "&limit=" + this.items.limit + "&courseName=" + this.valueFieldName1 
     
        fetch(url, {
            credentials: 'include'
        })  .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then((data) => {
                
                    this.items = data                              
            }).catch(error => {
                this.isdeny = true;
                MyNotification.alertError('Connect course address fail !','');

            })
    }

    resetData(){
        this.newItems = {};
    }
 
    // fetchData = (pageNumber) => {
            
    //     var url = path.shipping.GET_ALL_SHIPPING_PAGING_FILTER + this.type + "&page=" + pageNumber + "&limit=" + this.shipping.limit + "&companyName=" + this.valueFieldName1 + "&officeLocation=" + this.valueFieldName2
     
    //     fetch(url, {
    //         credentials: 'include'
    //     })  .then(this.handleErrors)
    //         .then(response => response.redirected ? window.location.reload() : response.json())
    //         .then((data) => {
                
    //                 this.shipping = data                              
    //         }).catch(error => {
    //             this.isdeny = true;
    //             MyNotification.alertError('Connect shipping address fail !','');

    //         })
    // }
    @action
    updateItem(item){
        this.newItems  = item
    }
    @action
    generate(style,headline,message) {
		const newAlert = {
            id      :   (new Date()).getTime(),
			headline:   headline,
			message :   message
        };
        this.styleAlert =   style;
		this.alerts     =   [ ...this.alerts, newAlert ]  ;	
    }
}


export default new Store;