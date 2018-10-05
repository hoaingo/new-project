import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route ,NavLink , Link} from 'react-router-dom';
import { Button , Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup,FieldFeedbacks, FormControlLabel, FormControlInput, select} from 'react-form-with-constraints-bootstrap4';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import {observer} from 'mobx-react';
import path from '../path_variable';


export default class ListNotification extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {          
            items: [],
           
        };

    }
    handleErrors=(response)=> {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    
    fetchData()
    {
        fetch(path.notification.GET_ALL_LIST_NOTIFICATION , {
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then((result) => result.json())
            .then((data) => {
               
                this.setState({ items: data })
       
            }).catch((e) => {
                console.log(e);

            })
           
    }
    
    componentDidMount() {
        this.fetchData();
            
    }

    getNotificationMassage(){
        let notification = [];
        
        notification.push(  
            this.state.items && this.state.items.map(data => {
            if(data.notificationType === "read")
            {
                            return(
                                
                                    <a href="#" key={data.id} className="message d-flex align-items-center">
                                        <div className="profile" style={{lineHeight : '4'}}>
                                        <i className="fa fa-snowflake-o"></i>
                                        </div>
                                        <div className="content col-md-10">   <strong className="d-block">{data.notificationName}</strong>
                                            <span className="d-block">{data.notificationContent}</span>
                                           
                                        </div>
                                        <div className="col-md-2"  style={{float : 'right'}}>
                                        <p className="date d-block" style={{fontStyle : 'italic'}}>9:30am</p>
                                            </div>
                                    </a>
                              
                            )
            }
        }))
      
        return notification;
    }

    getNotificationApprove(){
        let notificationApprove = [];
        
        notificationApprove.push(  
            this.state.items && this.state.items.map(data => {
            if(data.notificationType === "approve")
            {
                            return(
                                
                                <tr key={data.id}  style={{lineHeight : '3'}}   >
                                <td scope="row">{data.id}</td>
                                <td>{data.notificationName}</td>
                                <td>{data.notificationContent}</td>
                                <td>{data.notificationStatus}</td>
                             
                                <td style={{textAlign : 'center'}}>
                                    <Link color="link" style={{lineHeight : 'initial' , color : '#0275d8'}} to={`/list_notification/${data.notificationType}/${data.prId}/${data.id}`} ><i className="fa fa-pencil"></i>   View </Link>
                                </td>
                                {/* <td>
                                        <Button color="link" style={{lineHeight : 'initial'}} data-toggle="collapse" data-target={"#" + data.prId} ><i className="fa fa-pencil"></i>   Detail</Button>
                                </td> */}
                                
                                </tr>
                              
                            )
            }
        }))
      
        return notificationApprove;
    }
    getNotificationHasApprove(){
        let notificationHasApprove = [];
        
        notificationHasApprove.push(  
            this.state.items && this.state.items.map(data => {
            if(data.notificationType === "approved")
            {
                            return(
                                
                                <tr key={data.id}  style={{lineHeight : '3'}}   >
                                <td scope="row">{data.id}</td>
                                <td>{data.notificationName}</td>
                                <td>{data.notificationContent}</td>
                                <td>{data.notificationStatus}</td>
                             
                                <td style={{textAlign : 'center'}}>
                                    <Link color="link" style={{lineHeight : 'initial' , color : '#0275d8'}} to={`/list_notification/${data.notificationType}/${data.prId}/${data.id}`} ><i className="fa fa-pencil"></i>   View </Link>
                                </td>
                                {/* <td>
                                        <Button color="link" style={{lineHeight : 'initial'}} data-toggle="collapse" data-target={"#" + data.prId} ><i className="fa fa-pencil"></i>   Detail</Button>
                                </td> */}
                                
                                </tr>
                              
                            )
            }
        }))
      
        return notificationHasApprove;
    }
   
    
    

    render() {
    
        const { items } = this.state;
        
        return (
            <div >
                <div className="col-lg-12">  
                <div className="messages-block block">
                    <div className="title"><strong>List New Messages</strong></div>
                    <div className="messages">                                         
                        {this.getNotificationMassage()}
                    </div>
                </div>
                <div className="messages-block block">
                  <div className="title"><strong>New Approve</strong></div>
                  <div className="table-responsive"> 
                    <table className="table">
                      <thead>
                        <tr>
                          <th>No id</th>
                          <th>Name</th>
                          <th>Content</th>
                          <th>Status</th>
                       
                          <th style={{textAlign : 'center'}}>Action</th>
                          {/* <th style={{textAlign : 'center'}}>Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                       
                    
                       {this.getNotificationApprove()}
                       </tbody>

                       
                     
                    </table>
                  </div>
                
                </div>
                <div className="messages-block block">
                  <div className="title"><strong>List Approved</strong></div>
                  <div className="table-responsive"> 
                    <table className="table">
                      <thead>
                        <tr>
                          <th>No id</th>
                          <th>Name</th>
                          <th>Content</th>
                          <th>Status</th>
                       
                          <th style={{textAlign : 'center'}}>Action</th>
                          {/* <th style={{textAlign : 'center'}}>Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                       
                    
                       {this.getNotificationHasApprove()}
                       </tbody>

                       
                     
                    </table>
                  </div>
                
                </div>
               
                 </div>
            </div>
            )
        
        }
    }
   
      
    