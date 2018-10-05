import React from 'react';


export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {}
        };
    }

    componentDidMount () {
       
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }
   
    componentDidUpdate = (prevProps, prevState)=> {
     
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage = (page) => {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

   
        pager = this.getPager(items.length, page, pageSize);

        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems , pager.currentPage);
    }

    getPager = (totalItems, currentPage, pageSize) => {
        
     
        currentPage = currentPage || 1 

        pageSize = Number(pageSize)

        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;

        if (totalPages <= 10) {  
            startPage = 1;
            endPage = totalPages;
       
        } else {
          
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        var startIndex = (currentPage - 1) * pageSize;
     
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
      
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    changePageSize = (e) => {
      
        this.props.changePageSize(e.target.value);
    }


    render() {
        var pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
         
            return (
            <div className="row" style={{marginTop : '20px'}}>
                <div className="col-md-2" >
        
                          <select name="account" className="form-control mb-3" style={{height : '34px' , fontSize : '13px'}}   value={this.props.pageSize}  onChange={this.changePageSize} >
                                                  <option value="5">5 record </option>
                                                  <option value="10">10 record </option>
                                                  <option value="20">20 record </option>
                                              
                          </select> 
                </div>

            </div>
            )
        }

        return (
           
          <div className="row" style={{marginTop : '20px'}}>
          <div className="col-md-2">
      
                          <select name="account" className="form-control mb-3" style={{height : '34px' , fontSize : '13px'}} value={this.props.pageSize}  onChange={this.changePageSize} >
                                                  <option value="5">5 record </option>
                                                  <option value="10">10 record </option>
                                                  <option value="20">20 record </option>
                                              
                          </select> 
          </div>                 
      
          <div className="col-md-10" >
      
              <ul className="pagination d-flex flex-wrap" style={{float : 'right'}}>
                  <li className=" page-item" style={pager.currentPage === 1 ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}} >
                      <a className="page-link "  aria-label="First" style={{ cursor: 'pointer'}} onClick={() => this.setPage(1)} >
                      <span aria-hidden="true"   >First</span>
                      </a>
                  </li>
                  <li className="page-item" style={pager.currentPage === 1 ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}}>
                      <a className="page-link"  aria-label="Previous" style={{ cursor: 'pointer'}} onClick={() => this.setPage(pager.currentPage - 1)}>
                      <span aria-hidden="true">Previous</span>
                      </a>
                  </li>
                  {pager.pages.map((page, index) =>     
                      <li key={index} className={pager.currentPage  === page ? "page-item active" : "page-item"}>
                          <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
                      </li>
                  )}
                      
                  <li className="page-item" style={pager.currentPage === pager.totalPages ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}}>
                      <a className="page-link"  aria-label="Next" style={{ cursor: 'pointer'}} onClick={() => this.setPage(pager.currentPage + 1)}>
                      <span aria-hidden="true">Next</span>                       
                      </a>
                  </li>
                  <li className="page-item" style={pager.currentPage === pager.totalPages ? {pointerEvents : 'none' , cursor : 'not-allowed'} : {}}>
                      <a className="page-link"  aria-label="Last" style={{ cursor: 'pointer'}} onClick={() => this.setPage(pager.totalPages)}  >
                      <span aria-hidden="true">Last</span>             
                      </a>
                  </li>
              </ul>
          
          </div>
      
          
      
      </div>
         
         
        );
    }
}






