import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import { Link } from 'react-router-dom';
import path from '../path_variable';
import { observer } from 'mobx-react';
import Select from 'react-select';
import MyNotification from '../MyNotification';
import '../../i18n'
import { I18n } from 'react-i18next';
import { urlLocation } from '../path_variable';
import AccountModalForm from './AccountModalForm';
import store from './AccountStore';

@observer
export default class OptionMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            submitButtonDisabled: true
        }
    }

    toggle = () => {
        store.newAccount = {};
        this.setState({
            isOpen: !this.state.isOpen,
        }, () => {
            if (this.state.isOpen) {
                // store.getAllUsers();
                // store.resetCostCenter();
            }
        })
    }

    handleChange = (e) => {
        const target = e.currentTarget;
        this.refs.formWithConstraints.form.validateFields(target);
        store.updateAccount({
            ...store.newAccount,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: !this.refs.formWithConstraints.form.isValid()
        })
    }

    handleSelectChange = (e) => {
        store.updateAccount({
            ...store.newAccount,
            [e.name]: e.value
        });
    }

    handleInsert = (e) => {
        e.preventDefault();
      
        store.insertAccount(store.newAccount);
        this.toggle();
    }

    render() {
        return (
            <div className="col-md-4">
                <Button className="btn btn-primary" onClick={this.toggle} data-toggle="modal" data-target="#exampleModal">Add user</Button>
                <AccountModalForm
                    ref="formWithConstraints"
                    title="New teacher"
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    user={store.newAccount}
                    onChange={this.handleChange}
                    handleSelectChange={this.handleSelectChange}
                    onSave={this.handleInsert}
                    submitButtonDisabled={this.state.submitButtonDisabled}
                />
            </div>
        )
    }
};
