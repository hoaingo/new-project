import React from 'react'
import './i18n'
import { I18n } from 'react-i18next';
import mainStore from './MainStore';
import chart from './../public/dashboard/js/month-revenue-component';
import { observer } from 'mobx-react';

@observer
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            percentStudent: ''
        }
    };

    componentDidMount() {
        mainStore.fetchMonthRevenue();
        mainStore.fetchReportClass();
        mainStore.fetchReportStudent();
        mainStore.fetchReportTeacher();
    }

    render() {
        const reportClass = !!mainStore.reportClass ? mainStore.reportClass.slice().map(item => {
            return (
                <tr key={item.classId}>
                    <td>{item.className}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{item.classStatus}</td>
                    <td className="text-center">{item.startDate}</td>
                    <td className="text-center">{item.endDate}</td>
                    <td className="text-center">{item.lastUpdatedBy}</td>
                    <td className="text-right">{item.lastUpdatedDate}</td>
                </tr>
            )
        }) : [];
        const reportStudent = !!mainStore.reportStudent ? mainStore.reportStudent.slice() : [];
        const reportTeacher = !!mainStore.reportTeacher ? mainStore.reportTeacher.slice() : [];
        const monthRevenue = !!mainStore.monthRevenue ? mainStore.monthRevenue.slice() : [];
        var student = {
            series:
                !!reportStudent ? reportStudent.map(item => {
                    return item.total
                }) : []

        };
        var teacher = {
            series:
                !!reportTeacher ? reportTeacher.map(item => {
                    return item.total
                }) : []

        };
        var revenue = {
            series:
                !!monthRevenue ? monthRevenue.map(item => {
                    return item.total
                }) : []

        };
        const percentStudent = student.series[student.series.length - 1] == 0 ?
            <span><span className="text-danger"><i className="fa fa-long-arrow-down"></i> 100% </span> decrease in today sales.</span> :
            student.series[student.series.length - 1] - student.series[0] > 0 ?
                <span><span className="text-success"><i className="fa fa-long-arrow-up"></i> {(student.series[student.series.length - 1] * 100) / student.series[0]}% </span> increase in today sales.</span> :
                <span><span className="text-danger"><i className="fa fa-long-arrow-down"></i> {(student.series[student.series.length - 1] * 100) / student.series[0]}% </span> decrease in today sales.</span>

        const percentTeacher = teacher.series[teacher.series.length - 1] == 0 ?
            <span><span className="text-danger"><i className="fa fa-long-arrow-down"></i> 100% </span> decrease in today sales.</span> :
            student.series[student.series.length - 1] - student.series[0] > 0 ?
                <span><span className="text-success"><i className="fa fa-long-arrow-up"></i> {(teacher.series[teacher.series.length - 1] * 100) / teacher.series[0]}% </span> increase in today sales.</span> :
                <span><span className="text-danger"><i className="fa fa-long-arrow-down"></i> {(teacher.series[teacher.series.length - 1] * 100) / teacher.series[0]}% </span> decrease in today sales.</span>

        const percentRevenue = revenue.series[revenue.series.length - 1] == 0 ?
            <span><span className="text-danger"><i className="fa fa-long-arrow-down"></i> 100% </span> decrease in today sales.</span> :
            student.series[student.series.length - 1] - student.series[0] > 0 ?
                <span><span className="text-success"><i className="fa fa-long-arrow-up"></i> {(revenue.series[revenue.series.length - 1] * 100) / revenue.series[0]}% </span> increase in today sales.</span> :
                <span><span className="text-danger"><i className="fa fa-long-arrow-down"></i> {(revenue.series[revenue.series.length - 1] * 100) / revenue.series[0]}% </span> decrease in today sales.</span>

        chart.createChart(reportStudent, reportTeacher, monthRevenue);
        var currentdate = new Date();
        var date = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " at "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-chart" data-count="4">
                            <div className="card-header" data-background-color="rose" data-header-animation="true">
                                <div className="ct-chart" id={mainStore.monthRevenueElemenetId}>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                            </button>
                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Refresh">
                                        <i className="material-icons">refresh</i>
                                    </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Change Date">
                                        <i className="material-icons">edit</i>
                                    </button>
                                </div>
                                <h4 className="card-title">Month Revenue</h4>
                                <p className="category">{percentRevenue}</p>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">access_time</i> updated on {date}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-chart" data-count="3">
                            <div className="card-header" data-background-color="green" data-header-animation="true">
                                <div className="ct-chart" id={mainStore.reportStudentElemenetId}>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                            </button>
                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Refresh">
                                        <i className="material-icons">refresh</i>
                                    </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Change Date">
                                        <i className="material-icons">edit</i>
                                    </button>
                                </div>
                                <h4 className="card-title">Top Student</h4>
                                <p className="category">
                                    {percentStudent}
                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">access_time</i> updated on {date}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-chart" data-count="1">
                            <div className="card-header" data-background-color="blue" data-header-animation="true">
                                <div className="ct-chart" id={mainStore.reportTeacherElemenetId}>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                            </button>
                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Refresh">
                                        <i className="material-icons">refresh</i>
                                    </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Change Date">
                                        <i className="material-icons">edit</i>
                                    </button>
                                </div>
                                <h4 className="card-title">Top Teacher</h4>
                                <p className="category">{percentTeacher}</p>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">access_time</i>updated on {date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-icon" data-background-color="green">
                                <i className="material-icons"></i>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">List of class open soon</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive table-sales">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Class Name</td>
                                                        <td className="text-center">Quantity</td>
                                                        <td className="text-center">Class Status</td>
                                                        <td className="text-center">Start Date</td>
                                                        <td className="text-center">End Date</td>
                                                        <td className="text-center">Last Updated By</td>
                                                        <td className="text-right">Last Updated Date</td>
                                                    </tr>
                                                    {reportClass}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6 col-md-offset-1">
                                        <div id="worldMap" className="map">

                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="orange">
                        <i className="material-icons">weekend</i>
                    </div>
                    <div className="card-content">
                        <p className="category">Bookings</p>
                        <h3 className="card-title">184</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">Get More Space...</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="rose">
                        <i className="material-icons">equalizer</i>
                    </div>
                    <div className="card-content">
                        <p className="category">Website Visits</p>
                        <h3 className="card-title">75.521</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">local_offer</i> Tracked from Google Analytics
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="green">
                        <i className="material-icons">mainStore</i>
                    </div>
                    <div className="card-content">
                        <p className="category">Revenue</p>
                        <h3 className="card-title">$34,245</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">date_range</i> Last 24 Hours
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="blue">
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="card-content">
                        <p className="category">Followers</p>
                        <h3 className="card-title">+245</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">update</i> Just Updated
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3>Manage Listings</h3>
        <br />
        <div className="row">
            <div className="col-md-4">
                <div className="card card-product">
                    <div className="card-image" data-header-animation="true">
                        <a href="#pablo">
                            <img className="img" src="#" />
                        </a>
                    </div>
                    <div className="card-content">
                        <div className="card-actions">
                            <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                <i className="material-icons">art_track</i>
                            </button>
                            <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                <i className="material-icons">edit</i>
                            </button>
                            <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                        <h4 className="card-title">
                            <a href="#pablo">Cozy 5 Stars Apartment</a>
                        </h4>
                        <div className="card-description">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="price">
                            <h4>$899/night</h4>
                        </div>
                        <div className="stats pull-right">
                            <p className="category"><i className="material-icons">place</i> Barcelona, Spain</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card card-product">
                    <div className="card-image" data-header-animation="true">
                        <a href="#pablo">
                            <img className="img" src="#" />
                        </a>
                    </div>
                    <div className="card-content">
                        <div className="card-actions">
                            <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                <i className="material-icons">art_track</i>
                            </button>
                            <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                <i className="material-icons">edit</i>
                            </button>
                            <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                        <h4 className="card-title">
                            <a href="#pablo">Office Studio</a>
                        </h4>
                        <div className="card-description">
                            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="price">
                            <h4>$1.119/night</h4>
                        </div>
                        <div className="stats pull-right">
                            <p className="category"><i className="material-icons">place</i> London, UK</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card card-product">
                    <div className="card-image" data-header-animation="true">
                        <a href="#pablo">
                            <img className="img" src="#" />
                        </a>
                    </div>
                    <div className="card-content">
                        <div className="card-actions">
                            <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                <i className="material-icons">art_track</i>
                            </button>
                            <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                <i className="material-icons">edit</i>
                            </button>
                            <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                        <h4 className="card-title">
                            <a href="#pablo">Beautiful Castle</a>
                        </h4>
                        <div className="card-description">
                            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="price">
                            <h4>$459/night</h4>
                        </div>
                        <div className="stats pull-right">
                            <p className="category"><i className="material-icons">place</i> Milan, Italy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         */}
            </div>
        )
    };
}


