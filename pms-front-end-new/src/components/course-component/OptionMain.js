import React from 'react';
import { Form, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Row, Col } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import MyNotification from '../MyNotification';
import Select from 'react-select';

@observer
export default class Breadcrum extends React.Component {
    constructor(props) {
        super(props);

    }
    handleClickAdd = () => {
        this.refs.modalAdd.toggle();
    }
    onAlertDismissed = (alert) => {
        const alerts = this.props.store.alerts;
        const idx = alerts.indexOf(alert);
        if (idx >= 0) {
            this.props.store.alerts = [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
        }
    }
    render() {
        return (
            <div>


                <ModalAdd ref="modalAdd"  store={this.props.store} />
                <div className="public-user-block block" style={{ padding: 'none' }}>
                    <div className="row d-flex align-items-center">

                        <Button color="primary" onClick={this.handleClickAdd}  >Add New Course</Button>

                    </div>
                </div>



            </div>
        )
    }
};
@observer
class ModalAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            submitButtonDisabled: false
        };

    }
    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
     
        this.props.store.newItems = [];
    }
    onTodoChange = (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.props.store.updateItem({
            ...this.props.store.newItems,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.props.store.newItems;
        // var lastPage = Math.ceil(this.props.store.shipping.totalPage / this.props.store.shipping.limit);
       console.log("====data", data)
        fetch(path.course.ADD_COURSE, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })  .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
              
                this.setState({
                    modal: false
                });

                MyNotification.alertSuccess("Add course success !", ""); 
                var a = this.props.store;
                 this.props.store.fetchData(this.props.store.items.totalPage);
                // this.props.store.fetchData();
                
            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Add course fail !", "");
            })

    }
   
    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                        <ModalHeader >Create New Course</ModalHeader>
                        <ModalBody>
                          
                            
                           
                            <FormGroup for="courseName">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="courseName">Course Name<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            type="text"
                                            id="courseName"
                                            name="courseName"
                                            defaultValue={this.props.store.newItems.courseName}
                                            onChange={this.onTodoChange}     
                                            required
                                            minLength={3}
                                            placeholder="Course Name"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="name">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>

                            <FormGroup for="description">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel htmlFor="description">Description</FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Input type="textarea" placeholder="Description" rows="5" maxLength={500} name="description" id="description" defaultValue={this.props.store.newItems.description} onChange={this.onTodoChange} />
                                    </div>
                                </div>
                            </FormGroup>

                            

                            {/* </Col>
                            </Row> */}
                        </ModalBody>
                        <ModalFooter>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            <Button color="info" disabled={this.state.submitButtonDisabled}>Save changes</Button>
                        </ModalFooter>
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal>
            </div>
        );
    }
}
