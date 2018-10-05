import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import Select from 'react-select';
import DateTimeComponent from './../../../public/dashboard/js/datetime-picker-component'
import { observer } from 'mobx-react';
import store from './AccountStore';
// import 'bootstrap/dist/css/bootstrap.css'

@observer
class AccountModalForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      store.fetchPermissionName();
    }

    // datePicker = (e) => {
    //     DateTimeComponent.dateTimePicker(e.currentTarget,
    //         {
    //             format: 'MM/DD/YYYY',
    //             icons: {
    //                 time: "fa fa-clock-o",
    //                 date: "fa fa-calendar",
    //                 up: "fa fa-chevron-up",
    //                 down: "fa fa-chevron-down",
    //                 previous: 'fa fa-chevron-left',
    //                 next: 'fa fa-chevron-right',
    //                 today: 'fa fa-screenshot',
    //                 clear: 'fa fa-trash',
    //                 close: 'fa fa-remove'
    //             }
    //         })
    // }

    handleMultiSelectChange = (e) => {

        console.log("----", e)

        const data = {...store.newAccount};
        data["permissions"] = e
        store.newAccount = data

    }
    onTodoChangeDate = (e) => {
        const data = {...store.newAccount};
        data[e.target.name] = e.target.value
        store.newAccount = data
        

    }
    render() {
        const user = !!store.newAccount ? store.newAccount : {}
        const permissions = !!store.permissions ? store.permissions.map(permissions => {
            return ({
                value: permissions.id, label: permissions.name, name: 'permissions'
            })
        }) : [];
        return (
            <div>
                < Modal isOpen={this.props.isOpen} toggle={this.props.toggle} style={{ opacity: "1" }}>
                    <FormWithConstraints ref={(formWithConstraints) => (this.form = formWithConstraints)} onSubmit={this.props.onSave}>
                        <ModalHeader className="custom-modal-header" toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                        <ModalBody>
                            <Row>
                                {
                                    this.props.title != "New teacher" ?
                                        <Col md="6">
                                            <FormGroup for="userId" className="label-floating">
                                                <div>
                                                    <FormControlLabel htmlFor="userId" className="control-label">ID</FormControlLabel>
                                                    <FormControlInput
                                                        type="text"
                                                        id="userId"
                                                        name="userId"
                                                        value={!!user.userId ? user.userId : ''}
                                                        onChange={this.props.onChange}
                                                        required
                                                        disabled
                                                        minLength={5}
                                                        maxLength={50}
                                                    />
                                                    <FieldFeedbacks for="userId">
                                                        <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                        <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                        <FieldFeedback when="*" />
                                                    </FieldFeedbacks>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        :
                                        <Col md="6">
                                            <FormGroup for="permission" className="label-floating">
                                                <div>
                                                    <FormControlLabel htmlFor="permission" className="control-label">Permission</FormControlLabel>
                                                    
                                                     <Select
                                                            id="permissions"
                                                            name="permissions"
                                                            onChange={(e) => this.handleMultiSelectChange(e)}
                                                            options={permissions}
                                                            value={!!store.newAccount.permissions ? store.newAccount.permissions : ''}
                                                            clearable={false}
                                                            required
                                                            multi
                                                            simpleValue
                                                            
                                                        />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                }

                                <Col md="6">
                                    <FormGroup for="fullName" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="fullName" className="control-label">Full name</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={!!user.fullName ? user.fullName : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="fullName">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup for="userName" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="userName" className="control-label">Username</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="userName"
                                                name="userName"
                                                value={!!user.userName ? user.userName : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                minLength={2}
                                                maxLength={25}
                                            />
                                            <FieldFeedbacks for="userName">
                                                <FieldFeedback when="tooShort" >Should be at least 2 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 25} >Should be maximum 25 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="password" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="password" className="control-label">Password</FormControlLabel>
                                            <FormControlInput
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={!!user.password ? user.password : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "Edit teacher" || this.props.title == "User information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="password">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup for="userPhone" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="userPhone" className="control-label">Phone</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="userPhone"
                                                name="userPhone"
                                                value={!!user.userPhone ? user.userPhone : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="userPhone">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="userDateOfBirth" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="userDateOfBirth" className="control-label">Date of birth</FormControlLabel>
                                            {/* <FormControlInput
                                                type="text"
                                                id="userDateOfBirth"
                                                name="userDateOfBirth"
                                                value={!!user.userDateOfBirth ? user.userDateOfBirth : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                                className="datepicker"
                                            // onClick={this.datePicker}
                                            /> */}
                                            <FormControlInput
                                                    format="yyyy-MM-dd"
                                                    type="date"
                                                    name="userDateOfBirth"
                                                    value={!!user.userDateOfBirth ? user.userDateOfBirth : ''}
                                                    onChange={(e) => this.onTodoChangeDate(e)}
                                                    disabled={this.props.title == "User information" ? true : false}
                                                    id="userDateOfBirth"
                                                    placeholder="date placeholder"
                                                    minLength={5}
                                                    maxLength={50}
                                                    required
                                            />
                                        </div>
                                        {/* <div className="col-md-4">
                            <div className="card">
                                <div className="card-header card-header-icon" data-background-color="rose">
                                    <i className="material-icons">library_books</i>
                                </div>
                                <div className="card-content">
                                    <h4 className="card-title">Datetime Picker</h4>
                                    <div className="form-group">
                                        <label className="label-control">Date Picker</label>
                                        <input type="text" className="form-control datepicker" defaultValue="10/10/2016"/>
                                    <span className="material-input"></span></div>
                                </div>
                            </div>
                        </div> */}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup for="userAddress" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="userAddress" className="control-label">Address</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="userAddress"
                                                name="userAddress"
                                                value={!!user.userAddress ? user.userAddress : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="userAddress">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="userEmail" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="userEmail" className="control-label">Email</FormControlLabel>
                                            <FormControlInput
                                                type="userEmail"
                                                id="userEmail"
                                                name="userEmail"
                                                value={!!user.userEmail ? user.userEmail : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="userEmail">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup for="userGender" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="userGender" className="control-label">Gender</FormControlLabel>
                                            <Select
                                                id="userGender"
                                                name="userGender"
                                                onChange={this.props.handleSelectChange}
                                                options={[{ "value": "Female", "label": "Female", name: 'userGender' }, { "value": "Male", "label": "Male", name: 'userGender' }]}
                                                clearable={false}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                value={!!user.userGender ? user.userGender : ''}
                                            />
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="status" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="status" className="control-label">Status</FormControlLabel>
                                            <Select
                                                id="status"
                                                name="status"
                                                onChange={this.props.handleSelectChange}
                                                options={[{ "value": "ACTIVE", "label": "Active", name: 'status' }, { "value": "INACTIVE", "label": "Inactive", name: 'status' }]}
                                                clearable={false}
                                                required
                                                disabled={this.props.title == "User information" ? true : false}
                                                value={!!user.status ? user.status : ''}
                                            />
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                {
                                    this.props.title != "New teacher" ?
                                        <Col md="6">
                                            <FormGroup for="permission" className="label-floating">
                                                <div>
                                                    <FormControlLabel htmlFor="permission" className="control-label">Permission</FormControlLabel>
                                                    <Select
                                                            id="permissions"
                                                            name="permissions"
                                                            onChange={(e) => this.handleMultiSelectChange(e)}
                                                            options={permissions}
                                                            value={!!store.newAccount.permissions ? store.newAccount.permissions : ''}
                                                            clearable={false}
                                                            required
                                                            multi
                                                            simpleValue
                                                            
                                                        />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        :
                                        ""
                                }
                            </Row>
                        </ModalBody>
                        <ModalFooter className='modal-footer'>
                            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                            {this.props.title == "User information" ? "" : <Button color="primary" key="success" disabled={this.props.submitButtonDisabled}>Save</Button>}
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal >

            </div>
        )
    }
}

export default AccountModalForm;