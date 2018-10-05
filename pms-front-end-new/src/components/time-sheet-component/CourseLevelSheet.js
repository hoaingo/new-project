import React from 'react';
import { Col, Form, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Row } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import Select from 'react-select';
import MyNotification from '../MyNotification';
import ReactTable from "react-table";
import store from './Store';
import TimePicker from 'react-times';
import ArrayDiff from './../../../public/dashboard/js/array-diff-component'

@observer
export default class CourseLevelSheet extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     modal: false
        // }

    }

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    toggle = () => {
        // this.setState({
        //     modal: !this.state.modal,
        // });

    }

    onTimeChange1 = (options) => {
        var newItem = store.currentTimeSheet
        newItem["startTime"] = options.hour + ":" + options.minute;
        store.currentTimeSheet = newItem;
        // store.updateTimeSheet(newItem)
    }

    onTimeChange2 = (options) => {
        var newItem = store.currentTimeSheet
        newItem["endTime"] = options.hour + ":" + options.minute;
        store.currentTimeSheet = newItem;
    }

    onFocusChange = (focusStatue) => {
        // do something
    }

    onTodoChange = (e) => {
        e.preventDefault();

        const target = e.currentTarget;
        this.form.validateFields(target);
        store.updateTimeSheet({
            ...store.currentTimeSheet,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }
    handleSelectChange = (e) => {
        console.log("=====data", e.value)
        store.updateTimeSheet({
            ...store.currentTimeSheet,
            [e.name]: e.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = store.currentTimeSheet;
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
                store.currentTimeSheet = [];
                MyNotification.alertSuccess("Update course level success !", "");
                store.fetchData(store.items.page);
            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Update course level fail !", "");
            })
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        if (params.courseLevelId && params.courseLevelId != null) {
            store.fetchTimeSheet(params.courseLevelId);
        }
        store.fetchRoom(1);
    }

    handleUpdate(e, row) {
        store.updateTimeSheet(row);
        const target = e.currentTarget;
        const name = target.name;
        if (name == "modalUpdate") {
            this.refs.modalEdit.toggle();
        }
        else if (name == "modalDelete") {
            this.refs.modalDelete.toggle();
        }
        else if (name == "add") {
            this.refs.modalAdd.toggle();
        }
    }

    render() {
        const timeSheet = !!store.timeSheet ? store.timeSheet.slice() : [];

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
        var start = !!store.currentTimeSheet ? store.currentTimeSheet.startTime : '12:00'
        const end = !!store.currentTimeSheet ? store.currentTimeSheet.endTime : "13:00"
        const existDay = !!store.timeSheet ? store.timeSheet.map(item => {
            return item.day
        }) : []
        const dayOfWeek = ArrayDiff.arrayDiff(store.dayOfWeek.slice(), existDay);
        const currentTimeSheet = !!store.currentTimeSheet ? store.currentTimeSheet : {}

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="purple">
                            <i className="material-icons">assignment</i>
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">Time sheet</h4>
                            <div className="text-align" id="datatables_wrapper">
                                <ModalDelete ref="modalDelete" />
                                <ModalEdit ref="modalEdit" />
                                <Button color="primary" name="add" onClick={this.toggle()}>Add new time sheet</Button>
                                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit} >
                                        <ModalHeader >Edit Course Level</ModalHeader>
                                        <ModalBody>
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
                                                            value={!!timeSheet ? timeSheet[0].courseLevelName : ''}
                                                            required
                                                            minLength={3}
                                                            disabled
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
                                            <FormGroup for="day">
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
                                                            value={!!currentTimeSheet.day ? currentTimeSheet.day : ''}
                                                            clearable={false}
                                                            required
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
                                                            value={!!currentTimeSheet.roomId ? currentTimeSheet.roomId : ''}
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
                                                            value={!!currentTimeSheet.status ? currentTimeSheet.status : 'ACTIVE'}
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
                                </Modal > */}
                                <ReactTable
                                    data={timeSheet}
                                    showPageSizeOptions={true}
                                    id="table"
                                    columns={[
                                        {
                                            Header: "No.",
                                            id: "NoId",
                                            maxWidth: 50,
                                            Cell: ({ row }) => row._index + 1,
                                            filterable: false,
                                        },
                                        {
                                            Header: "Room name",
                                            id: "roomName",
                                            minWidth: 100,
                                            accessor: d => d.roomName,

                                        },
                                        {
                                            Header: "Day of week",
                                            id: "day",
                                            minWidth: 100,
                                            accessor: d => d.day,

                                        },
                                        {
                                            Header: "Start time",
                                            id: "startTime",
                                            minWidth: 100,
                                            accessor: d => d.startTime,

                                        },
                                        {
                                            Header: "End time",
                                            id: "endTime",
                                            minWidth: 50,
                                            accessor: d => d.endTime,

                                        },
                                        {
                                            Header: "Last updated by",
                                            id: "lastUpdatedBy",
                                            minWidth: 70,
                                            accessor: d => d.lastUpdatedBy,
                                        },
                                        {
                                            Header: 'Schedule status',
                                            id: "scheduleStatus",
                                            minWidth: 70,
                                            accessor: d => d.scheduleStatus,
                                        },
                                        {
                                            Header: 'Action',
                                            filterable: false,
                                            style: { textAlign: 'center' },
                                            Cell: ({ row }) =>
                                                <Row>
                                                    <Button className="btn btn-simple btn-warning btn-icon" name="modalUpdate" onClick={(e) => this.handleUpdate(e, row._original)} >
                                                        <i className="far fa-edit fa-lg" aria-hidden="true"></i>
                                                    </Button>
                                                    <Button className="btn btn-simple btn-danger btn-icon" name="modalDelete" onClick={(e) => this.handleUpdate(e, row._original)} >
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
                                {/* <Paging
                                    data={store.items}
                                    fetchData={store.fetchData}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
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

        const id = store.currentTimeSheet.courseLevelId;
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
        var newItem = store.currentTimeSheet
        newItem["startTime"] = options.hour + ":" + options.minute;
        store.currentTimeSheet = newItem;
        // store.updateTimeSheet(newItem)
    }

    onTimeChange2 = (options) => {
        var newItem = store.currentTimeSheet
        newItem["endTime"] = options.hour + ":" + options.minute;
        store.currentTimeSheet = newItem;
    }

    onFocusChange = (focusStatue) => {
        // do something
    }

    onTodoChange = (e) => {
        e.preventDefault();

        const target = e.currentTarget;
        this.form.validateFields(target);
        store.updateTimeSheet({
            ...store.currentTimeSheet,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }
    handleSelectChange = (e) => {
        console.log("=====data", e.value)
        store.updateTimeSheet({
            ...store.currentTimeSheet,
            [e.name]: e.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = store.currentTimeSheet;
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
                store.currentTimeSheet = [];
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
        const start = !!store.currentTimeSheet.startTime ? store.currentTimeSheet.startTime : "12:00"
        const end = !!store.currentTimeSheet.endTime ? store.currentTimeSheet.endTime : "13:00"
        const existDay = !!store.timeSheet ? store.timeSheet.map(item => {
            return item.day
        }) : []
        const dayOfWeek = ArrayDiff.arrayDiff(store.day, existDay);
        const newDayOfWeek = dayOfWeek.map(item => {
            return {
                "value": item,
                "label": item,
                name: 'day'
            }
        })

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
                                            options={courseName}
                                            value={!!store.currentTimeSheet.courseName ? store.currentTimeSheet.courseName : ''}
                                            clearable={false}
                                            required
                                            disabled
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
                                            defaultValue={store.currentTimeSheet.courseLevelName}
                                            required
                                            minLength={3}
                                            disabled
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
                            <FormGroup for="day">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel style={{ height: '30px' }} htmlFor="day">Day of week<font color="red">*</font></FormControlLabel>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            id="day"
                                            name="day"
                                            onChange={(e) => this.handleSelectChange(e)}
                                            options={newDayOfWeek}
                                            value={!!store.currentTimeSheet.day ? store.currentTimeSheet.day : ''}
                                            clearable={false}
                                            required
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
                                            value={!!store.currentTimeSheet.roomId ? store.currentTimeSheet.roomId : ''}
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
                                            value={!!store.currentTimeSheet.status ? store.currentTimeSheet.status : 'ACTIVE'}
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