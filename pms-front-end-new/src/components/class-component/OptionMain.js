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
                <ModalAdd ref="modalAdd" store={this.props.store} />
                <Button className="btn btn-primary" onClick={this.handleClickAdd}  >Add New Class</Button>
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
        }, () => {
            if (this.state.modal == true) {
                this.props.store.fetchCourseLevelName();
                this.props.store.fetchUserName();
            }
        });

        this.props.store.newItems1 = [];
    }
    onTodoChange = (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.props.store.updateItem1({
            ...this.props.store.newItems1,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }
    onTodoChangeDelegate = (e, a) => {
        if (a.value != "") {
            this.form.validateFields(a);
            this.form.validateFields(e.target);
        }
        const data = this.props.store.newItems1;
        data[e.target.name] = e.target.value
        this.props.store.newItems1 = data
        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });

    }
    handleSelectChange = (e) => {
        this.props.store.updateItem1({
            ...this.props.store.newItems1,
            [e.name]: e.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.props.store.newItems1;
        // var lastPage = Math.ceil(this.props.store.shipping.totalPage / this.props.store.shipping.limit);
        console.log("====data", data)
        fetch(path.class.ADD_CLASS, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        }).then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {

                this.setState({
                    modal: false
                });

                MyNotification.alertSuccess("Add class success !", "");

                this.props.store.fetchData(1);
                this.props.store.newItems1 = []


            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Add class fail !", "");
            })

    }

    render() {
        const listCourseLevelName = !!this.props.store.listCourseLevelName ? this.props.store.listCourseLevelName.map(listCourseLevelName => {
            return ({
                value: listCourseLevelName.courseLevelId, label: listCourseLevelName.courseLevelName, name: 'courseLevelId'
            })
        }) : [];
        const listUserName = !!this.props.store.listUserName ? this.props.store.listUserName.map(listUserName => {
            return ({
                value: listUserName.userId, label: listUserName.userName, name: 'userId'
            })
        }) : [];
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                        <ModalHeader >Create New Room</ModalHeader>
                        <ModalBody>

                            <FormGroup for="courseLevelId">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel htmlFor="courseLevelId">Course Level Name: <abbr className="text-danger">*</abbr></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="courseLevelId"
                                            name="courseLevelId"
                                            onChange={(e) => this.handleSelectChange(e)}
                                            options={listCourseLevelName}
                                            value={!!this.props.store.newItems1.courseLevelId ? this.props.store.newItems1.courseLevelId : ''}
                                            clearable={false}
                                            required
                                            disabled={this.state.isEnable}
                                        />
                                        <FieldFeedbacks for="branchId">
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>

                            <FormGroup for="className">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="className">Class Name<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            type="text"
                                            id="className"
                                            name="className"
                                            defaultValue={this.props.store.newItems1.className}
                                            onChange={this.onTodoChange}
                                            required
                                            minLength={3}
                                            placeholder="Class Name"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="roomName">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="userId">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel htmlFor="userId">Teacher: <abbr className="text-danger">*</abbr></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="userId"
                                            name="userId"
                                            onChange={(e) => this.handleSelectChange(e)}
                                            options={listUserName}
                                            value={!!this.props.store.newItems1.userId ? this.props.store.newItems1.userId : ''}
                                            clearable={false}
                                            required
                                            disabled={this.state.isEnable}
                                        />
                                        <FieldFeedbacks for="userId">
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="quantity">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="floor">Quantity: <font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            min={0}
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            defaultValue={this.props.store.newItems1.quantity}
                                            onChange={this.onTodoChange}
                                            required

                                            placeholder="Quantity"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="floor">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="startDate">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="floor">Start date: <font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            format="yyyy-MM-dd"
                                            type="date"
                                            name="startDate"
                                            value={!!this.props.store.newItems1.startDate ? this.props.store.newItems1.startDate : ""}
                                            onChange={(e) => this.onTodoChangeDelegate(e, this.endDate)}
                                            disabled={this.state.isEnable}
                                            innerRef={startDate => this.startDate = startDate}
                                            id="startDate"
                                            style={{ fontSize: '11px' }}
                                            placeholder="date placeholder"
                                            required
                                        />

                                        <FieldFeedbacks for="startDate">
                                            <FieldFeedback when="*" />
                                            <FieldFeedback when={value => value > this.endDate.value}>From date do not larger than to Date</FieldFeedback>
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="endDate">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="floor">End date: <font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            format="yyyy-MM-dd"
                                            type="date"
                                            name="endDate"
                                            value={!!this.props.store.newItems1.endDate ? this.props.store.newItems1.endDate : ""}
                                            innerRef={endDate => this.endDate = endDate}
                                            onChange={(e) => this.onTodoChangeDelegate(e, this.startDate)}
                                            disabled={this.state.isEnable}
                                            id="endDate"
                                            style={{ fontSize: '11px' }}
                                            placeholder="date placeholder"
                                            required
                                        />
                                        <FieldFeedbacks for="endDate">
                                            <FieldFeedback when="*" />
                                            <FieldFeedback when={value => value < this.startDate.value}>To date do not small than from Date</FieldFeedback>
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>


                            <FormGroup for="classStatus">
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="cost">Status<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="classStatus"
                                            name="classStatus"
                                            onChange={this.handleSelectChange}
                                            options={[{ "value": "ACTIVE", "label": "ACTIVE", name: 'classStatus' }, { "value": "INACTIVE", "label": "INACTIVE", name: 'classStatus' }]}
                                            clearable={false}
                                            required
                                            value={!!this.props.store.newItems1.classStatus ? this.props.store.newItems1.classStatus : 'ACTIVE'}
                                        />
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
