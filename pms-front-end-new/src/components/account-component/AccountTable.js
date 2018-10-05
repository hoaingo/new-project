import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import NumberFormat from 'react-number-format';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import ReactTable from "react-table";
import { observer } from 'mobx-react';
import Paging from '../paging-component/Paging';
import '../../i18n'
import { Link } from 'react-router-dom';
import { urlLocation } from '../path_variable';
import AccountModalForm from './AccountModalForm';
import store from './AccountStore';
import path from '../path_variable';
import MyNotification from '../MyNotification';

@observer
export default class AccountTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsOfPage: [],
            currentPage: 1,
            pageSize: 5,
            isOpen: false,
            submitButtonDisabled: true,
            title: "",
            isOpenDelete: false,
        };
    }

    toggle = (e, data) => {
        if (e.currentTarget.name == "edit" || e.currentTarget.name == "infor") {
            store.updateAccount(data);
            if (e.currentTarget.name == "edit")
                this.setState({
                    title: "Edit user"
                })
            else if (e.currentTarget.name == "infor")
                this.setState({
                    title: "User information"
                })
        }
        this.setState({
            isOpen: !this.state.isOpen,
        }, () => {
            if (this.state.isOpen) {
                // store.getAllUsers();
                // store.resetCostCenter();
            }
        })
    }

    toggleDelete = (e, data) => {
        if (e.currentTarget.name == "delete")
            store.updateAccount(data);
        this.setState({
            title: "Delete user",
            isOpenDelete: !this.state.isOpenDelete
        })
    }

    handleChange = (e) => {
        const currentTarget = e.currentTarget;
        this.refs.formWithConstraints.form.validateFields(currentTarget);
        store.updateAccount({
            ...store.newAccount,
            [currentTarget.name]: currentTarget.value
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

    handleEdit = (e) => {
        e.preventDefault();
        const store = store;
        store.insertCostCenter(store.newAccount);
        this.toggle();
    }

    componentWillMount() {

        // console.log("=====goback======" ,  this.props.goBack())

        store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);


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
        store.fetchListAccount();
    }

    // ---------- End Paging-------
    handleUpdate = (e, row) => {
        store.updateAccount(row);
        store.newRole = row.listRolesId;
        const currentTarget = e.currentTarget;
        const name = currentTarget.name;
        if (name == "modalUpdate") {
            store.fetchData();
            this.refs.modalEdit.toggle();
        }
        else if (name == "modalDelete") {
            this.refs.modalDelete.toggle();
        }
    }

    update = (e) => {
        e.preventDefault();
        fetch(path.account.UPDATE_ACCOUNT, {
            method: 'POST',
            body: JSON.stringify(store.newAccount),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
                if(data){
                    MyNotification.alertSuccess('Update account success.', '')
                    store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                }
                else
                MyNotification.alertError('Update account fail.', '')
                this.setState({
                    isOpen: !this.state.isOpen
                })
            })
            .catch(error => {
                MyNotification.alertError('Update account fail.', '')
                store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                this.setState({
                    isOpen: !this.state.isOpen
                })
            })
    }

    delete = (e) => {
        e.preventDefault();
        fetch(path.account.DELETE_ACCOUNT, {
            method: 'POST',
            body: JSON.stringify(store.newAccount),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data => {
                MyNotification.alertSuccess('Delete account success.', '')
                store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                this.setState({
                    isOpenDelete: !this.state.isOpenDelete
                })
            })
            .catch(error => {
                MyNotification.alertError('Delete account fail.', '')
                store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                this.setState({
                    isOpenDelete: !this.state.isOpenDelete
                })
            })
    }

    render() {
        var checkPermission = true
        this.props.permission && this.props.permission.map(data => {
            if (data === "SUPER_USER" || data === "ADMIN") {
                checkPermission = false
            }
        })
        // $('#datatables_wrapper').perfectScrollbar();

        const items = !!store.account.records ? store.account.records.slice() : [];
        return (
            <div className="text-align" id="datatables_wrapper">


                <ReactTable
                    data={items}
                    id="table"
                    columns={[
                        {
                            Header: "No",
                            id: "no",
                            maxWidth: 50,
                            className: 'center',
                            Cell: ({ row }) => (store.account.page - 1) * (store.account.limit) + (row._index + 1),
                        },
                        {
                            Header: "Fullname",
                            id: "fullName",
                            className: 'center',
                            accessor: d => d.fullName,
                        },
                        {
                            Header: "Gender",
                            id: "userGender",
                            className: 'center',
                            accessor: d => d.userGender,
                        },
                        {
                            Header: "Phone",
                            id: "userPhone",
                            className: 'center',
                            accessor: d => d.userPhone,
                        },
                        {
                            Header: "Date Of Birth",
                            id: "userDateOfBirth",
                            className: 'center',
                            accessor: d => d.userDateOfBirth,
                        },
                        {
                            Header: "Email",
                            id: "userEmail",
                            className: 'center',
                            accessor: d => d.userEmail,
                        },
                        {
                            Header: "Address",
                            id: "userAddress",
                            className: 'center',
                            maxWidth: 70,
                            accessor: d => d.userAddress,
                        },
                        {
                            Header: "Department",
                            id: "deptShortCode",
                            className: 'center',
                            accessor: d => d.deptShortCode,
                        },
                        {
                            Header: "Status",
                            id: "status",
                            className: 'center',
                            accessor: d => d.status,
                        },
                        {
                            Header: "Action",
                            minWidth: 180,
                            Cell: ({ row }) => (
                                <Row>
                                    {/* <Button className="btn btn-simple btn-info btn-icon" onClick={(e) => this.openModal(e, items[row._index])} rel="tooltip" data-placement="bottom" title="" data-original-title="Shift">
                                        <i className="far fa-calendar-alt fa-lg" aria-hidden="true"></i>
                                    </Button> */}
                                    <Link to={`teacher/shift/${row._original.userId}`} className="btn btn-simple btn-info btn-icon" rel="tooltip" data-placement="bottom" title="" data-original-title="Shift">
                                        <i className="far fa-calendar-alt fa-lg" aria-hidden="true"></i>
                                    </Link>
                                    <Button className="btn btn-simple btn-info btn-icon" name="infor" onClick={(e) => this.toggle(e, items[row._index])} rel="tooltip" data-placement="bottom" title="" data-original-title="Infor">
                                        <i className="fas fa-info-circle  fa-lg" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="btn btn-simple btn-warning btn-icon" name="edit" onClick={(e) => this.toggle(e, items[row._index])} rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                        <i className="fas fa-user-edit fa-lg" aria-hidden="true"></i>
                                    </Button>
                                    <Button className="btn btn-simple btn-danger btn-icon" name="delete" onClick={(e) => this.toggleDelete(e, items[row._index])} rel="tooltip" data-placement="bottom" title="" data-original-title="Delete">
                                        <i className="far fa-trash-alt fa-lg" aria-hidden="true"></i>
                                    </Button>
                                </Row>
                            ),
                            // Cell: ({ row }) => (
                            //     <div style={{ textAlign: "center" }}>
                            //         <Button size="sm" color="link" name="edit" className="button" onClick={(e) => this.openModal(e, items[row._index])}><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</Button>
                            //         <Button size="sm" color="link" name="delete" className="button" onClick={(e) => this.openModal(e, items[row._index])}><i className="fa fa-trash" aria-hidden="true"></i>Delete</Button>
                            //     </div>
                            // )
                        }
                    ]}
                    defaultPageSize={20}
                    minRows
                    showPagination={false}
                    // striped
                    loadingText='Loading...'
                    className="-striped -highlight"
                />

                <Paging
                    data={store.account}
                    fetchData={store.fetchListAccount}
                />
                <AccountModalForm
                    ref="formWithConstraints"
                    title={this.state.title}
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    onChange={this.handleChange}
                    handleSelectChange={this.handleSelectChange}
                    onSave={this.update}
                    submitButtonDisabled={this.state.submitButtonDisabled}
                />
                <Modal isOpen={this.state.isOpenDelete} toggle={this.toggleDelete}>
                    <FormWithConstraints ref={(formWithConstraints) => (this.form = formWithConstraints)} onSubmit={this.onSave}>
                        <ModalHeader className="custom-modal-header" toggle={this.toggleDelete}>{this.state.title}</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col>
                                    <FormControlLabel>Do you want to delete teacher "{store.newAccount.fullName}"</FormControlLabel>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter className='modal-footer'>
                            <Button color="danger" onClick={this.toggleDelete}>Cancel</Button>
                            <Button color="primary" key="success" type="submit" onClick={this.delete}>Yes</Button>
                        </ModalFooter>
                    </FormWithConstraints>
                </Modal>
            </div>
        )
    }
}
