// import React from 'react';
// import ReactTable from "react-table";
// import { Col, Form, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input } from 'reactstrap';
// import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
// import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
// import path from '../path_variable';
// import { observer } from 'mobx-react';
// import Select from 'react-select';
// import MyNotification from '../MyNotification';
// import store from './TeacherStore';
// import { PageHeader } from 'react-bootstrap';

// @observer
// export default class Teacher extends React.Component {
//     constructor(props) {
//         super(props);
//       }

//       componentWillMount() {
//         this.props.store.fetchListAccount();
//     }

//     onChangePage = (itemsOfPage, currentPage) => {
//         this.setState({
//             itemsOfPage: itemsOfPage,
//             currentPage: currentPage,

//         });


//     }

//     changePageSize = (pageSize) => {
//         this.setState({ pageSize: pageSize })
//         this.props.store.fetchListAccount();
//     }

//     handleUpdate = (e, row) => {
//         this.props.store.updateAccount(row);
//         this.props.store.newRole = row.listRolesId;
//         const target = e.currentTarget;
//         const name = target.name;
//         if (name == "modalUpdate") {
//             this.props.store.fetchData();
//             this.refs.modalEdit.toggle();
//         }
//         else if (name == "modalDelete") {
//             this.refs.modalDelete.toggle();
//         }
//     }

//     render() {
//         return (
//             <div className="col-md-12 ml-auto mr-auto">
//                 <div className="card card-calendar">
//                 <div className="card-body">
//                 <div id="fullCalendar"></div>
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }
