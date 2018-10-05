import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, Link } from 'react-router-dom';
// import $ from 'jquery'
// import 'jquery/src/jquery';
// bootstrap
// import 'bootstrap'
// import 'bootstrap';
// bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/less/bootstrap';
// require('bootstrap/dist/css/bootstrap.min.css');
// import 'jquery';
// import {$,jQuery} from 'jquery';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { observer } from 'mobx-react';
import path from '../path_variable';
import MyNotification from '../MyNotification';
import Paging from '../paging-component/Paging';
import Select from 'react-select';
import { ENGINE_METHOD_DIGESTS } from 'constants';

@observer
export default class Table extends React.Component {


    constructor(props) {
        super(props);


    }
    handleUpdate(e, row) {

        this.props.store.updateItem1(row);
        const target = e.currentTarget;
        const name = target.name;
        if (name == "modalUpdate") {
            this.refs.modalEdit.toggle();

        }
        else if (name == "modalDelete") {
            this.refs.modalDelete.toggle();
        }
        else if (name == "modalDetail") {
            this.refs.modalDetail.toggle();
        }
    }



    componentWillMount() {


        // this.props.store.fetchData(1);
        // const { match: {params}} = this.props;
        // this.props.store.fetchData(this.props.type ,1)       
    }




    render() {


        // const items = this.state.items;
        // const items = !!this.props.store.items ? this.props.store.items.slice() : [];
        const items = !!this.props.store.items.records ? this.props.store.items.records.slice() : [];
        var count = 1;
        return (
            <div className="text-align" style={{ marginBottom: '50px' }}  >

                <ModalDetail ref="modalDetail" store={this.props.store} />
                <ModalDelete ref="modalDelete" store={this.props.store} />
                <ModalEdit ref="modalEdit" store={this.props.store} />
                <ReactTable

                    data={items}
                    showPageSizeOptions={true}
                    id="table"

                    columns={[

                        {
                            Header: "No.",
                            id: "NoId",
                            maxWidth: 50,
                            Cell: ({ row }) => (this.props.store.items.page - 1) * (this.props.store.items.limit) + (row._index + 1),
                            filterable: false,
                        },
                        {
                            Header: "Course level",
                            id: "courseLevelName",
                            minWidth: 100,
                            accessor: d => d.courseLevelName,

                        },
                        {
                            Header: "Class",
                            id: "className",
                            minWidth: 100,
                            accessor: d => d.className,

                        },
                        {
                            Header: "Teacher",
                            id: "userName",
                            minWidth: 50,
                            accessor: d => d.userName,

                        },
                        {
                            Header: "Quantity",
                            id: "quantity",
                            minWidth: 60,
                            accessor: d => d.quantity,

                        },

                        {
                            Header: 'Status',
                            id: "classStatus",
                            minWidth: 50,
                            accessor: d => {
                                if (d.classStatus == 'ACTIVE') {
                                    return (
                                        <i style={{ color: 'green' }} className="fa fa-check"></i>
                                    )
                                }
                                else {
                                    return (
                                        <i style={{ color: 'red' }} className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    )
                                }
                            }


                        },




                        {
                            Header: 'Action',
                            filterable: false,

                            style: { textAlign: 'center' },
                            Cell: ({ row }) =>
                                <Row>
                                    <Link to={`/schedule/${row._original.classId}`}  className="btn btn-simple btn-info btn-icon">
                                        <i className="fas fa-user-plus fa-lg" aria-hidden="true"></i>
                                    </Link>
                                    <Button className="btn btn-simple btn-info btn-icon" name="modalDetail" onClick={(e) => this.handleUpdate(e, items[row._index])} >
                                        <i className="fas fa-info-circle  fa-lg" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="btn btn-simple btn-warning btn-icon" name="modalUpdate" onClick={(e) => this.handleUpdate(e, items[row._index])} >
                                        <i className="far fa-edit fa-lg" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="btn btn-simple btn-danger btn-icon" name="modalDelete" onClick={(e) => this.handleUpdate(e, items[row._index])} >
                                        <i className="far fa-trash-alt fa-lg" aria-hidden="true"></i>
                                    </Button>
                                </Row>
                        }

                    ]}
                    defaultPageSize={20}
                    showPagination={false}
                    minRows

                    className="-striped -highlight"
                />
                <Paging
                    data={this.props.store.items}
                    fetchData={this.props.store.fetchData}
                />

            </div>
        )
    }
}
class ModalDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
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
            modal: !this.state.modal
        });

    }
    handleSubmit = (e) => {
        e.preventDefault();

        const id = this.props.store.newItems1.classId;
        fetch(path.class.DEL_CLASS + id, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(), // data can be `string` or {object}!
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
                MyNotification.alertSuccess("Delete class success !", "");

                if (this.props.store.items.records.length - 1 == 0) {
                    this.props.store.fetchData(this.props.store.items.page - 1);
                }
                else {
                    this.props.store.fetchData(this.props.store.items.page);
                }

            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Delete class fail !", "");
            })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader >Delete Class</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to delete this class?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        <Button color="danger" onClick={this.handleSubmit} >Delete</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
@observer
class ModalEdit extends React.Component {
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
    handleSelectChange = (e) => {
        console.log("=====data", e.value)
        this.props.store.updateItem1({
            ...this.props.store.newItems1,
            [e.name]: e.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.props.store.newItems1;
        console.log("---------------------data", data)
        fetch(path.class.EDIT_CLASS, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
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
                this.props.store.newItems1 = [];
                MyNotification.alertSuccess("Update class success !", "");
                this.props.store.fetchData(this.props.store.items.page);
            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Update class fail !", "");
            })
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

        // const branchName = !!this.props.store.branchName?this.props.store.branchName.slice():[];
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit} >
                        <ModalHeader >Edit Class</ModalHeader>
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
                                        <FieldFeedbacks for="courseLevelId">
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
                                        <FieldFeedbacks for="className">
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
                                            type="text"
                                            id="quantity"
                                            name="quantity"
                                            defaultValue={this.props.store.newItems1.quantity}
                                            onChange={this.onTodoChange}
                                            required
                                            minLength={3}
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
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            <Button color="info" disabled={this.state.submitButtonDisabled}>Save changes</Button>
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal >
            </div >
        )
    }
}
class ModalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            submitButtonDisabled: false,
        };


    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }


    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints  >
                        <ModalHeader >Detail Class</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col sm={{ size: 8, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 12, offset: 0 }} >
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Course Level Name: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.courseLevelName} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Teacher: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.userName} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Class: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.className} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Quantity: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.quantity} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Start Date: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.startDate} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">End Date: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.endDate} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Status: </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control-plaintext" style={{ color: 'white' }} id="staticEmail" defaultValue={this.props.store.newItems1.classStatus} />
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                        </ModalBody>
                        <ModalFooter>
                            <Button className="btn btn-info" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal>
            </div>
        )
    }
}