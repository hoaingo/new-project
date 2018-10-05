import React from 'react';
import Select from 'react-select';

export default class Paging extends React.Component {
    constructor(props) {
        super(props);
    }

    changePageSize = (e) => {
        if ((this.props.data.limit / e.value == 2)) {
            this.props.data.limit = e.value;
            this.props.fetchData((this.props.data.page * 2) - 1)
        }
        else if ((this.props.data.limit / e.value == 1 / 2)) {
            this.props.data.limit = e.value;
            this.props.fetchData(Math.ceil(this.props.data.page / 2))
        }
        else if (this.props.data.limit == 5 && e.value == 20) {
            this.props.data.limit = e.value;
            this.props.fetchData(Math.ceil(this.props.data.page / 4))
        }
        else if (this.props.data.limit == 20 && e.value == 5) {
            this.props.data.limit = e.value;
            this.props.fetchData((this.props.data.page * 4) - 3)
        }
    }

    render() {
        var currentPage = currentPage || this.props.data.page;
        var lastPage = this.props.data.totalPage+1
        var startPage, endPage;

        if (lastPage <= 10) {
            startPage = 1;
            endPage = lastPage;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= lastPage) {
                startPage = lastPage - 9;
                endPage = lastPage;
            } else {
                startPage = currentPage - 5;
                endPage = parseInt(currentPage) + 4;
            }
        }
        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        if (pages.length < 1) {
            return null
        }
        else {
            return (
                <div className="row" style={{ margin: '20px 0' }}>
                    <div className="col-md-2">
                        <Select
                            clearable={false}
                            value={this.props.data.limit}
                            onChange={this.changePageSize}
                            // className="selectpicker btn btn-primary btn-round"
                            // className="ripple-container"
                            options={[{ "value": 5, "label": "5 records" }, { "value": 10, "label": "10 records" }, { "value": 20, "label": "20 records" }]}
                        />
                    </div>
                    <div className="col-md-10" >
                        <ul className="pagination d-flex flex-wrap" style={{ float: 'right' }}>
                            <li style={currentPage === 1 ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}} className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                                <a className="page-link " aria-label="First" onClick={(e) => this.props.fetchData(1)} >
                                    <span aria-hidden="true"   >First</span>
                                </a>
                            </li>
                            <li style={currentPage === 1 ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}} className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                                <a className="page-link" aria-label="Previous" onClick={(e) => this.props.fetchData(currentPage - 1)}>
                                    <span aria-hidden="true">Previous</span>
                                </a>
                            </li>
                            {pages.map((page, index) =>
                                <li key={index}  className={currentPage === page ? "page-item active" : "page-item"}>
                                    <a className="page-link" onClick={(e) => this.props.fetchData(page)}>{page}</a>
                                </li>
                            )}
                            <li style={currentPage === lastPage ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}} className={currentPage === lastPage ? "page-item disabled" : "page-item"}>
                                <a className="page-link" aria-label="Next" onClick={(e) => this.props.fetchData(currentPage + 1)}>
                                    <span aria-hidden="true">Next</span>
                                </a>
                            </li>
                            <li style={currentPage === lastPage ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}} className={currentPage === lastPage ? "page-item disabled" : "page-item"}>
                                <a className="page-link" aria-label="Last" onClick={(e) => this.props.fetchData(lastPage)}  >
                                    <span aria-hidden="true">Last</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}