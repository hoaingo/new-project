import React from 'react';
import { observer } from 'mobx-react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import './../../style/account/account.scss';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Row, Col } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import MyNotification from '../MyNotification';
import Pagination from '../pagination-component/Pagination';
import path from '../path_variable';

@observer
export default class PermissionTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsOfPage: [],
            currentPage: 1,
            pageSize: 5

        };
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
        this.props.store.fetchData();
    }

    // ---------- End Paging-------

    handleUpdate = (permission) => {
        permission = this.props.store.allPermissions.find(item => item.permissionId === permission.permissionId);
        this.props.store.permission_obj = permission
        this.refs.modalUpdate.toggleUpdate();
    }

    handleDelete = (permission) => {
        permission = this.props.store.allPermissions.find(item => item.permissionId === permission.permissionId);
        this.props.store.permission_obj = permission
        this.refs.modalDelete.toggleDelete();
    }

    render() {
        // const permissions = !!this.props.store.allPermissions ? this.props.store.allPermissions.slice() : [];
        const permissions = !!this.state.itemsOfPage ? this.state.itemsOfPage.slice() : [];
        const columns = [
            {
                Header: "No",
                id: "no",
                headerClassName: 'header',
                className: 'center',
                maxWidth: 80,
                Cell: ({ row }) => (this.state.currentPage - 1) * (this.state.pageSize) + (row._index + 1),
                filterable: false
            },
            {
                Header: "Permission Name",
                id: "permissionName",
                maxWidth: 300,
                style: { textAlign: "left" },
                headerClassName: 'nameAlignLeft',
                accessor: d => d.permissionName,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["permissionName"] }),
                filterAll: true
            },
            {
                Header: 'Description',
                headerStyle: { textAlign: "left" },
                id: "permissionDescription",
                style: { textAlign: "left" },
                headerClassName: 'alignLeft',
                accessor: d => d.permissionDescription,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["permissionDescription"] }),
                filterAll: true
            },
            {
                Header: 'Updated Date',
                id: "updatedDate",
                maxWidth: 150,
                className: 'center',
                headerClassName: 'header',

                accessor: d => d.updatedDate
            },
            {
                Header: 'Updated By',
                id: "updatedBy",
                maxWidth: 120,
                headerClassName: 'header',

                className: 'center',
                accessor: d => d.updatedBy,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["updatedBy"] }),
                filterAll: true
            },
            // {
            //     Header: 'Action',
            //     filterable: false,
            //     headerClassName: 'header',
            //     maxWidth: 220,
            //     Cell: ({ row }) => (

            //             <Button color="link" className="buttonClass" onClick={(e) => this.handleDelete(permissions[row._index])}><i className="fa fa-trash" aria-hidden="true"></i> Delete</Button>

            //     )
            // }
        ];
        return (
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 12, offset: 0 }} md={{ size: 12, offset: 0 }} lg={{ size: 10, offset: 0 }} >
                <div id="permissionTable" style={{ textAlign: 'center' }}>
                    <ReactTable
                        data={permissions}
                        columns={columns}
                        id="table"
                        defaultPageSize={20}
                        minRows
                        showPagination={false}
                        className="-striped -highlight"
                    />
                    <Pagination items={this.props.store.allPermissions} onChangePage={this.onChangePage} pageSize={this.state.pageSize} changePageSize={this.changePageSize} />
                    {/* <ModalDelete store={this.props.store} ref="modalDelete" /> */}
                    {/* <ModalUpdate store={this.props.store} ref="modalUpdate" /> */}
                </div>
            </Col>

        )
    }
}

// class ModalDelete extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             modalDelete: false
//         }
//     }
//     handleErrors = (response) => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response;
//     }
//     toggleDelete = () => {
//         this.setState({
//             modalDelete: !this.state.modalDelete
//         },()=>{
//             if(this.state.modalDelete == false)
//             {
//                 this.props.store.permission_obj = {};
//             }
//         })
//     }
//     handleDelete = (e) => {
//         e.preventDefault();
//         fetch(path.permission.DELETE_PERMISSION, {
//             method: 'POST', 
//             body: JSON.stringify(this.props.store.permission_obj), 
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             }),
//             credentials: 'include'
//         })
//         .then(this.handleErrors)
//         .then(response => response.json())
//         .then(data => {
//             if(data)    
//             {
//                 this.props.store.fetchData();
//                 MyNotification.alertSuccess('Delete Permission successfully !','');
//             }
//             else
//             {
//                 MyNotification.alertError('Delete Permission address false !','');
//             } 
//         })
//         .catch((error) => {
//             MyNotification.alertError('Delete Permission address false !','');
//         })
//         this.toggleDelete();
//     }
//     render() {
//         return (
//             <Modal isOpen={this.state.modalDelete}  toggle={this.toggleDelete}>
//                 <ModalHeader  style={{ background: 'linear-gradient(to right, #1c3a94 , #7a99d9)', color: 'white' }} >Delete Permission</ModalHeader>
//                 <ModalBody style={{ color: 'white' }}>
//                 <p>Are you sure you want to delete "{this.props.store.permission_obj.permissionName}" permission?</p>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="danger"  onClick={this.toggleDelete}>Cancel</Button>
//                     <Button color="primary"  onClick={this.handleDelete}>Delete</Button>
//                 </ModalFooter>
//             </Modal>
//         )
//     }
// }

