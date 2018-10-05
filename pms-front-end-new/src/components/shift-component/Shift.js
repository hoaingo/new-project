import React from 'react';
import { Col, Form, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput, select } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import Select from 'react-select';
import MyNotification from '../MyNotification';
import store from './ShiftStore';
import { PageHeader } from 'react-bootstrap';
import './../../style/account/account.scss';
import CalendarComponent from '../../../public/dashboard/js/calendar-component';

@observer
export default class Shift extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.userId && params.userId != null) {
            const accountTest = { userId: params.userId }
            store.fetchData(accountTest);
        }
    }

    render() {
        const elementId = "fullCalendar";
        const shifts = !!store.shift ? store.shift.slice() : [];

        CalendarComponent.createCalendar(elementId, shifts, store.needRenderCalendar);
        return (
            <div className="col-md-12 ml-auto mr-auto">
                <div className="card card-calendar">
                    <div className="card-body">
                        <div id="fullCalendar"></div>
                    </div>
                </div>
            </div>
        )
    }
}
