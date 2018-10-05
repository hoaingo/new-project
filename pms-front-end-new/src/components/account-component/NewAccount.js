import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlInput, FormControlLabel } from 'react-form-with-constraints-bootstrap4';
import NumberFormat from 'react-number-format';
import "react-table/react-table.css";
import Select from 'react-select';
import path from '../path_variable'
import MyNotification from '../MyNotification'
import ReactTable from "react-table";
import Pagination from '../pagination-component/Pagination';
import { observer } from 'mobx-react';
import { urlLocation } from '../path_variable'
import store from './AccountStore';

@observer
export default class NewAccount extends React.Component {

    accountDTONew = {
        userName: '',
        fullName: '',
        confirmPassword: '',
        password: '',
        status: 'INACTIVE',
        department: '',
        permissions: '',
        associatedRoles: '',
        maxApprovalAmount: '',
        lstCompanies: '',
        specificPrPo: '',
        delegatedUserId: '',
        delegateFromDate: '',
        delegateExpiredDate: '',
        isRunning: 1,
        isLdapSouring: false
    }

    componentDidMount() {
        store.fetchAllInitData();
        const { match: { params } } = this.props;
        if (params.id != undefined) {
            store.fetchDetail(params.id);
        }
        else {
            store.resetAccount();
        }

    }
    goBack = () => {
        this.props.history.goBack();
    }

    goList = () => {
        this.props.history.push(urlLocation + "/admin-settings/user-account/account")
    }

