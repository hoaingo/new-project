import React from 'react';
import OptionMain from './OptionMain'
import Table from './AccountTable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import store from './AccountStore';
import Filter from '../filter-component/Filter'
import '../../i18n'
import { I18n, Trans } from 'react-i18next';
import '../../../public/css/table.css'
import './Account.css'
import { CSVLink, CSVDownload } from 'react-csv';

export default class Account extends React.Component {
    goBack = () => {
        this.props.history.goBack();
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
                            <h4 className="card-title">Teacher list</h4>
                            <Filter
                                store={store}
                                fetchData={(e) => store.fetchListAccount(1)}
                                columns={[
                                    {
                                        Title: 'Username',

                                    },
                                    // {
                                    //     Title : 'Role',

                                    // },

                                ]}
                            />
                            <OptionMain store={store} permission={this.props.permission} />
                            <CSVLink data={store.account.records.slice()} className="btn btn-primary">Export teacher list</CSVLink>
                            <div className="material-datatables">
                                <Table store={store} goBack={this.goBack} permission={this.props.permission} id="datatables_wrapper" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
