import React from 'react';
import Breadcrum from './OptionMain'
import Table from './Table';
import Filter from '../filter-component/Filter';
import '../../../public/css/table.css'
import store from './Store';
import Select from 'react-select';
import { observer } from 'mobx-react';
import { CSVLink, CSVDownload } from 'react-csv';

@observer
export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        store.fetchCourseLevelName();
        store.fetchUserName();
        store.fetchData(1);
    }
    onChange = (e) => {
        store.updateItem({
            ...store.newItems,
            [e.name]: e.value
        });

        store.classId = [{ value: 0, label: 'All', name: 'classId' }];
        store.fetchClassName(e.value);

    }

    onChangeClassName = (e) => {

        store.updateItem({
            ...store.newItems,
            [e.name]: e.value
        });

    }

    handleFilter = () => {
        var classId = !!store.newItems.classId ? store.newItems.classId : 0;
        var courseLevelName = !!store.newItems.courseLevelName ? store.newItems.courseLevelName : '';
        var userId = !!store.newItems.userId ? store.newItems.userId : 0;
        store.valueFieldName1 = courseLevelName;
        store.valueFieldName2 = classId;
        store.valueFieldName3 = userId;
        store.fetchData(1);
        store.updateItem({
            ...store.newItems,
            ["classId"]: 0
        });


    }


    render() {
        const courseLevelName = !!store.courseLevelName ? store.courseLevelName.slice() : [];
        const className = !!store.className ? store.className.slice() : [];
        const userName = !!store.userName ? store.userName.slice() : [];

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="purple">
                            <i className="material-icons">assignment</i>
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">Class list</h4>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label htmlFor="inlineFormInput" style={{ lineHeight: '3' }} >Coure level name </label>
                                                <Select
                                                    clearable={false}
                                                    required
                                                    name="courseLevelName"
                                                    ref="courseLevelName"
                                                    onChange={this.onChange}
                                                    value={!!store.newItems.courseLevelName ? store.newItems.courseLevelName : ''}
                                                    options={courseLevelName}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label htmlFor="inlineFormInput" style={{ lineHeight: '3' }} >Class name </label>
                                                <Select
                                                    clearable={false}
                                                    required
                                                    name="classId"
                                                    ref="classId"
                                                    onChange={this.onChangeClassName}
                                                    value={!!store.newItems.classId ? store.newItems.classId : 0}
                                                    options={className}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label htmlFor="inlineFormInput" style={{ lineHeight: '3' }} >Teacher </label>
                                                <Select
                                                    clearable={false}
                                                    required
                                                    name="userId"
                                                    ref="userId"
                                                    onChange={this.onChangeClassName}
                                                    value={!!store.newItems.userId ? store.newItems.userId : 0}
                                                    options={userName}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '45px' }}>
                                        <div className="col-md-12">
                                            <button value="Submit" onClick={this.handleFilter} className="btn btn-primary">Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Breadcrum store={store} />
                            <CSVLink data={store.items.records.slice()} className="btn btn-primary">Export class list</CSVLink>
                            <div className="material-datatables">
                                <Table store={store} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



