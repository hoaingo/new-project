import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
// import 'chart.js/dist/Chart';
import  ChartManagement from './chart-management';
import 'bootstrap/dist/js/bootstrap.min.js';
import Select from 'react-select';

import path from '../../../src/components/path_variable';


export class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            perPage : '3',
            modal : false,      
        };  
    }

    fetchData(data) {

        Chart.defaults.global.defaultFontColor = '#75787c';
        var lineChart    = document.getElementById('lineChart')
        fetch(path.dashboard.GET_LIST_PR_LAST_MONTH + data, {
            credentials: 'include'
        })
            .then((result) => result.json())
            .then((data) => {
               
                this.setState({ items: data })

            }).catch((e) => {
                console.log(e);

            })

    }
    componentDidMount(){

        this.fetchData(3)

    }

    changeData = (e) =>{
      
        this.setState({ perPage: e.value })
        this.fetchData(e.value)
    }
    render() {
        const monthNames = ["Jan", "Feb", "March", "April", "May", "Jun",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        var lineChart    = document.getElementById('lineChart');
        
        var dataTest = [];
        var total = [];
        this.state.items.map(item=>{
            dataTest.push(monthNames[item.month-1])
            total.push(item.total_price)
        })
        !!lineChart?ChartManagement.lineChart(lineChart, {
            labels:null,
            lines:null
                
        },0):null;  // clear previous chart
        !!lineChart?ChartManagement.lineChart(lineChart,{
                labels:dataTest,
                lines:total
                    
            },Math.max(...total)):null;
        
       
  
    return( 
        <div>
        <h3>PURCHASED IN THE LAST 3 MONTHS</h3><br/>
        <div className="line-chart block chart">
                        <div className="title">
                          <strong>Line Chart </strong>
                          {/* <button style={{float : 'right'}} className="btn btn-info" onClick={this.changeData}  >Change</button> */}
                          <div className="col-md-4" style={{float : 'right' }}>
                          <Select 
                                        name="month"
                                        clearable = {false}
                                        value = {this.state.perPage}
                                        onChange={this.changeData}
                                        options={[{"value":"3","label":"3 month"},{"value":"6","label":"6 month"},{"value":"12","label":"12 month"}]}
                                    />
                                    </div>
                        </div>

        <canvas id="lineChart"></canvas>
        </div>
        </div>
         
    );
  }
}

export default ChartComponent;
