import React from 'react';
import { Col, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import Select from 'react-select';
import MyNotification from '../MyNotification';
import { PageHeader } from 'react-bootstrap';
import OptionMain from './OptionMain';
import StudentTable from './StudentTable';
import Filter from './../filter-component/Filter';
import store from './StudentStore';
import { CSVLink, CSVDownload } from 'react-csv';

@observer
export default class Student extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        store.fetchListAccount(1);
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="purple">
                            <i className="material-icons">assignment</i>
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">Student list</h4>
                            <Filter
                                store={store}
                                fetchData={(e) => store.fetchListAccount(1)}
                                columns={[
                                    {
                                        Title: 'Student name',

                                    },
                                    {
                                        Title : 'Class name',

                                    },

                                ]}
                            />
                            <OptionMain store={store} permission={this.props.permission} />
                            <CSVLink data={store.student.records.slice()} className="btn btn-primary">Export student list</CSVLink>
                            <div className="material-datatables">
                                <StudentTable store={store}  id="datatables_wrapper" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
