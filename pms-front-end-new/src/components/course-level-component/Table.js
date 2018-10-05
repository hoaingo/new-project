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
import store from './Store'
import { Link } from 'react-router-dom';

@observer
export default class Table extends React.Component {


    constructor(props) {
        super(props);


    }
    handleUpdate(e, row) {

        store.updateItem(row);
        const target = e.currentTarget;
        const name = target.name;
        if (name == "modalUpdate") {
            this.refs.modalEdit.toggle();
            store.fetchCourseName();
        }
        else if (name == "modalDelete") {
            this.refs.modalDelete.toggle();
        }
        else if (name == "modalDetail") {
            this.refs.modalDetail.toggle();
        }
    }



    componentWillMount() {


        store.fetchData(1);
        store.fetchRoom(1);
    }




    render() {


        // const items = this.state.items;
        // const items = !!store.items ? store.items.slice() : [];
        const items = !!store.items.records ? store.items.records.slice() : [];
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
                            Cell: ({ row }) => (store.items.page - 1) * (store.items.limit) + (row._index + 1),
                            filterable: false,
                        },
                        {
                            Header: "Course name",
                            id: "courseName",
                            minWidth: 100,
                            accessor: d => d.courseName,

                        },
                        {
                            Header: "Course level name",
                            id: "courseLevelName",
                            minWidth: 100,
                            accessor: d => d.courseLevelName,

                        },
                        {
                            Header: "Curriculum",
                            id: "curriculum",
                            minWidth: 100,
                            accessor: d => d.curriculum,

                        },
                        {
                            Header: "Duration",
                            id: "Duration",
                            minWidth: 50,
                            accessor: d => d.duration,

                        },
                        {
                            Header: "Cost",
                            id: "cost",
                            minWidth: 70,
                            accessor: d => d.cost,

                        },
                        {
                            Header: 'Status',
                            id: "status",
                            minWidth: 70,
                            accessor: d => d.status,

                        },

