import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import ReactTable from "react-table";
import { observer } from 'mobx-react';
import path from '../path_variable';
import MyNotification from '../MyNotification';
import './../../i18n'
import store from './StudentStore';
import Paging from '../paging-component/Paging';
import StudentModalForm from './StudentModalForm';
import { Route, NavLink, Link } from 'react-router-dom';
@observer
export default class StudentTable extends React.Component {
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
            store.updateStudent(data);
            if (e.currentTarget.name == "edit")
                this.setState({
                    title: "Edit student"
                })
            else if (e.currentTarget.name == "infor")
                this.setState({
                    title: "Student information"
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
            store.updateStudent(data);
        this.setState({
            title: "Delete student",
            isOpenDelete: !this.state.isOpenDelete
        })
    }

    
    handleChange = (e) => {
        const currentTarget = e.currentTarget;
        this.refs.formWithConstraints.form.validateFields(currentTarget);
        store.updateStudent({
            ...store.newStudent,
            [currentTarget.name]: currentTarget.value
        });
        this.setState({
            submitButtonDisabled: !this.refs.formWithConstraints.form.isValid()
        })
    }

    
    handleSelectChange = (e) => {
        store.updateStudent({
            ...store.newStudent,
            [e.name]: e.value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = store.newStudent;
        fetch(path.student.DELETE_STUDENT, {
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
                MyNotification.alertSuccess('Delete student success!', '');
                store.fetchListAccount();
                store.refeshData();
            }).catch(error => {
                MyNotification.alertError('Delete student false!', '');
                store.refeshData();
            })
        this.toggle();
    }

    // componentWillMount() {
    //     store.fetchListAccount(1);
    // }
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
        fetch(path.student.UPDATE_STUDENT, {
            method: 'POST',
            body: JSON.stringify(store.newStudent),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(data => {
                if(data){
                    MyNotification.alertSuccess('Update student success.', '')
                    store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                }
                else
                MyNotification.alertError('Update student fail.', '')
                this.setState({
                    isOpen: !this.state.isOpen
                })
            })
            .catch(error => {
                MyNotification.alertError('Update student fail.', '')
                store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                this.setState({
                    isOpen: !this.state.isOpen
                })
            })
    }

    delete = (e) => {
        e.preventDefault();
        fetch(path.student.DELETE_STUDENT, {
            method: 'POST',
            body: JSON.stringify(store.newStudent),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data => {
                MyNotification.alertSuccess('Delete student success.', '')
                store.fetchListAccount(!!store.pageEdit ? store.pageEdit : 1);
                this.setState({
                    isOpenDelete: !this.state.isOpenDelete
                })
            })
            .catch(error => {
                MyNotification.alertError('Delete student fail.', '')
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

        const items = !!store.student.records ? store.student.records.slice() : [];
        return (
            <div style={{ textAlign: 'center' }}>
                <ReactTable
                    data={items}
                    id="table"
                    columns={[
                        {
                            Header: "No",
                            id: "no",
                            maxWidth: 50,
                            className: 'center',
                            ClassName: 'headerNo',
                            Cell: ({ row }) => (store.student.page - 1) * (store.student.limit) + (row._index + 1),
                        },
                        {
                            Header: "Class name",
                            id: "className",
                            className: 'center',
                            headerClassName: 'header',
                            accessor: d => d.className,
                        },
                        {
                            Header: "Student name",
                            id: "studentName",
                            className: 'center',
                            headerClassName: 'header',
                            accessor: d => d.studentName,
                        },
                        {
                            Header: "Date of birth",
                            id: "deptName",
                            className: 'center',
                            accessor: d => d.studentDateOfBirth,
                            headerClassName: 'header',
                        },
                        {
                            Header: "Gender",
                            id: "roles",
                            headerClassName: 'header',
                            accessor: d => d.studentGender,
                        },
                        {
                            Header: "Email",
                            id: "studentMail",
                            className: 'center',
                            headerClassName: 'header',
                            accessor: d => d.studentMail,
                        },
                        {
                            Header: "Update date",
                            id: "updateDate",
                            className: 'center',
                            headerClassName: 'header',
                            accessor: d => d.updatedDate,
                        },
                        {
                            Header: "Action",
                            minWidth: 180,
                            Cell: ({ row }) => (
                                <Row>
                                    <Link to={`student/schedule/${row._original.studentId}`} className="btn btn-simple btn-info btn-icon" rel="tooltip" data-placement="bottom" title="" data-original-title="Schedule">
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
                    data={store.student}
                    fetchData={store.fetchListAccount}
                />
                <StudentModalForm
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
                    <FormWithConstraints ref={(formWithConstraints) => (this.form = formWithConstraints)} onSubmit={this.state.onSave}>
                        <ModalHeader className="custom-modal-header" toggle={this.toggleDelete}>{this.state.title}</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col>
                                    <FormControlLabel>Do you want to delete student "{store.newStudent.studentName}"</FormControlLabel>
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