    render() {

        return (
            <div>
                <div>
                    <AccountNew store={store} params={this.props.match.params.id} permission={this.props.permission} goBack={this.goBack} goList={this.goList} />
                </div>
            </div>
        )
    }
}
@observer
class AccountNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsOfPage: [],
            isEnable: true,
            submitButtonDisabled: true,
            isChecked: false,
            isCheckPermisson: false,
            redirect: true,
            valueSearch: ''

        };
    }

    reset = () => {
        this.props.store.accountDTO = {
            userId: '',
            userName: '',
            fullName: '',
            confirmPassword: '',
            password: '',
            status: 'ACTIVE',
            department: '',
            permissions: '',
            associatedRoles: '',
            maxApprovalAmount: '',
            lstCompanies: '',
            specificPrPo: '',
            delegatedUserId: '',
            delegateFromDate: '',
            delegateExpiredDate: '',
            isRunning: 1,
            isLdapSouring: false
        }
    }



    handleSelectChangeDelegate = (e) => {

        const data = this.props.store.accountDTO;
        data[e.name] = e.value
        this.props.store.accountDTO = data

    }
    handleSelectChangeAccount = (e) => {

        const data = this.props.store.accountDTO;
        data[e.name] = e.value
        this.props.store.accountDTO = data

    }
    handleMultiSelectChange = (e, field) => {


        const data = this.props.store.accountDTO;
        data[field] = e
        this.props.store.accountDTO = data

    }


    enableTextBox = () => {
        this.setState({
            isEnable: !this.state.isEnable
        })
    }

    onTodoChange = (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        this.props.store.updateAccount({
            ...this.props.store.accountDTO,
            [target.name]: target.value
        });
        this.setState({
            submitButtonDisabled: this.form.isValid()
        });
    }
    onTodoChangeAccount = (e) => {
        const data = this.props.store.accountDTO;
        data[e.target.name] = e.target.value
        this.props.store.accountDTO = data
        this.setState({
            submitButtonDisabled: this.form.isValid()
        });
    }

    onTodoChangeAmount = (e, value) => {
        this.form.validateFields(e.target);
        const data = this.props.store.accountDTO;

        data['maxApprovalAmount'] = parseInt(value)
        this.props.store.accountDTO = data
        this.setState({
            submitButtonDisabled: this.form.isValid()
        });
    }

    onTodoChangeDelegate = (e, a) => {
        if (a.value != "") {
            this.form.validateFields(a);
            this.form.validateFields(e.target);
        }
        const data = this.props.store.accountDTO;
        data[e.target.name] = e.target.value
        this.props.store.accountDTO = data
        this.setState({
            submitButtonDisabled: this.form.isValid()
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.props.store.accountDTO

        if (this.props.params != undefined) {
            if (this.form.isValid()) {
                fetch(path.account.UPDATE_ACCOUNT, {
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
                        this.props.goBack();
                        this.props.store.pageEdit = this.props.store.account.page
                        MyNotification.alertSuccess("Update user success!", "");

                    }).catch(error => {
                        this.setState({
                            modal: false
                        });
                        MyNotification.alertError("Update user fail!", "");
                    })
            } else {
                MyNotification.alertError("Please check input value!", "");
            }

        }
        else if (this.props.params == undefined) {
            if (this.form.isValid()) {
                fetch(path.account.INSERT_ACCOUNT, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    credentials: 'include'
                }).then(this.handleErrors)
                    .then(response => response.redirected ? window.location.reload() : response.json())
                    .then(response => {

                        this.setState({
                            modal: false
                        });
                        if (response) {

                            this.props.goBack();
                            this.props.store.pageEdit = this.props.store.account.totalPage
                            
                            MyNotification.alertSuccess("Add new user success!", "");

                            // this.props.goList(); 
                            // this.props.store.resetAccount();  
                        }
                        else {
                            MyNotification.alertError("User account name must be unique, insert unaccepted!")
                        }

                    }).catch(error => {
                        this.setState({
                            modal: false
                        });
                        MyNotification.alertError("Add new user fail!", "");
                    })
            } else {
                MyNotification.alertError("Please check input value!", "");
            }
        }

    }
    onTodoChangeAccount = (e) => {
        this.form.validateFields(e.target);
        const data = this.props.store.accountDTO;
        data[e.target.name] = e.target.value
        this.props.store.accountDTO = data
        this.setState({
            submitButtonDisabled: this.form.isValid()
        });
    }
    onTodoChangeActive = (e) => {

        const data = this.props.store.accountDTO;
        if (e.target.checked == true) {
            data['status'] = 'ACTIVE'
        }
        else {
            data['status'] = 'INACTIVE'
        }
        this.props.store.accountDTO = data

    }

    addPermission = (e) => {

        if (this.props.params != undefined) {
            var aaa = [];
            var value = e.target.value;
            if (e.target.checked == true) {
                aaa = this.props.store.accountDTO.permissions.toArray();
                aaa.addItem(value);

            }
            else {
                aaa = this.props.store.accountDTO.permissions.toArray();
                aaa.removeItem(value);
            }
            this.props.store.accountDTO.permissions = aaa.toString()

        }
        else {
            var value = e.target.value;
            var arr = this.props.store.arr;
            var aaa = this.props.store.accountDTO.permissions == '' ? [] : this.props.store.accountDTO.permissions.toArray();
            if (e.target.checked == true) {
                aaa.addItem(value);
            }
            else {
                aaa.removeItem(value);
            }
            this.props.store.accountDTO.permissions = aaa.toString()

        }


    }
    handleOpenModal = e => {
        const target = e.currentTarget;
        const name = target.name;

        if (name == "modalSearch") {

            this.refs.modalSearch.toggle();
            this.props.store.valueFieldSearch = this.state.valueSearch
        }
    };

    handleChangeSearch = (e) => {
        console.log("*******value------", e.target.value)
        // this.props.store.valueFieldSearch = ""
        this.props.store.valueFieldSearch = e.target.value
        this.setState({
            valueSearch: e.target.value
        })

    }

    handleChange = (date) => {

        this.props.store.accountDTO.delegateFromDate = date
        this.props.store.accountDTO.delegateExpiredDate = date

        // this.setState({
        //   startDate: date
        // });
    }

    render() {
        var checkPermission = false
        this.props.permission && this.props.permission.map(data => {
            if (data === "BUYER" || data === "APPROVER_REVIEWER") {
                checkPermission = true
            }
        })
        const listUser = !!this.props.store.DataInitial.account ? this.props.store.DataInitial.account.map(user => {
            return ({
                value: parseInt(user.id), label: user.name, name: 'delegatedUserId'
            })
        }) : [];
        const listDepartment = !!this.props.store.DataInitial.department ? this.props.store.DataInitial.department.map(department => {
            return ({
                value: parseInt(department.id), label: department.name, name: 'department'
            })
        }) : [];
        const listCompany = !!this.props.store.DataInitial.address ? this.props.store.DataInitial.address.map(address => {
            return ({
                value: address.id, label: address.name, name: 'address'
            })
        }) : [];
        const listAssociateRoles = !!this.props.store.DataInitial.associate_role ? this.props.store.DataInitial.associate_role.map(associate_role => {
            return ({
                value: associate_role.id, label: associate_role.name, name: 'associate_role'
            })
        }) : [];

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <ModalSearch ref="modalSearch" store={this.props.store} />
                        <div className="row" style={this.props.params !== undefined ? { display: 'none' } : {}}>
                            <div className="col-md-2">
                                <button
                                    name="modalSearch"
                                    onClick={e => this.handleOpenModal(e)}
                                    style={{ margin: "0 20px 20px 0" }}
                                    className="btn btn-info"
                                >
                                    <i className="fa fa-search" aria-hidden="true"></i> Search</button>
                            </div>
                            <div className="col-md-3">
                                <input onChange={this.handleChangeSearch} placeholder="Search username in AD" id="inlineFormInput" type="text" className=" form-control" />
                            </div>
                        </div>
                        <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                            <div className="block" >
                                <div className="title"><strong className="d-block">Persional settings</strong><span className="d-block"></span></div>
                                <div className="block-body">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="delegatedUserId">Delegate to person:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Select
                                                            id="delegatedUserId"
                                                            name="delegatedUserId"
                                                            onChange={this.handleSelectChangeDelegate}
                                                            options={listUser}
                                                            value={!!this.props.store.accountDTO.delegatedUserId ? this.props.store.accountDTO.delegatedUserId : ''}
                                                            clearable={false}
                                                            required
                                                            disabled={this.state.isEnable}
                                                        />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="checkboxCustom1">Delegation status:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <div className="i-checks">
                                                            <input id="checkboxCustom1" type="checkbox" value="" className="checkbox-template" onClick={(e) => this.enableTextBox(e)} />
                                                            <label htmlFor="checkboxCustom1">Delegation Active</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel className="delegate-period">Delegation period:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Row>
                                                            <Col md="6">
                                                                <FormControlLabel htmlFor="delegateFromDate">From:</FormControlLabel >
                                                                <FormGroup for="delegateFromDate">
                                                                    <FormControlInput
                                                                        type="date"
                                                                        name="delegateFromDate"
                                                                        value={!!this.props.store.accountDTO.delegateFromDate ? this.props.store.accountDTO.delegateFromDate : ""}
                                                                        onChange={(e) => this.onTodoChangeDelegate(e, this.delegateExpiredDate)}
                                                                        disabled={this.state.isEnable}
                                                                        innerRef={delegateFromDate => this.delegateFromDate = delegateFromDate}
                                                                        id="delegateFromDate"
                                                                        style={{ fontSize: '11px' }}
                                                                        placeholder="date placeholder"
                                                                        required
                                                                    />
                                                                    <FieldFeedbacks for="delegateFromDate">
                                                                        <FieldFeedback when="*" />
                                                                        <FieldFeedback when={value => value > this.delegateExpiredDate.value}>From date do not larger than to Date</FieldFeedback>
                                                                    </FieldFeedbacks>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md="6">
                                                                <FormControlLabel htmlFor="delegateExpiredDate">To:</FormControlLabel >
                                                                <FormGroup for="delegateExpiredDate">
                                                                    <FormControlInput
                                                                        type="date"
                                                                        name="delegateExpiredDate"
                                                                        value={!!this.props.store.accountDTO.delegateExpiredDate ? this.props.store.accountDTO.delegateExpiredDate : ""}
                                                                        innerRef={delegateExpiredDate => this.delegateExpiredDate = delegateExpiredDate}
                                                                        onChange={(e) => this.onTodoChangeDelegate(e, this.delegateFromDate)}
                                                                        disabled={this.state.isEnable}
                                                                        id="delegateExpiredDate"
                                                                        style={{ fontSize: '11px' }}
                                                                        placeholder="date placeholder"
                                                                        required
                                                                    />
                                                                    <FieldFeedbacks for="delegateExpiredDate">
                                                                        <FieldFeedback when="*" />
                                                                        <FieldFeedback when={value => value < this.delegateFromDate.value}>To date do not small than from Date</FieldFeedback>
                                                                    </FieldFeedbacks>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup for="specificPrPo">
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="specificPrPo">Specific PR/PO#:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <FormControlInput
                                                            id="specificPrPo" type="text"
                                                            name="specificPrPo"
                                                            value={!!this.props.store.accountDTO.specificPrPo ? this.props.store.accountDTO.specificPrPo : ''}
                                                            onChange={this.onTodoChangeAccount}
                                                            className="form-control form-control-success"
                                                            maxLength={15}
                                                        />
                                                      
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup for="userName">
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="userName">Username:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <FormControlInput
                                                            id="userName" type="text"
                                                            name="userName"
                                                            value={!!this.props.store.accountDTO.userName ? this.props.store.accountDTO.userName : ''}
                                                            onChange={this.onTodoChangeAccount}
                                                            className="form-control form-control-success"
                                                            required
                                                            maxLength={25}
                                                            disabled={this.props.params !== undefined || this.props.store.accountDTO.isLdapSouring ? true : false}
                                                        />
                                                        <FieldFeedbacks for="userName">
                                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                                            <FieldFeedback when={value => value.length > 25}>Too long</FieldFeedback>
                                                            <FieldFeedback when="*" />
                                                        </FieldFeedbacks>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup for="fullName">
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="fullName">Fullname:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <FormControlInput
                                                            id="fullName" type="text"
                                                            name="fullName"
                                                            value={!!this.props.store.accountDTO.fullName ? this.props.store.accountDTO.fullName : ''}
                                                            onChange={this.onTodoChangeAccount}
                                                            className="form-control form-control-success"
                                                            required
                                                            maxLength={25}
                                                        />
                                                        <FieldFeedbacks for="fullName">
                                                            <FieldFeedback when={value => value.length > 25}>Too long</FieldFeedback>
                                                            <FieldFeedback when="*" />
                                                        </FieldFeedbacks>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="language">Language:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Select
                                                            id="language"
                                                            name="language"
                                                            onChange={this.props.handleSelectChange}
                                                            placeholder="Language"
                                                            options={[{ value: "English", label: "English" }]}
                                                            value={"English"}
                                                            clearable={false}
                                                            required
                                                        />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup for="password">
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="password">Password:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <FormControlInput
                                                            id="password" type="password"
                                                            name="password"
                                                            innerRef={password => this.password = password}
                                                            value={this.props.store.accountDTO.password}
                                                            onChange={this.onTodoChangeAccount}
                                                            className="form-control form-control-success"
                                                            required={this.props.params == undefined && this.password !== '' && !this.props.store.accountDTO.isLdapSouring}
                                                        />
                                                        <FieldFeedbacks for="password">
                                                            <FieldFeedback when="tooShort">Too short</FieldFeedback>
                                                            <FieldFeedback when="*" />
                                                            <FieldFeedback when={value => !/\d/.test(value)} >Should contain numbers</FieldFeedback>
                                                            <FieldFeedback when={value => !/[A-Z]/.test(value)} >Should contain capital letters</FieldFeedback>
                                                            <FieldFeedback when={value => !/[a-z]/.test(value)} >Should contain small letters</FieldFeedback>
                                                            <FieldFeedback when={value => !/\W/.test(value)} > Should contain special characters</FieldFeedback>
                                                            <FieldFeedback when={value => value.length > 100}>Too long</FieldFeedback>
                                                        </FieldFeedbacks>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup for="confirmPassword">
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="confirmPassword">Confirm Password:</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <FormControlInput
                                                            id="confirmPassword" type="password"
                                                            name="confirmPassword"
                                                            value={!!this.props.store.accountDTO.confirmPassword ? this.props.store.accountDTO.confirmPassword : ''}
                                                            onChange={this.onTodoChangeAccount}
                                                            className="form-control form-control-success"
                                                            required={this.props.params == undefined && !this.props.store.accountDTO.isLdapSouring}
                                                        />
                                                        <FieldFeedbacks for="confirmPassword">
                                                            <FieldFeedback when={value => (value !== this.password.value && value !== '')}>Not the same password</FieldFeedback>
                                                            <FieldFeedback when="*" />
                                                        </FieldFeedbacks>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel>Change password</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Button className="col-sm-12 btn btn-info"><i className="fa fa-cogs" aria-hidden="true"></i> Reset password</Button>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            {/* ------------------Account setting --------------- */}
                            <div className="block" >
                                <div className="title"><strong className="d-block">Account settings</strong><span className="d-block"></span></div>
                                <div className="block-body">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="i-checks">
                                                            <input id="isBudgetOwner" type="checkbox" value="4" disabled={checkPermission} className="checkbox-template" name="isBudgetOwner" checked={this.props.store.accountDTO.permissions.indexOf("4") >= 0 ? true : false} onChange={(e) => this.addPermission(e)} />
                                                            <label htmlFor="isBudgetOwner">Is budget owner</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="i-checks">
                                                            <input id="isBuyer" type="checkbox" value="5" disabled={checkPermission} className="checkbox-template" name="isBuyer" checked={this.props.store.accountDTO.permissions.indexOf("5") >= 0 ? true : false} onChange={(e) => this.addPermission(e)} />
                                                            <label htmlFor="isBuyer">Is buyer</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="i-checks">
                                                            <input id="isApprover" type="checkbox" value="3" disabled={checkPermission} className="checkbox-template" name="isApprover" checked={this.props.store.accountDTO.permissions.indexOf("3") >= 0 ? true : false} onChange={(e) => this.addPermission(e)} />
                                                            <label htmlFor="isApprover">Is approver/reviewer</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup for="maxApprovalAmount">
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="maxApprovalAmount">Max Approval $</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <NumberFormat
                                                            id="maxApprovalAmount"
                                                            name="maxApprovalAmount"
                                                            value={!!this.props.store.accountDTO.maxApprovalAmount ? this.props.store.accountDTO.maxApprovalAmount : ''}
                                                            customInput={FormControlInput}
                                                            thousandSeparator={true}
                                                            className="form-control form-control-success"
                                                            required
                                                            disabled={checkPermission}
                                                            maxLength={maxLengthCurrency(15)}
                                                            onValueChange={(values, e) => {
                                                                const { value } = values;
                                                                this.onTodoChangeAmount(e, value.substring(0, 15));
                                                            }}
                                                        />
                                                        <FieldFeedbacks for="maxApprovalAmount">
                                                            <FieldFeedback when="*" />
                                                        </FieldFeedbacks>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="i-checks">
                                                            <input id="status" type="checkbox" disabled={checkPermission} className="checkbox-template" name="status" checked={this.props.store.accountDTO.status == 'ACTIVE' ? true : false} onChange={(e) => this.onTodoChangeActive(e)} />
                                                            <label htmlFor="status">Is active</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="i-checks">
                                                            <input id="isSuperUser" type="checkbox" disabled={checkPermission} value="1" className="checkbox-template" checked={this.props.store.accountDTO.permissions.indexOf("1") >= 0 ? true : false} name="isSuperUser" onChange={(e) => this.addPermission(e)} />
                                                            <label htmlFor="isSuperUser">Is super user</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="i-checks">
                                                            <input id="isAdmin" type="checkbox" disabled={checkPermission} value="2" className="checkbox-template" name="isAdmin" checked={this.props.store.accountDTO.permissions.indexOf("2") >= 0 ? true : false} onChange={(e) => this.addPermission(e)} />
                                                            <label htmlFor="isAdmin">Is admin</label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="department">Department</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Select
                                                            id="department"
                                                            name="department"
                                                            onChange={this.handleSelectChangeAccount}
                                                            options={listDepartment}
                                                            value={!!this.props.store.accountDTO.department ? this.props.store.accountDTO.department : ''}
                                                            clearable={false}
                                                            required
                                                            disabled={checkPermission}
                                                        />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="lstCompanies">Associated Companies</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Select
                                                            id="lstCompanies"
                                                            name="lstCompanies"
                                                            onChange={(e) => this.handleMultiSelectChange(e, 'lstCompanies')}
                                                            options={listCompany}
                                                            value={!!this.props.store.accountDTO.lstCompanies ? this.props.store.accountDTO.lstCompanies : ''}
                                                            clearable={false}
                                                            required
                                                            multi
                                                            simpleValue
                                                            disabled={checkPermission}
                                                        />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="4">
                                                        <FormControlLabel htmlFor="associatedRoles">Associated Roles</FormControlLabel >
                                                    </Col>
                                                    <Col md="8">
                                                        <Select
                                                            id="associatedRoles"
                                                            name="associatedRoles"
                                                            onChange={(e) => this.handleMultiSelectChange(e, 'associatedRoles')}
                                                            options={listAssociateRoles}
                                                            value={!!this.props.store.accountDTO.associatedRoles ? this.props.store.accountDTO.associatedRoles : ''}
                                                            clearable={false}
                                                            required
                                                            multi
                                                            simpleValue
                                                            disabled={checkPermission}
                                                        />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            {/* ------------------End Account setting --------------- */}
                            <div style={{ margin: '30px 0' }}>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-2 margin-bottom-10">
                                        <button className="col-sm-8 btn btn-danger" onClick={this.props.goList}>Cancel</button>
                                    </div>
                                    <div className="col-sm-2 margin-bottom-10" >
                                        <button className="col-sm-8 btn btn-success" onClick={this.reset}>Reset</button>
                                    </div>
                                    <div className="col-sm-2 margin-bottom-10" >
                                        <button className="col-sm-8 btn btn-primary" disabled={!this.state.submitButtonDisabled} onClick={() => { if (!!this.form) customValidateFields(this.form) }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </FormWithConstraints>
                    </div>
                </div>
            </div >
        )
    }
}

