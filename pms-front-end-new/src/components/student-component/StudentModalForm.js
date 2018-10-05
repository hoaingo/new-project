import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import Select from 'react-select';
import { observer } from 'mobx-react';
import store from './StudentStore';

@observer
class StudentModalForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onTodoChangeDate = (e) => {
        const data = {...store.newStudent};
        data[e.target.name] = e.target.value
        store.newStudent = data
        

    }

    render() {
        const student = !!store.newStudent ? store.newStudent : {}
        // const permissions = !!store.permissions ? store.permissions.map(permissions => {
        //     return ({
        //         value: permissions.id, label: permissions.name, name: 'permissions'
        //     })
        // }) : [];
        return (
            <div>
                < Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                    <FormWithConstraints ref={(formWithConstraints) => (this.form = formWithConstraints)} onSubmit={this.props.onSave}>
                        <ModalHeader className="custom-modal-header" toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                        <ModalBody>
                            <Row>
                                {
                                    this.props.title != "New student" ?
                                        <Col md="6">
                                            <FormGroup for="studentId" className="label-floating">
                                                <div>
                                                    <FormControlLabel htmlFor="studentId" className="control-label">ID</FormControlLabel>
                                                    <FormControlInput
                                                        type="text"
                                                        id="studentId"
                                                        name="studentId"
                                                        value={!!student.studentId ? student.studentId : ''}
                                                        onChange={this.props.onChange}
                                                        required
                                                        disabled
                                                        minLength={5}
                                                        maxLength={50}
                                                    />
                                                    <FieldFeedbacks for="studentId">
                                                        <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                        <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                        <FieldFeedback when="*" />
                                                    </FieldFeedbacks>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        : ""
                                }

                                <Col md="6">
                                    <FormGroup for="studentName" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentName" className="control-label">Full name</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="studentName"
                                                name="studentName"
                                                value={!!student.studentName ? student.studentName : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "Student information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="studentName">
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
                                    <FormGroup for="studentPhone" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentPhone" className="control-label">Phone</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="studentPhone"
                                                name="studentPhone"
                                                value={!!student.studentPhone ? student.studentPhone : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "Student information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="studentPhone">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="studentDateOfBirth" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentDateOfBirth" className="control-label">Date of birth</FormControlLabel>
                                            <FormControlInput
                                                format="yyyy-MM-dd"
                                                type="date"
                                                name="studentDateOfBirth"
                                                value={!!student.studentDateOfBirth ? student.studentDateOfBirth : ''}
                                                onChange={(e) => this.onTodoChangeDate(e)}
                                                disabled={this.props.title == "Student information" ? true : false}
                                                id="studentDateOfBirth"
                                                placeholder="date placeholder"
                                                minLength={5}
                                                maxLength={50}
                                                required
                                            />
                                            <FieldFeedbacks for="studentDateOfBirth">
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
                                    <FormGroup for="studentAddress" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentAddress" className="control-label">Address</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="studentAddress"
                                                name="studentAddress"
                                                value={!!student.studentAddress ? student.studentAddress : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "Student information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="studentAddress">
                                                <FieldFeedback when="tooShort">Should be at least 5 characters.</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 50}>Should be maximum 50 characters.</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="studentMail" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentMail" className="control-label">Email</FormControlLabel>
                                            <FormControlInput
                                                type="studentMail"
                                                id="studentMail"
                                                name="studentMail"
                                                value={!!student.studentMail ? student.studentMail : ''}
                                                onChange={this.props.onChange}
                                                required
                                                disabled={this.props.title == "Student information" ? true : false}
                                                minLength={5}
                                                maxLength={50}
                                            />
                                            <FieldFeedbacks for="studentMail">
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
                                    <FormGroup for="studentGender" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentGender" className="control-label">Gender</FormControlLabel>
                                            <Select
                                                id="studentGender"
                                                name="studentGender"
                                                onChange={this.props.handleSelectChange}
                                                options={[{ "value": "Female", "label": "Female", name: 'studentGender' }, { "value": "Male", "label": "Male", name: 'studentGender' }]}
                                                clearable={false}
                                                required
                                                disabled={this.props.title == "Student information" ? true : false}
                                                value={!!student.studentGender ? student.studentGender : 'Male'}
                                            />
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup for="studentStatus" className="label-floating">
                                        <div>
                                            <FormControlLabel htmlFor="studentStatus" className="control-label">Status</FormControlLabel>
                                            <Select
                                                id="studentStatus"
                                                name="studentStatus"
                                                onChange={this.props.handleSelectChange}
                                                options={[{ "value": "ACTIVE", "label": "Active", name: 'studentStatus' }, { "value": "INACTIVE", "label": "Inactive", name: 'studentStatus' }]}
                                                clearable={false}
                                                required
                                                disabled={this.props.title == "Student information" ? true : false}
                                                value={!!student.studentStatus ? student.studentStatus : 'ACTIVE'}
                                            />
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter className='modal-footer'>
                            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                            {this.props.title == "Student information" ? "" : <Button color="primary" key="success" type="submit" disabled={this.props.submitButtonDisabled}>Save</Button>}
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal >
            </div >
        )
    }
}

export default StudentModalForm;