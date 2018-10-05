import {observable, action} from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class Store{

    // @observable shipping= [];
    @observable data= [];
    @observable type = '';
    @observable schedule = {roomId : '',day : '',scheduleStatus : 'ACTIVE'};
    @observable items= {limit : 5 , page : 0 , totalPage : 0 , totalRecord : 0 , records : []};
    @observable valueFieldName1 = "";
    @observable valueFieldName2 = 0;
    @observable valueFieldName3 = 0;
    @observable newItems ={
        
        classId : 0,
        courseLevelName : '',
        courseLevelId : 0,
        userId : 0,
        classStatus : 'ACTIVE'
      
       
        
    };
    @observable newItems1 ={
        
        classId : 0,
        courseLevelName : '',
        courseLevelId : 0,
        userId : 0,
        classStatus : 'ACTIVE'
      
       
        
    };
    @observable listCourseLevelName = [];
    @observable listClassName = [];
    @observable courseLevelName        =   [{value : "" , label : 'All' , name : 'courseLevelName'}];
    @observable className        =   [{value : 0 , label : 'All' , name : 'classId'}];
    @observable roomName        =   [];
    @observable listUserName        =   [];
    @observable userName        =   [{value : 0 , label : 'All' , name : 'userId'}];
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
    
    fetchCourseLevelName() {
        fetch(path.schedule.GET_ALL_COURSE_LEVEL_NAME,{
            credentials : 'include'
        })
        .then(this.handleErrors)
        .then( response => response.json())
        .then( data => {
            this.listCourseLevelName = data;
            data.map( data => {
                  
                this.courseLevelName.push({  value: data.courseLevelName, label: data.courseLevelName , name:'courseLevelName'})
            })     

            
                   
        }).catch( error => {
            this.isdeny = true;
            this.generate("danger","False !","Connec false !");      
        }) 
    }
   
    fetchUserName() {
        fetch(path.schedule.GET_ALL_USER_NAME,{
            credentials : 'include'
        })
        .then(this.handleErrors)
        .then( response => response.json())
        .then( data => {
            this.listUserName = data;
            data.map( data => {
                  
                this.userName.push({  value: data.userId, label: data.userName , name:'userId'})
            })   
      
        }).catch( error => {
            this.isdeny = true;
            this.generate("danger","False !","Connec false !");      
        }) 
    }
    fetchClassName(courseLevelName) {
        fetch(path.schedule.GET_ALL_CLASS_NAME + courseLevelName,{
            credentials : 'include'
        })
        .then(this.handleErrors)
        .then( response => response.json())
        .then( data => {
            this.className = [{value : 0 , label : 'All' , name : 'classId'}];
            this.listClassName = data;
            data.map( data => {
                  
                this.className.push({  value: data.classId, label: data.className , name:'classId'})
            })     

            
                   
        }).catch( error => {
            this.isdeny = true;
            this.generate("danger","False !","Connec false !");      
        }) 
    }
   

    fetchData=(pageNumber)=> {
        fetch(path.class.GET_ALL_CLASS_PAGING_FILTER  + pageNumber + "&limit=" + this.items.limit + "&courseLevelName=" + this.valueFieldName1 + "&classId=" + this.valueFieldName2 + "&userId=" + this.valueFieldName3,{
            credentials : 'include'
        })
        .then(this.handleErrors)
        .then(response =>  response.json())
        .then( data => {
            this.items = data          
           
            
                   
        }).catch( error => {
            this.isdeny = true;
            this.generate("danger","False !","Connec false !");      
        }) 
    }
    fetchScheduleId(classId , day) {
        fetch(path.schedule.GET_SCHEDULE_ID + classId + "&day=" + day ,{
            credentials : 'include'
        })
        .then(this.handleErrors)
        .then( response => response.json())
        .then( data => {
            this.schedule = data;
           
            
                   
        }).catch( error => {
            this.isdeny = true;
            this.generate("danger","False !","Connec false !");      
        }) 
    }


    // fetchData = (pageNumber) => {
            
    //     var url = path.room.GET_ALL_ROOM_PAGING_FILTER  + pageNumber + "&limit=" + this.items.limit + "&branchName=" + this.valueFieldName1 + "&roomName=" + this.valueFieldName2 
     
    //     fetch(url, {
    //         credentials: 'include'
    //     })  .then(this.handleErrors)
    //         .then(response => response.redirected ? window.location.reload() : response.json())
    //         .then((data) => {
                
    //                 this.items = data                              
    //         }).catch(error => {
    //             this.isdeny = true;
    //             MyNotification.alertError('Connect room fail !','');

    //         })
    // }

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
    // @action
    // updateItem(item){
    //     this.newItems  = item
    // }
    @action
    updateItem1(item){
        this.newItems1  = item
    }

    @action
    updateSchedule(item){
        this.schedule  = item
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