@observer
class ModalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsOfPage: [],
            currentPage: 1,
            pageSize: 5,
            modal: false
        };
    }
    handleErrors = response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };
    toggle = () => {
        this.setState(
            {
                modal: !this.state.modal
            },
            () => {
                if (this.state.modal == true) {
                    this.props.store.fetchUserFromLDAP(this.props.store.valueFieldSearch);
                    // this.props.store.valueFieldSearch = ""
                }
                // else{

                // }
            }
        );
    };
    // ---------- Start Paging-------

    onChangePage = (itemsOfPage, currentPage) => {
        this.setState({
            itemsOfPage: itemsOfPage,
            currentPage: currentPage,

        });


    }
    changePageSize = (pageSize) => {
        this.setState({ pageSize: pageSize })
        this.props.store.fetchUserFromLDAP(this.props.store.valueFieldSearch);
    }

    handleChangeLDAP = (e, row) => {
        e.preventDefault();
        console.log("******row***", row);
        this.props.store.accountDTO.userName = row.userName;
        this.props.store.accountDTO.fullName = row.fullName;
        this.props.store.accountDTO.isLdapSouring = true;
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        const items = this.state.itemsOfPage ? this.state.itemsOfPage.slice() : [];

        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                    <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                        <ModalHeader toggle={this.toggle}>List User Active Directory</ModalHeader>
                        <ModalBody>
                            <h6>Please choose user from active directory!</h6>
                            <hr style={{ background: "white" }} />
                            <div className="text-align">
                                <ReactTable
                                    data={items}
                                    id="table"
                                    columns={[
                                        {
                                            Header: "No",
                                            id: "no",
                                            maxWidth: 50,
                                            className: "center",
                                            Cell: ({ row }) => (this.state.currentPage - 1) * (this.state.pageSize) + (row._index + 1)
                                        },
                                        {
                                            // Header: "User Name",
                                            Header: "Username",
                                            id: "userName",
                                            className: "center",
                                            accessor: d => d.userName
                                        },
                                        {
                                            Header: "FullName",
                                            id: "fullName",
                                            className: "center",
                                            accessor: d => d.fullName
                                        },

                                        {
                                            Header: "Action",
                                            minWidth: 80,

                                            Cell: ({ row }) => (
                                                <Row>
                                                    <Col sm={{ size: "auto", offset: 2 }}>
                                                        <Button
                                                            color="link"
                                                            onClick={e => this.handleChangeLDAP(e, row)}
                                                        >
                                                            <i
                                                                className="fa fa-pencil-square-o"
                                                                aria-hidden="true"
                                                            />{" "}
                                                            Choose
                            </Button>
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                    ]}
                                    defaultPageSize={20}
                                    minRows
                                    showPagination={false}
                                    // striped
                                    loadingText="Loading..."
                                    className="-striped -highlight"
                                />
                                <div style={{ color: 'rgb(138, 141, 147)' }}>
                                    <Pagination items={this.props.store.listUserLDAP} onChangePage={this.onChangePage} pageSize={this.state.pageSize} changePageSize={this.changePageSize} />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>
                                Cancel
              </Button>
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal>
            </div>
        );
    }
}