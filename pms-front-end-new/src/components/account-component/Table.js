import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import ReactTable from "react-table";
import { observer } from 'mobx-react';
import Select from 'react-select';
import path from '../path_variable';
import MyNotification from '../MyNotification';
import Pagination from '../pagination-component/Pagination';
import './../i18n'
import { I18n, Trans } from 'react-i18next';

@observer
export default class AccountTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsOfPage: [],
            currentPage: 1,
            pageSize: 5

        };
    }

    componentWillMount() {
        this.props.store.fetchListAccount();
    }
    // ---------- Start Paging-------

    onChangePage = (itemsOfPage, currentPage) => {
        this.setState({
            itemsOfPage: itemsOfPage,
            currentPage: currentPage,

        });


    }
    changePageSize = (pageSize) => {
        this.setState({ pageSize: pageSize })
        this.props.store.fetchListAccount();
    }

    // ---------- End Paging-------
    handleUpdate = (e, row) => {
        this.props.store.updateAccount(row);
        this.props.store.newRole = row.listRolesId;
        const target = e.currentTarget;
        const name = target.name;
        if (name == "modalUpdate") {
            this.props.store.fetchData();
            this.refs.modalEdit.toggle();
        }
        else if (name == "modalDelete") {
            this.refs.modalDelete.toggle();
        }
    }
    render() {
        const ROLES = !!this.props.store.listRole ? this.props.store.listRole : "".map(item => {
            return ({ value: item.roleId, label: item.roleName })
        });
        const USER_NAME = !!this.props.store.account ? this.props.store.account : "".map(item => {
            return (item.userName.toLowerCase())
        });
        const listDepartment = this.props.store.department.slice();
        // const  items  = !!this.props.store.account?this.props.store.account.slice():[];
        const items = !!this.state.itemsOfPage ? this.state.itemsOfPage.slice() : [];

        var data = items && items.map((item, index) => {
            var type = listDepartment.find(type => type.departmentId.toString() === item.department);
            type = !!type ? type.departmentName : null;
            return ({
                ...item,
                type
            })
        });
        const rolesAccount = !!this.props.store.rolesAccount ? this.props.store.rolesAccount : "";
        var booleanHavePermission = false;
        rolesAccount.map((rolesAccount) => {
            rolesAccount.privileges.map((rolesAccount) => {
                if (rolesAccount === "CREATE_MODIFY_USER") {
                    booleanHavePermission = true;
                }
            })
        })
        const havePermission = booleanHavePermission;
        return (
            <div style={{ textAlign: 'center' }}>
                <ModalEdit ref="modalEdit" store={this.props.store} />
                <ModalDelete ref="modalDelete" store={this.props.store} />
                <I18n ns="translations">
                    {
                        (t, { i18n }) => (
                            <ReactTable
                                data={items}
                                id="table"
                                columns={[
                                    {
                                        Header: <p>{t('no')}</p>,
                                        id: "no",
                                        maxWidth: 50,
                                        className: 'center',
                                        ClassName: 'headerNo',
                                        Cell: ({ row }) => (this.state.currentPage - 1) * (this.state.pageSize) + (row._index + 1)
                                    },
                                    {
                                        // Header: "User Name",
                                        Header: <p>{t('account.userName')}</p>,
                                        id: "userName",
                                        className: 'center',
                                        headerClassName: 'header',
                                        accessor: d => d.userName,
                                    },
                                    {
                                        Header: <p>{t('account.fullName')}</p>,
                                        id: "fullName",
                                        className: 'center',
                                        headerClassName: 'header',
                                        accessor: d => d.fullName,
                                    },
                                    {
                                        Header: <p>{t('account.department')}</p>,
                                        id: "deptName",
                                        className: 'center',
                                        accessor: d => d.deptName,
                                        headerClassName: 'header',
                                    },
                                    {
                                        Header: <p>{t('account.roles')}</p>,
                                        id: "roles",
                                        headerClassName: 'header',
                                        accessor: d => d.listRoleName,
                                    },
                                    {
                                        Header: <p>{t('createdDate')}</p>,
                                        id: "createdDate",
                                        className: 'center',
                                        headerClassName: 'header',
                                        accessor: d => d.createdDate,
                                    },
                                    {
                                        Header: <p>{t('createdBy')}</p>,
                                        id: "createdBy",
                                        className: 'center',
                                        headerClassName: 'header',
                                        accessor: d => d.createdBy,
                                    },
                                    {
                                        Header: <p>{t('updatedDate')}</p>,
                                        id: "updateDate",
                                        className: 'center',
                                        headerClassName: 'header',
                                        accessor: d => d.updatedDate
                                    },
                                    {
                                        Header: <p>{t('updatedBy')}</p>,
                                        id: "updateBy",
                                        className: 'center',
                                        headerClassName: 'header',
                                        accessor: d => d.updatedBy,
                                    },
                                    {
                                        Header: <p>{t('action')}</p>,
                                        headerClassName: 'header',
                                        minWidth: 180,
                                        show: havePermission,
                                        Cell: ({ row }) => (
                                            <Row>
                                                <Col sm={{ size: 'auto', offset: 0 }}>
                                                    <Button color="link" name="modalUpdate" onClick={(e) => this.handleUpdate(e, items[row._index])}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> {t('btnEdit')}</Button>
                                                </Col>
                                                <Col sm={{ size: 'auto', offset: 0 }}>
                                                    <Button color="link" name="modalDelete" onClick={(e) => this.handleUpdate(e, items[row._index])}><i className="fa fa-trash" aria-hidden="true"></i> {t('btnDelete')}</Button>
                                                </Col>
                                            </Row>
                                        ),
                                    }
                                ]}
                                defaultPageSize={20}
                                minRows
                                showPagination={false}
                                // striped
                                loadingText='Loading...'
                                className="-striped -highlight"
                            />
                        )}
                </I18n>
                <Pagination items={this.props.store.account} onChangePage={this.onChangePage} pageSize={this.state.pageSize} changePageSize={this.changePageSize} />

            </div>
        )
    }
}
@observer
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
        }, () => {
            if (this.state.modal == false) {
                this.props.store.refeshData();
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.props.store.newAccount;
        fetch(path.account.DELETE_ACCOUNT, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
                MyNotification.alertSuccess('Delete account success!', '');
                this.props.store.fetchListAccount();
                this.props.store.refeshData();
            }).catch(error => {
                MyNotification.alertError('Delete account false!', '');
                this.props.store.refeshData();
            })
        this.toggle();
    }
    render() {
        return (
            <div>
                <I18n ns="translations">
                    {
                        (t, { i18n }) => (
                            <Modal isOpen={this.state.modal} toggle={this.toggle} onSubmit={this.handleSubmit}>
                                <Form>
                                    <ModalHeader style={{ background: '#337ab7', color: 'white' }}>{t('btnDelete')} {t('account.Account')}</ModalHeader>
                                    <ModalBody style={{ color: 'white' }}>
                                        <p>Are you sure you want to delete "{this.props.store.newAccount.userName}" account?</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.toggle}>{t('btnCancel')}</Button>
                                        <Button color="primary"  >{t('btnDelete')}</Button>
                                    </ModalFooter>
                                </Form>
                            </Modal>
                        )
                    }
                </I18n>
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
            submitButtonDisabled: false,
        };
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        }, () => {
            if (this.state.modal == false) {
                this.props.store.fetchData();
                this.setState({
                    submitButtonDisabled: false
                });
            }
        });
    }
    onRoleChange = (e) => {

        this.props.store.newRole = e;
    }
    onTodoChange = (e) => {
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.props.store.updateAccount({
            ...this.props.store.newAccount,
            [target.name]: target.value
        });

        this.setState({
            submitButtonDisabled: !this.form.isValid()
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const account = this.props.store.newAccount;
        account.listRolesId = this.props.store.newRole;
        if (account.currentPassword == null || account.currentPassword == "") { account.password = "" }
        fetch(path.account.UPDATE_ACCOUNT, {
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
                MyNotification.alertSuccess('Update account success!', '');
                this.props.store.fetchListAccount();
                this.props.store.refeshData();
            }).catch(error => {
                this.props.store.refeshData();
                MyNotification.alertError('Update account false!', '');
            })
        this.toggle();
    }
    render() {
        const ROLES = this.props.store.listRole.length > 0 && this.props.store.listRole.map(item => {
            return ({ value: item.roleId, label: item.roleName })
        });
        const newRole = !!this.props.store.newRole ? this.props.store.newRole.slice() : [];
        const USER_NAME = this.props.store.account.length > 0 && this.props.store.account.map(item => {
            return (item.userName.toLowerCase())
        });
        const listDepartment = this.props.store.department.slice();
        return (
            <div>
                <I18n ns="translations">
                    {
                        (t, { i18n }) => (
                            <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)} onSubmit={this.handleSubmit}>
                                    <ModalHeader toggle={this.toggle} style={{ background: '#337ab7', color: 'white' }}>{t('btnEdit')} {t('account.Account')}</ModalHeader>
                                    <ModalBody>
                                        <FormGroup for="userName">
                                            <FormControlLabel htmlFor="userName">{t('account.userName')}</FormControlLabel>
                                            <FormControlInput
                                                disabled
                                                id="userName"
                                                name="userName"
                                                defaultValue={this.props.store.newAccount.userName}
                                                onChange={this.onTodoChange}
                                                required
                                                minLength={3}
                                            />
                                        </FormGroup>
                                        <FormGroup for="fullName">
                                            <FormControlLabel htmlFor="fullName">{t('account.fullName')}</FormControlLabel>
                                            <FormControlInput
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                defaultValue={this.props.store.newAccount.fullName}
                                                onChange={this.onTodoChange}
                                                required
                                                minLength={3}
                                            />
                                            <FieldFeedbacks for="fullName">
                                                <FieldFeedback when="tooShort">Too short. Please insert more than 3 characters!</FieldFeedback>
                                                <FieldFeedback when={value => /\W /.test(value)} >Should not contain special characters</FieldFeedback>
                                                <FieldFeedback when={value => /\d/.test(value)}>Should not contain numbers</FieldFeedback>
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </FormGroup>
                                        <FormGroup for="password">
                                            <FormControlLabel htmlFor="password">{t('account.password')}</FormControlLabel>
                                            <FormControlInput type="password" id="password" name="password"
                                                innerRef={password => this.password = password}
                                                onChange={this.onTodoChange}
                                            />
                                            <FieldFeedbacks for="password" show="all">
                                                <FieldFeedback when="*" />
                                                <FieldFeedback when={value => !/\d/.test(value) && value.length != 0} >Should contain numbers</FieldFeedback>
                                                <FieldFeedback when={value => !/[A-Z]/.test(value) && value.length != 0} >Should contain capital letters</FieldFeedback>
                                                <FieldFeedback when={value => !/[a-z]/.test(value) && value.length != 0} >Should contain small letters</FieldFeedback>
                                                <FieldFeedback when={value => !/\W/.test(value) && value.length != 0} > Should contain special characters</FieldFeedback>
                                                <FieldFeedback when={value => value.length > 20}>Too long</FieldFeedback>
                                            </FieldFeedbacks>
                                        </FormGroup>

                                        <FormGroup for="passwordConfirm">
                                            <FormControlLabel htmlFor="passwordConfirm">{t('account.passwordConfirm')}</FormControlLabel>
                                            <FormControlInput type="password" id="passwordConfirm" name="passwordConfirm"
                                                onChange={this.onTodoChange} />
                                            <FieldFeedbacks for="passwordConfirm">
                                                <FieldFeedback when={value => value !== this.password.value}>Not the same password</FieldFeedback>
                                            </FieldFeedbacks>
                                        </FormGroup>
                                        <FormGroup for="department">
                                            <FormControlLabel htmlFor="department">{t('account.department')}</FormControlLabel>
                                            <Input type="select" name="department" id="department" onChange={this.onTodoChange} value={this.props.store.newAccount.department}
                                                required >
                                                {/* <option value="">Select a Department</option> */}
                                                {listDepartment && listDepartment.map(listDepartment => (<option value={listDepartment.departmentId} key={listDepartment.departmentId}>{listDepartment.departmentName}</option>))}
                                            </Input>
                                            <FieldFeedbacks for="department">
                                                <FieldFeedback when="*" />
                                            </FieldFeedbacks>
                                        </FormGroup>

                                        <FormGroup for="roles">
                                            <FormControlLabel htmlFor="roles">{t('account.roles')}</FormControlLabel>
                                            <Select

                                                closeOnSelect={false}
                                                disabled={false}
                                                multi
                                                onChange={this.onRoleChange}
                                                options={!!ROLES ? ROLES : []}
                                                placeholder="Select role(s)!"
                                                removeSelected={true}
                                                simpleValue
                                                value={!!newRole ? newRole : []}

                                            />
                                            <FieldFeedbacks for="roles">
                                                <FieldFeedback when={value => !/\d/.test(value)} warning>Should contain numbers</FieldFeedback>
                                            </FieldFeedbacks>
                                        </FormGroup>
                                        <FormGroup for="maxApprovePR">
                                            <FormControlLabel htmlFor="maxApprovePR">{t('account.maxApprovePR')}</FormControlLabel>
                                            <FormControlInput
                                                type="number"
                                                id="maxApprovePR"
                                                name="maxApprovePR"
                                                defaultValue={this.props.store.newAccount.maxApprovePR}
                                                onChange={this.onTodoChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup for="maxApprovePO">
                                            <FormControlLabel htmlFor="maxApprovePO">{t('account.maxApprovePO')}</FormControlLabel>
                                            <FormControlInput
                                                type="number"
                                                id="maxApprovePO"
                                                name="maxApprovePO"
                                                defaultValue={this.props.store.newAccount.maxApprovePO}
                                                onChange={this.onTodoChange}
                                                required
                                            />
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.toggle}>{t('btnCancel')}</Button>
                                        <Button color="primary" disabled={this.state.submitButtonDisabled} >{t('btnSave')}</Button>
                                    </ModalFooter>
                                </FormWithConstraints>
                            </Modal>
                        )
                    }
                </I18n>
            </div>
        )
    }
}
