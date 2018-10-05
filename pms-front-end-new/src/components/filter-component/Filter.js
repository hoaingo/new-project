import React from 'react';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch = () => {
        if(this.props.columns.length === 1)
        {
            this.props.store.valueFieldName1 = this.refs.field0.value
        }
        else if(this.props.columns.length === 2)
        {
            this.props.store.valueFieldName1 = this.refs.field0.value
            this.props.store.valueFieldName2 = this.refs.field1.value
        }
        else if(this.props.columns.length === 3)
        {
            this.props.store.valueFieldName1 = this.refs.field0.value
            this.props.store.valueFieldName2 = this.refs.field1.value
            this.props.store.valueFieldName3 = this.refs.field2.value
            
        }
        this.props.fetchData()
    }

    render(){
        return(
            <div>
                {
                    this.props.columns.map((column, index) => {
                    const ref_name = `field${index}`;
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="input-group">
                                <div key={index} className="form-group label-floating">
                                    <label htmlFor="inlineFormInput" className="control-label">{column.Title}</label>
                                    <input id="inlineFormInput" type={column.Type} className="form-control" ref={ref_name} onKeyPress={event => {if (event.key === 'Enter') {this.handleSearch()  }}}/>
                                </div>
                            </div>
                        </div>
                    )})
                }          
                <div className="col-md-4">
                    <button  value="Submit" className="btn btn-primary" style={{margin : 'auto'}} onClick={this.handleSearch}>Search</button>                            
                </div>
            </div>  
        )
    }
}