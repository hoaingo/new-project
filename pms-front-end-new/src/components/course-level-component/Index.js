
import React from 'react';
import Breadcrum from './OptionMain'
import Table from './Table';
import Filter from '../filter-component/Filter';
import '../../../public/css/table.css'
import store from './Store';


export default class Index extends React.Component {


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="purple">
                            <i className="material-icons">assignment</i>
                        </div>
                        <div className="card-content"><h4 className="card-title">Course level list</h4>
                            <Filter
                                store={store}
                                fetchData={(e) => store.fetchData(1)}
                                columns={[
                                    {
                                        Title: 'Course name',

                                    },
                                    {
                                        Title: 'Course level name',

                                    },


                                ]}
                            />
                            <Breadcrum />
                            <div className="material-datatables">
                                <Table />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}