                        {
                            Header: 'Last Updated Date',
                            id: "lastUpdatedDate",
                            minWidth: 80,
                            accessor: d => d.lastUpdatedDate,

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
                                    <Link to={`course-level/time-sheet/${row._original.courseLevelId}`} className="btn btn-simple btn-info btn-icon" rel="tooltip" data-placement="bottom" title="Time sheet" data-original-title="Time-Sheet">
                                        <i className="far fa-calendar-alt fa-lg" aria-hidden="true"></i>
                                    </Link>
                                    <Button className="btn btn-simple btn-warning btn-icon" name="modalUpdate" onClick={(e) => this.handleUpdate(e, items[row._index])} rel="tooltip" data-placement="bottom" title="Edit">
                                        <i className="far fa-edit fa-lg" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="btn btn-simple btn-danger btn-icon" name="modalDelete" onClick={(e) => this.handleUpdate(e, items[row._index])} rel="tooltip" data-placement="bottom" title="Delete">
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
                    data={store.items}
                    fetchData={store.fetchData}
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

        const id = store.newItems.courseLevelId;
        fetch(path.course_level.DEL_COURSE_LEVEL + id, {
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
                MyNotification.alertSuccess("Delete couse level success !", "");

                if (store.items.records.length - 1 == 0) {
                    store.fetchData(store.items.page - 1);
                }
                else {
                    store.fetchData(store.items.page);
                }

            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Delete address level fail !", "");
            })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader >Delete Course Level</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to delete this course level?</p>
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
    
    onTimeChange1 = (options) => {
        var newItem = store.newItems
        newItem["startTime"] = options.hour + ":" + options.minute;
        store.newItems = newItem;
        // store.updateItem(newItem)
    }

    onTimeChange2 = (options) => {
        var newItem = store.newItems
        newItem["endTime"] = options.hour + ":" + options.minute;
        store.newItems = newItem;
    }

    onFocusChange = (focusStatue) => {
        // do something
    }

    onTodoChange = (e) => {
        e.preventDefault();

        const target = e.currentTarget;
        this.form.validateFields(target);
        store.updateItem({
            ...store.newItems,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }
    handleSelectChange = (e) => {
        console.log("=====data", e.value)
        store.updateItem({
            ...store.newItems,
            [e.name]: e.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = store.newItems;
        console.log("---------------------data", data)
        fetch(path.course_level.EDIT_COURSE_LEVEL, {
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
                store.newItems = [];
                MyNotification.alertSuccess("Update course level success !", "");
                store.fetchData(store.items.page);
            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Update course level fail !", "");
            })
    }
    render() {

        const courseName = !!store.course ? store.course.map(course => {
            return ({
                value: course.courseId, label: course.courseName, name: 'courseId'
            })
        }) : [];
        const room = !!store.room ? store.room.map(course => {
            return ({
                value: course.roomId, label: course.roomName, name: 'roomId'
            })
        }) : [];
        const dayOfWeek = [{
            "value": "Monday",
            "label": "Monday",
            name: 'day'
        }, {
            "value": "Tuesday",
            "label": "Tuesday",
            name: 'day'
        }, {
            "value": "Wednesday",
            "label": "Wednesday",
            name: 'day'
        }, {
            "value": "Thursday",
            "label": "Thursday",
            name: 'day'
        }, {
            "value": "Friday",
            "label": "Friday",
            name: 'day'
        }, {
            "value": "Saturday",
            "label": "Saturday",
            name: 'day'
        }, {
            "value": "Sunday",
            "label": "Sunday",
            name: 'day'
        }]
        const start = !!store.newItems.startTime ? store.newItems.startTime : "12:00"
        const end = !!store.newItems.endTime ? store.newItems.endTime : "13:00"
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit} >
                        <ModalHeader >Edit Course Level</ModalHeader>
                        <ModalBody>

                            <FormGroup for="courseId">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel htmlFor="courseId">Course Name: <abbr className="text-danger">*</abbr></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="courseId"
                                            name="courseId"
                                            onChange={(e) => this.handleSelectChange(e)}
                                            options={courseName}
                                            value={!!store.newItems.courseId ? store.newItems.courseId : ''}
                                            clearable={false}
                                            required
                                            disabled={this.state.isEnable}
                                        />
                                        <FieldFeedbacks for="courseId">
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>

                            <FormGroup for="courseLevelName">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="courseLevelName">Course Level Name<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            type="text"
                                            id="courseLevelName"
                                            name="courseLevelName"
                                            defaultValue={store.newItems.courseLevelName}
                                            onChange={this.onTodoChange}
                                            required
                                            minLength={3}
                                            placeholder="Course Level Name"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="courseLevelName">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>

                            <FormGroup for="curriculum">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="curriculum">Curriculum<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            type="text"
                                            id="curriculum"
                                            name="curriculum"
                                            defaultValue={store.newItems.curriculum}
                                            onChange={this.onTodoChange}
                                            required
                                            minLength={3}
                                            placeholder="Curriculum"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="curriculum">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="duration">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="duration">Duration<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            type="number"
                                            id="duration"
                                            name="duration"
                                            defaultValue={store.newItems.duration}
                                            onChange={this.onTodoChange}
                                            required
                                            minLength={3}
                                            placeholder="duration"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="duration">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>

                            {/* <FormGroup for="day">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="day">Day of week<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="day"
                                            name="day"
                                            onChange={(e) => this.handleSelectChange(e)}
                                            options={dayOfWeek}
                                            value={!!store.newItems.day ? store.newItems.day : ''}
                                            clearable={false}
                                            required
                                            disabled={this.state.isEnable}
                                        />
                                        <FieldFeedbacks for="day">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="startTime">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="startTime">Start time<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <TimePicker
                                            id="startTime"
                                            name="startTime"
                                            innerRef={startTime => this.startTime = startTime}
                                            onFocusChange={this.onFocusChange}
                                            onTimeChange={this.onTimeChange1}
                                            theme="material"
                                            time={start}
                                        />
                                        <FieldFeedbacks for="startTime">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value <= this.endTime.value}> Start time must be lower than end time</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="endTime">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="endTime">End time<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <TimePicker
                                            id="endTime"
                                            name="endTime"
                                            innerRef={endTime => this.endTime = endTime}
                                            // onFocusChange={this.onFocusChange}
                                            onTimeChange={this.onTimeChange2}
                                            theme="material"
                                            time={end}
                                            minuteStep={1}
                                        // colorPalette="dark"
                                        />
                                        <FieldFeedbacks for="endTime">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value <= this.startTime.value}> End time must be greater than start time</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="room">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel htmlFor="room">Room <abbr className="text-danger">*</abbr></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="room"
                                            name="room"
                                            onChange={(e) => this.handleSelectChange(e)}
                                            options={room}
                                            value={!!store.newItems.roomId ? store.newItems.roomId : ''}
                                            clearable={false}
                                            required
                                            disabled={this.state.isEnable}
                                            onChange={(e) => this.handleSelectChange(e)}
                                        />
                                        <FieldFeedbacks for="room">
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup> */}

                            <FormGroup for="cost">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="cost">Cost<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <FormControlInput
                                            type="text"
                                            id="cost"
                                            name="cost"
                                            defaultValue={store.newItems.cost}
                                            onChange={this.onTodoChange}
                                            required
                                            minLength={3}
                                            placeholder="cost"
                                            maxLength={50}
                                        />
                                        <FieldFeedbacks for="cost">
                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 50}>Too long</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup for="status">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="cost">Status<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="status"
                                            name="status"
                                            onChange={this.handleSelectChange}
                                            options={[{ "value": "ACTIVE", "label": "ACTIVE", name: 'status' }, { "value": "INACTIVE", "label": "INACTIVE", name: 'status' }]}
                                            clearable={false}
                                            required
                                            value={!!store.newItems.status ? store.newItems.status : 'ACTIVE'}
                                        />
                                    </div>
                                </div>
                            </FormGroup>
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