// @observer
// class ModalUpdate extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalUpdate: false,
//             submitButtonDisabled: false
//         };
//     }
//     handleErrors = (response) => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response;
//     }
//     toggleUpdate = () => {
//         var array = [...this.props.store.listPerName];
//         this.setState({
//             modalUpdate: !this.state.modalUpdate
//         },()=>{
//             if(this.state.modalUpdate == false)
//             {
//                 this.props.store.permission_obj = {};
//             }
//             else
//             {
//                 var index = array.indexOf(this.props.store.permission_obj.permissionName.toLowerCase())
//                 array.splice(index, 1);
//             }
//             this.props.store.listPerName = array;
//         })
//     }

//     handleChange = (e) => {
//         const target = e.currentTarget;
//         this.form.validateFields(target);
//         this.props.store.updateBodyPermission({
//             ...this.props.store.permission_obj,
//             [target.name]: target.value
//         })
//         this.setState({
//             submitButtonDisabled: !this.form.isValid(),
//         });
//     }

//     handleUpdate = (e) => {
//         e.preventDefault();
//         fetch(path.permission.UPDATE_PERMISSION, {
//             method: 'POST', 
//             body: JSON.stringify(this.props.store.permission_obj), 
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//             }),
//             credentials: 'include',
//         })
//         .then(this.handleErrors)
//         .then(response => response.json())
//         .then((data) => {
//             if(data)    
//             {
//                 this.props.store.fetchData();
//                 MyNotification.alertSuccess('Update Permission address success !','');
//             }
//             else
//             {
//                 MyNotification.alertError('Update Permission address false !','');
//             } 
//         })
//         .catch((error) => {
//             MyNotification.alertError('Update Permission address false !','');
//         })
//         this.toggleUpdate();
//     }
//      render() {
//         const { permission_obj } = this.props.store;
//         const PERMISSION_NAME = !!this.props.store.listPerName?this.props.store.listPerName.slice():[];
//         return (
//             <div>
//                 <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate}  onSubmit={this.handleUpdate}>
//                     <FormWithConstraints
//                         ref={formWithConstraints => (this.form = formWithConstraints)}>
//                         <ModalHeader style={{ background: 'linear-gradient(to right, #1c3a94 , #7a99d9)', color: 'white' }}>Edit Permission</ModalHeader>
//                         <ModalBody>
//                         <FormGroup for="permissionName">
//                                 <FormControlLabel htmlFor="permissionName">Name</FormControlLabel>
//                                 <FormControlInput
//                                     type="text"
//                                     id="permissionName"
//                                     name="permissionName"
//                                     defaultValue={permission_obj.permissionName}
//                                     onChange={this.handleChange}
//                                     required
//                                     minLength={3}
//                                 />
//                                 <FieldFeedbacks for="permissionName">
//                                     <FieldFeedback when="tooShort">Too short. Please insert more than 3 characters!</FieldFeedback>
//                                     <FieldFeedback when="*" />
//                                     <FieldFeedback when={value => value = PERMISSION_NAME.includes(value.toLowerCase())}>Permission name already exists!</FieldFeedback>
//                                 </FieldFeedbacks>
//                             </FormGroup>
//                             <FormGroup for="permissionDescription">
//                                 <FormControlLabel htmlFor="permissionDescription">Permission Description</FormControlLabel>
//                                 <FormControlInput
//                                     type="text"
//                                     id="permissionDescription"
//                                     name="permissionDescription"
//                                     defaultValue={permission_obj.permissionDescription}
//                                     onChange={this.handleChange}
//                                     required
//                                     minLength={3}
//                                 />
//                                 <FieldFeedbacks for="permissionDescription">
//                                     <FieldFeedback when="tooShort">Too short. Please insert more than 3 characters!</FieldFeedback>
//                                     <FieldFeedback when="*" />
//                                 </FieldFeedbacks>
//                             </FormGroup>
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button color="danger"  onClick={this.toggleUpdate}>Cancel</Button>
//                             <Button color="primary"  disabled={this.state.submitButtonDisabled}  >Confirm</Button>
//                         </ModalFooter>
//                     </FormWithConstraints>
//                 </Modal>
//             </div>
//         );
//     }
// }