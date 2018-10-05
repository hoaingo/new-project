import React from 'react';
import { Col, Button, Row } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import MyNotification from '../MyNotification';
import store from './AccountStore';
import { PageHeader } from 'react-bootstrap';
import './../../style/account/account.scss';

@observer
export default class AccountProfile extends React.Component {
    componentDidMount() {
        store.fetchDetailAccount();
    }

    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <AccountProfileForm goBack={this.goBack} store={store} />
        )
    }

}
@observer
class AccountProfileForm extends React.Component {
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

    onTodoChange = (e) => {
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.props.store.updateLoginAccount({
            ...this.props.store.loginAccount,
            [target.name]: target.value
        });

        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const account = !!this.props.store.loginAccount ? this.props.store.loginAccount : "";
        fetch(path.account.UPDATE_ACCOUNT_PROFILE, {
            method: 'POST',
            body: JSON.stringify(account),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
                if (data === true) {
                    MyNotification.alertSuccess('Update account profile success!');
                    store.resfeshPassword();
                    store.fetchDetailAccount();
                }
                else {
                    MyNotification.alertError('Current password is incorrect!');
                    document.getElementById("currentPassword").focus();
                    store.resfeshPassword();
                    // store.resfeshPasswordIncorrect();
                }
            }).catch(error => {
                this.props.store.refeshData();
                MyNotification.alertError('Update account profile fail!');
            })
    }

    render() {
        const { store } = this.props;
        const newAccount = store.newAccount;
        const loginAccount = store.loginAccount;
        return (
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 12, offset: 0 }} md={{ size: 10, offset: 0 }} lg={{ size: 5, offset: 0 }} >
                <div className="profile-block">
                    <PageHeader className='page-header'>Edit Profile</PageHeader>
                    <div id="account-profile">
                        <FormWithConstraints id="formWithConstraints" ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                            <FormGroup for="userName">
                                <Row>
                                    <Col xs="5">
                                        <FormControlLabel htmlFor="userName">User Name</FormControlLabel>
                                    </Col>
                                    <Col xs="7">
                                        <FormControlInput
                                            type="text"
                                            id="userName"
                                            name="userName"
                                            onChange={this.onTodoChange}
                                            value={!!loginAccount.userName ? loginAccount.userName : ""}
                                            required
                                            minLength={3}
                                            disabled
                                            autoComplete="off"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup id="fullNameLabel" for="fullName">
                                <Row>
                                    <Col xs="5">
                                        <FormControlLabel htmlFor="fullName">Full Name</FormControlLabel>
                                    </Col>
                                    <Col xs="7">
                                        <FormControlInput
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            onChange={this.onTodoChange}
                                            value={!!loginAccount.fullName ? loginAccount.fullName : ""}
                                            required
                                            minLength={3}
                                            autoComplete='name'
                                        />
                                        <FieldFeedbacks id="test" for="fullName">
                                            <FieldFeedback when="tooShort">Too short. Please insert more than 3 characters!</FieldFeedback>
                                            <FieldFeedback when={value => /\W /.test(value)} >Should not contain special characters</FieldFeedback>
                                            <FieldFeedback when={value => /\d/.test(value)}>Should not contain numbers</FieldFeedback>
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup id="currentPasswordLabel" for="currentPassword">
                                <Row>
                                    <Col xs="5">
                                        <FormControlLabel htmlFor="currentPassword">Current Password</FormControlLabel>
                                    </Col>
                                    <Col xs="7">
                                        <FormControlInput type="password" id="currentPassword" name="currentPassword"
                                            onChange={this.onTodoChange}
                                            required
                                            autoComplete="off"
                                            innerRef={currentPassword => this.currentPassword = currentPassword}
                                        />
                                        <FieldFeedbacks for="currentPassword">
                                            <FieldFeedback when="*" />
                                        </FieldFeedbacks>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup id="passwordLabel" for="password">
                                <Row>
                                    <Col xs="5">
                                        <FormControlLabel htmlFor="password">New Password</FormControlLabel>
                                    </Col>
                                    <Col xs="7">
                                        <FormControlInput type="password" id="password" name="password"
                                            innerRef={password => this.password = password}
                                            onChange={this.onTodoChange}
                                            required
                                            autoComplete="off"
                                            className="form-control"
                                        />
                                        <FieldFeedbacks id="test" for="password" show="all">
                                            <FieldFeedback when="*" />
                                            <FieldFeedback when={value => !/\d/.test(value) && value.length != 0} >Should contain numbers</FieldFeedback>
                                            <FieldFeedback when={value => !/[A-Z]/.test(value) && value.length != 0} >Should contain capital letters</FieldFeedback>
                                            <FieldFeedback when={value => !/[a-z]/.test(value) && value.length != 0} >Should contain small letters</FieldFeedback>
                                            <FieldFeedback when={value => !/\W/.test(value) && value.length != 0} >Should contain special characters</FieldFeedback>
                                            <FieldFeedback when={value => value.length > 20}>Too long</FieldFeedback>
                                            <FieldFeedback when={value => value == this.currentPassword.value}>Should not same as current password</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup id="passwordConfirmLabel" for="passwordConfirm">
                                <Row>
                                    <Col xs="5">
                                        <FormControlLabel htmlFor="passwordConfirm">Confirm Password</FormControlLabel>
                                    </Col>
                                    <Col xs="7">
                                        <FormControlInput type="password" id="passwordConfirm" name="passwordConfirm"
                                            onChange={this.onTodoChange}
                                            required
                                            autoComplete="off" />
                                        <FieldFeedbacks for="passwordConfirm">
                                            <FieldFeedback when="*" />
                                            <FieldFeedback when={value => value !== this.password.value}>Not same as password</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <div id="btn">
                                <Button color="danger" onClick={this.props.goBack}>Go Back</Button>
                                &nbsp;&nbsp;
                                <Button color="primary" disabled={this.state.submitButtonDisabled} type="submit" onClick={() => { if (!!this.form) customValidateFields(this.form) }}>Save changes</Button>
                            </div>
                        </FormWithConstraints>
                    </div>
                </div>
            </Col>
        )
    }
}