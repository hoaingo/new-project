import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
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

        this.state = {
            items: [
                { "id": 186, "name": "Ca 1", "time": "Evening 18h00' -19h30'", "status": "Active" },
                { "id": 186, "name": "Ca 2", "time": "Evening 19h45' -21h15'", "status": "Active" },
                { "id": 186, "name": "Ca 3", "time": "Afternoon 16h15 – 17h45", "status": "Active" },
                { "id": 186, "name": "Ca 4", "time": "Morning 9h00' -10h30'", "status": "Active" },
                { "id": 186, "name": "Ca 5", "time": "Afternoon 17h30 - 19h00", "status": "Active" },
                { "id": 186, "name": "Ca 6", "time": "Morning 7h15' -8h45'", "status": "Active" },









            ]
        };
    }
    handleUpdate(e, row) {

        this.props.store.updateItem(row);
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


        this.props.store.fetchData(1);
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
                            Header: "Course name",
                            id: "courseName",
                            minWidth: 100,
                            accessor: d => d.courseName,

                        },
                        {
                            Header: 'Description',
                            id: "description",
                            minWidth: 100,
                            accessor: d => d.description,

                        },

                        {
                            Header: 'Last Updated Date',
                            id: "lastUpdatedDate",
                            minWidth: 80,
                            accessor: d => d.lastUpdateDate,

                        },

                        {
                            Header: 'Last Updated By',
                            id: "lastUpdatedBy",
                            minWidth: 80,
                            accessor: d => d.lastUpdatedBy,

                        },


                        {
                            Header: 'Action',
                            filterable: false,

                            style: { textAlign: 'center' },
                            Cell: ({ row }) =>
                                <Row>
                                    <Button className="btn btn-simple btn-info btn-icon" name="modalDetail">
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

        const id = this.props.store.newItems.courseId;
        fetch(path.course.DEL_COURSE + id, {
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
                MyNotification.alertSuccess("Delete couse success !", "");

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
                MyNotification.alertError("Delete address fail !", "");
            })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader >Delete Address</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to delete this address?</p>
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
        fetch(path.course.EDIT_COURSE, {
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
                this.props.store.newItems = [];
                MyNotification.alertSuccess("Update course success !", "");
                this.props.store.fetchData(this.props.store.items.page);
            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Update course fail !", "");
            })
    }
    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit} >
                        <ModalHeader >Edit Course</ModalHeader>
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
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            <Button color="info" disabled={this.state.submitButtonDisabled}>Save changes</Button>
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal >
            </div >
        )
    }
}