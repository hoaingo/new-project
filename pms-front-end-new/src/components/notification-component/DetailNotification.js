import React from 'react';
import ReactDOM from 'react-dom';
import { Button , Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup,FieldFeedbacks, FormControlLabel, FormControlInput, select} from 'react-form-with-constraints-bootstrap4';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import {observer} from 'mobx-react';
import path from '../path_variable';
import {  Link } from 'react-router';
import { AlertList } from "react-bs-notifier";
import index from '../../../public/dashboard/vendor/popper.js/popper-utils';


export default class DetailNotification extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {          
            items: [],
            alerts:[],
            style :""          
        };

    }
    goBack = () =>{
        this.props.history.goBack();
    }
    fetchData(pathname)
    {
        const { match: {params}} = this.props;
        fetch(path.notification.GET_DETAIL_NOTIFICATION + pathname, {
            credentials: 'include'
        })
            .then((result) => result.json())
            .then((data) => {
               
                this.setState({ items: data })
                // console.log("---------" , data)
               
            }).catch((e) => {
                console.log(e);

            })
    }
    componentDidMount() {
        
        const { match: {params}} = this.props;
        this.fetchData(params.prId)
      
   
        
    }
    componentWillReceiveProps(nextProps) {
         const { match: {params}} = nextProps;
        //  console.log("testttttttttttttt" , params.prId)
         this.fetchData(params.prId)
        
    }

    hello(){
        alert("abc abc")
    }
    onAlertDismissed = (alert)=> {
        const alerts = this.state.alerts;
		// find the index of the alert that was dismissed
		const idx = alerts.indexOf(alert);

		if (idx >= 0) {
			this.setState({
				// remove the alert from the array
				alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
			});
        }
        this.goBack()
        
    }
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    handleApprovePR = (rowData) => {

        const { match: {params}} = this.props;
        
        var form_data = {

            id: params.id,
            notificationType: 'approved',
            
        };

        // e.preventDefault();
        console.log(rowData)
         fetch(path.purchase_request.APPROVE_PR + rowData.prId, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({prId: this.state.prId}),
        })
            .then(this.handleErrors)
            .then(() => {
                // this.fetchData();
                this.generate("success","Approved purchase request success !");

                fetch(path.notification.UPDATE_NOTIFICATION_TYPE, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'content-type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(form_data),
                })
              

            }).catch(error => {
               
                this.generate("danger","Approved purchase request fail !");   

            })
            

        // console.log(rowData)
    }
    generate =(type,message)=> {
		const newAlert = {
            id: (new Date()).getTime(),
			message: message
        };
        
		this.setState({
            alerts: [ ...this.state.alerts, newAlert ],
            style : type
		});
    }
    getDataApprove(){
        let items = [];
        const { match: {params}} = this.props;
        
        items.push( 
            
            this.state.items && this.state.items.map((data,index) => {
  
                    return(
                        <tbody key={index}>
                            <tr  style={{lineHeight : '3'}}   >
                                <td scope="row">{data.prCode}</td>
                               
                               
                                <td>{data.taxAmount}</td>
                                <td>{data.totalAmount}</td>
                                <td style={{textAlign : 'center'}}>
                                    <Button color="link" style={{lineHeight : 'initial'}} disabled={params.type === "approved"} onClick={(e) =>this.handleApprovePR(data)} ><i className="fa fa-pencil"></i>   Approve</Button>
                                </td>
                                {/* <td>
                                        <Button color="link" style={{lineHeight : 'initial'}} data-toggle="collapse" data-target={"#" + data.prId} ><i className="fa fa-pencil"></i>   Detail</Button>
                                </td> */}
                                
                            </tr>
                            {/* <tr className="collapse" id={data.prId}>
                                <td style={{borderTop : 'none'}}>
                                  Demo1
                                </td>
                            </tr> */}
                           
                       </tbody>
                        )
                        
            })
        )
        return items;
    }
   

    
    render() {
        
        const { items } = this.state;
        const { match: {params}} = this.props;
        
        if(params.type === "approve")
        {
            return (

                   
                <div >
                 <AlertList
                        type={this.state.style}
                        position="top-right"
                        alerts={this.state.alerts}
                        timeout = {1000}
                        onDismiss={this.onAlertDismissed.bind(this)}
                    />
                
                  <div className="col-lg-12">
                    <div className="block margin-bottom-sm">
                      <div className="title"><strong>Detail Notification</strong></div>
                      <div className="table-responsive"> 
                        <table className="table">
                          <thead>
                            <tr>
                              <th>PR Code</th>
                              {/* <th>Prioriry</th>
                              <th>Product Type</th> */}
                              <th>Total Taxes</th>
                              <th>Total</th>
                              <th style={{textAlign : 'center'}}>Action</th>
                              {/* <th style={{textAlign : 'center'}}>Action</th> */}
                            </tr>
                          </thead>
                           
                        
                           {this.getDataApprove()}
    
                           
                         
                        </table>
                      </div>
                      
                    </div>
                    <div><button className="btn btn-primary" style={{float : 'right'}} onClick={this.goBack}>Go Back</button></div>
                  </div>
            
                </div>
                
                )
            }
        else if(params.type === "approved")
        {
            return(
            // <div className="col-lg-12">  
            //     <div className="messages-block block">
            //         <div className="title"><strong>List New Messages</strong></div>
            //         <div className="messages">                                         
            //             {this.getDataRead()}
            //         </div>
            //     </div>
            // </div>
            <div className="col-lg-12">
                    <div className="block margin-bottom-sm">
                      <div className="title"><strong>Detail Notification</strong></div>
                      <div className="table-responsive"> 
                        <table className="table">
                          <thead>
                            <tr>
                              <th>PR Code</th>
                              {/* <th>Prioriry</th>
                              <th>Product Type</th> */}
                              <th>Total Taxes</th>
                              <th>Total</th>
                              <th style={{textAlign : 'center'}}>Action</th>
                              {/* <th style={{textAlign : 'center'}}>Action</th> */}
                            </tr>
                          </thead>
                           
                        
                           {this.getDataApprove()}
    
                           
                         
                        </table>
                      </div>
                      
                    </div>
                    <div><button className="btn btn-primary" style={{float : 'right'}} onClick={this.goBack}>Go Back</button></div>
                  </div>
           
            )
        }
        else if(params.type === "read")
        {
            return(
            <div className="col-lg-12">  
                <div className="messages-block block">
                    <div className="title"><strong>List New Messages</strong></div>
                    <div className="messages">                                         
                                    <a href="#"  className="message d-flex align-items-center">
                                         <div className="profile" style={{lineHeight : '4'}}>
                                         <i className="fa fa-snowflake-o"></i>
                                         </div>
                                         <div className="content col-md-10">   <strong className="d-block">Create shipping address</strong>
                                             <span className="d-block">New shipping</span>
                                           
                                         </div>
                                         <div className="col-md-2"  style={{float : 'right'}}>
                                         <p className="date d-block" style={{fontStyle : 'italic'}}>9:30am</p>
                                             </div>
                                    </a>
                    </div>
                </div>
            </div>
            )
       
        
        }
    }
}
   
      
    