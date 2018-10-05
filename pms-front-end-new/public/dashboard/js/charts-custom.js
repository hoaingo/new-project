    import React, { Component } from 'react';
    import path from '../../../src/components/path_variable';
    export default class ChartView extends Component{ 
    
    constructor(props) {
            super(props);
            this.state = {
                items: [],
            };  
    }


    fetchData() {
 
        Chart.defaults.global.defaultFontColor = '#75787c';
        var lineChart    = document.getElementById('lineChart')
        fetch(path.dashboard.GET_LIST_PR_LAST_MONTH + 7, {
            credentials: 'include'
        })
            .then((result) => result.json())
            .then((data) => {
                console.log("------===========" ,data)
                this.setState({ items: data })

            }).catch((e) => {
                console.log(e);

            })

    }
    
    componentDidMount(){
        // this.fetchData();
        
      
   
      
    // ------------------------------------------------------- //
    // Line Chart Custom 1
    // ------------------------------------------------------ //
    // var LINECHARTEXMPLE   = document.getElementById('lineChartCustom1');
    // ChartManagement.chartLine(LINECHARTEXMPLE,{
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     lines:[
    //             [0, 20, 17, 40, 30, 22, 30],
    //             [0, 30, 22, 20, 35, 25, 50]
    //           ]
    // });
    // var month = new Date().getMonth();
    // var lineChart    = document.getElementById('lineChart');
    // var dataTest = [];
    // var item = [];
    // var total = [];
    // total.push(this.state.items.total_price)
    // item.push(this.state.items.month)
    // if(month>3)
    // {dataTest.push(month-3);dataTest.push(month-2);dataTest.push(month-1)}
    // else
    // {dataTest.push((month+12-3)>12?3-month:month+12-3);dataTest.push((month+12-2)>12?3-month:month+12-2);dataTest.push((month+12-1)>12?3-month:month+12-1)}
    // ChartManagement.lineChart(lineChart,{
    //     labels:dataTest,
    //     lines:[500000,100000,300000,200000,600000],
              
    // });
    // }
    // getList = () => {
    //     const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    //     let listData = [];
    //     Chart.defaults.global.defaultFontColor = '#75787c';
    //     var lineChart    = document.getElementById('lineChart')
    //     listData.push(  
    //         this.state.items && this.state.items.map(data => {
    //                         return(

    //                             ChartManagement.lineChart(lineChart,{
    //                                 labels:data.month,
    //                                 lines:data.total_price
                                          
    //                             })     
                               
    //         )
    //     }))
      
    //     return listData;
    

    
    // // ------------------------------------------------------- //
    // // Line Chart Ver 2
    // // ------------------------------------------------------ //
    // var LINECHART2 = document.getElementById('lineChartCustom2');
    // ChartManagement.chartLineVer2(LINECHART2,{
    //   labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    //   lines:[
    //             [20, 21, 25, 22, 24, 18, 20, 23, 19, 22, 25, 19, 24, 27, 22, 17, 20, 17, 20, 26, 22],
    //             [24, 20, 23, 19, 22, 20, 25, 21, 23, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20]               
    //         ]
    // });

    // // ------------------------------------------------------- //
    // // Line Chart Ver 3
    // // ------------------------------------------------------ //
    // var LINECHART3 = document.getElementById('lineChartCustom3');
    // ChartManagement.chartLineVer3(LINECHART3,{
    //   labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    //   lines:[
    //             [24, 20, 23, 19, 22, 20, 25, 21, 23, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20],
    //             [20, 21, 25, 22, 24, 18, 20, 23, 19, 22, 25, 19, 24, 27, 22, 17, 20, 17, 20, 26, 22]               
    //         ]
    // });

    // // ------------------------------------------------------- //
    // // Bar Chart Ver 1
    // // ------------------------------------------------------ //
    // var BARCHART1 = document.getElementById('barChartCustom1');
    // ChartManagement.chartBar(BARCHART1,{
    //     labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    //     lines:  [35, 55, 65, 85, 40, 30, 50, 35, 50, 70, 60, 50]               
              
    // });

    // // ------------------------------------------------------- //
    // // Bar Chart Ver 2
    // // ------------------------------------------------------ //
    // var BARCHART2 = document.getElementById('barChartCustom2');
    // ChartManagement.chartBarVer2(BARCHART2,{
    //     labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    //     lines:  [30, 40, 45, 55, 70, 45, 60, 35, 50, 63, 40, 70]               
              
    // });
    // // ------------------------------------------------------- //
    // // Bar Chart Ver 3
    // // ------------------------------------------------------ //
    // var BARCHART3    = document.getElementById('barChartCustom3');
    // ChartManagement.chartBarVer3(BARCHART3,{
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     lines:[
    //             [65, 59, 80, 81, 56, 55, 40],
    //             [35, 40, 60, 47, 88, 27, 30]              
    //           ]
    // });
    // // ------------------------------------------------------- //
    // // Pie Chart Custom 1
    // // ------------------------------------------------------ //
    // var PIECHARTEXMPLE    = document.getElementById('pieChartCustom1');
    // ChartManagement.chartPie(PIECHARTEXMPLE,{
    //     labels: ["A","B","C","D"],
    //     lines:  [300, 50, 100, 80]             
              
    // });


    }

    render() {
        const {items} = this.state;
      
        return(
<div>
                
            </div>
        );
    }


}
// });
