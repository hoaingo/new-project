import React from 'react';
import { Form, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Row, Col } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import MyNotification from '../MyNotification';
import Select from 'react-select';
import TimePicker from 'react-times';
// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
import store from './Store'
import { CSVLink, CSVDownload } from 'react-csv';

@observer
export default class Breadcrum extends React.Component {
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
                store.fetchCourseName();
            }
        });

        store.newItems = [];
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
        store.updateItem({
            ...store.newItems,
            [e.name]: e.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = store.newItems;
        // var lastPage = Math.ceil(store.shipping.totalPage / store.shipping.limit);
        fetch(path.course_level.ADD_COURSE_LEVEL, {
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

                MyNotification.alertSuccess("Add course level success !", "");

                store.fetchData(1);


            }).catch(error => {
                this.setState({
                    modal: false
                });
                MyNotification.alertError("Add course level fail !", "");
            })

    }

    componentWillMount() {
        store.fetchRoom(1);
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
        const start = !!store.newItems.startTime ? store.newItems.startTime : "12:00"
        const end = !!store.newItems.endTime ? store.newItems.endTime : "13:00"

        return (
            <div>


                <div className="public-user-block block" style={{ padding: 'none' }}>
                    <div className="row d-flex align-items-center">

                        <Button color="primary" onClick={this.toggle}  >Add New Course Level</Button>
                        <CSVLink data={store.items.records.slice()} className="btn btn-primary">Export course level list</CSVLink>

                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                        <ModalHeader >Create New Course Level</ModalHeader>
                        <ModalBody>

                            <FormGroup for="courseId">
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormControlLabel htmlFor="courseId">Course Name <abbr className="text-danger">*</abbr></FormControlLabel>
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
                                            options={store.dayOfWeek}
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
                            </FormGroup>


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
        )
    }
}