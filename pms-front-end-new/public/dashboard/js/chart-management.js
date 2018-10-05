// import 'chart.js/dist/Chart';
export default class ChartManagement {


    static lineChart = (selector , impData , max) =>{

        // var myLineChart;
        
        if(window.bar  != undefined)
        
        window.bar .destroy();
        
       
        window.bar  = new Chart(selector, {
             
            type: 'line',
            options: {
                responsive: true,
                // tooltips: {enabled: false},
                // hover: {mode: null},
                // events: ['click'],
                // showTooltips: true,
                
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                           
                            max: Math.ceil (max / Math.pow(10,Math.round(Math.log10(max)+1) -2)) * Math.pow(10,Math.round(Math.log10(max)+1) -2),
                            min: 0,
                            // stepSize: 1000000
                        },
                        display: true,
                        gridLines: {
                            display: false
                        }
                    }]
                },
             
            },
            data: {
                labels: impData.labels,
              
                datasets: [
                
                    {
                        label: "Total Price",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "transparent",
                        borderColor: "#EF8C99",
                        pointBorderColor: '#EF8C99',
                        pointHoverBackgroundColor: "#EF8C99",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: impData.lines,
                        spanGaps: true
                    }
                ]
            }
        },
       
    );
    
      
    
   
    
    }
    static  chartLine = (selector, impData) =>{
        var lineChartExample = new Chart(selector, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: {
                            color: 'transparent'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            max: 60,
                            min: 0
                        },
                        display: true,
                        gridLines: {
                            color: 'transparent'
                        }
                    }]
                },
            },
            data: {
                labels: impData.labels,
                datasets: [
                    {
                        label: "Data Set One",
                        fill: true,
                        lineTension: 0,
                        backgroundColor: "rgba(134, 77, 217, 0.88)",
                        borderColor: "rgba(134, 77, 217, 088)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: "rgba(134, 77, 217, 0.88)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(134, 77, 217, 0.88)",
                        pointHoverBorderColor: "rgba(134, 77, 217, 0.88)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: impData.lines[0],
                        spanGaps: false
                    },
                    {
                        label: "Data Set Two",
                        fill: true,
                        lineTension: 0,
                        backgroundColor: "rgba(98, 98, 98, 0.5)",
                        borderColor: "rgba(98, 98, 98, 0.5)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: "rgba(98, 98, 98, 0.5)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(98, 98, 98, 0.5)",
                        pointHoverBorderColor: "rgba(98, 98, 98, 0.5)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: impData.lines[1],
                        spanGaps: false
                    }
                ]
            }
        });
    }
    /*======== CHARTLINE VER 2 */
    static  chartLineVer2 = (selector, impData) =>{
        var myLineChart = new Chart(selector, {
                    type: 'line',
                    options: {
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    display: false
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    max: 40,
                                    min: 10,
                                    stepSize: 0.1
                                },
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    },
                    data: {
                        labels: impData.labels,
                        datasets: [
                            {
                                label: "Team Drills",
                                fill: true,
                                lineTension: 0.3,
                                backgroundColor: "transparent",
                                borderColor: '#EF8C99',
                                pointBorderColor: '#EF8C99',
                                pointHoverBackgroundColor: '#EF8C99',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                borderWidth: 2,
                                pointBackgroundColor: "#EF8C99",
                                pointBorderWidth: 2,
                                pointHoverRadius: 4,
                                pointHoverBorderColor: "#fff",
                                pointHoverBorderWidth: 0,
                                pointRadius: 1,
                                pointHitRadius: 0,
                                data: impData.lines[0],
                                spanGaps: false
                            },
                            {
                                label: "Team Drills",
                                fill: true,
                                lineTension: 0.3,
                                backgroundColor: "transparent",
                                borderColor: 'rgba(238, 139, 152, 0.24)',
                                pointBorderColor: 'rgba(238, 139, 152, 0.24)',
                                pointHoverBackgroundColor: 'rgba(238, 139, 152, 0.24)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                borderWidth: 2,
                                pointBackgroundColor: "rgba(238, 139, 152, 0.24)",
                                pointBorderWidth: 2,
                                pointHoverRadius: 4,
                                pointHoverBorderColor: "#fff",
                                pointHoverBorderWidth: 0,
                                pointRadius: 1,
                                pointHitRadius: 0,
                                data: impData.lines[1],
                                spanGaps: false
                            }
                        ]
                    }
                });
    }
    /*======== CHARTLINE VER 3 */
    static  chartLineVer3 = (selector, impData) =>{
        var myLineChart = new Chart(selector, {
                    type: 'line',
                    options: {
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    display: false
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    max: 40,
                                    min: 10,
                                    stepSize: 0.1
                                },
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    },
                    data: {
                        labels: impData.labels,
                        datasets: [
                            {
                                label: "Team Drills",
                                fill: true,
                                lineTension: 0.3,
                                backgroundColor: "transparent",
                                borderColor: '#CF53F9',
                                pointBorderColor: '#CF53F9',
                                pointHoverBackgroundColor: '#CF53F9',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                borderWidth: 2,
                                pointBackgroundColor: "#CF53F9",
                                pointBorderWidth: 2,
                                pointHoverRadius: 4,
                                pointHoverBorderColor: "#fff",
                                pointHoverBorderWidth: 0,
                                pointRadius: 1,
                                pointHitRadius: 0,
                                data: impData.lines[0],
                                spanGaps: false
                            },
                            {
                                label: "Team Drills",
                                fill: true,
                                lineTension: 0.3,
                                backgroundColor: "transparent",
                                borderColor: 'rgba(207, 83, 249, 0.24)',
                                pointBorderColor: 'rgba(207, 83, 249, 0.24)',
                                pointHoverBackgroundColor: 'rgba(207, 83, 249, 0.24)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                borderWidth: 2,
                                pointBackgroundColor: "rgba(207, 83, 249, 0.24)",
                                pointBorderWidth: 2,
                                pointHoverRadius: 4,
                                pointHoverBorderColor: "#fff",
                                pointHoverBorderWidth: 0,
                                pointRadius: 1,
                                pointHitRadius: 0,
                                data: impData.lines[1],
                                spanGaps: false
                            }
                        ]
                    }
                });
    }


    /*======== BAR CHART */
 static chartBar = (selector, impData) => {
    var barChartHome = new Chart(selector, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: true,
                    barPercentage: 0.2
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 0
                    },
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: impData.labels,
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99'
                    ],
                    borderColor: [
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99',
                        '#EF8C99'
                    ],
                    borderWidth: 0.3,
                    data: impData.lines,
                }
            ]
        }
    });
    }
    /*======== BAR CHART VER 2 */
    static chartBarVer2 = (selector, impData) => {
    var barChartHome = new Chart(selector, {
                type: 'bar',
                options:
                {
                    scales:
                    {
                        xAxes: [{
                            display: true,
                            barPercentage: 0.2
                        }],
                        yAxes: [{
                            ticks: {
                                max: 100,
                                min: 0
                            },
                            display: false
                        }],
                    },
                    legend: {
                        display: false
                    }
                },
                data: {
                    labels: impData.labels,
                    datasets: [
                        {
                            label: "Data Set 1",
                            backgroundColor: [
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9'
                            ],
                            borderColor: [
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9',
                                '#CF53F9'
                            ],
                            borderWidth: 0.2,
                            data: impData.lines
                        }
                    ]
                }
            });
    }
    /*======== BAR CHART VER 3 */
    static chartBarVer3 = (selector, impData) => {
        var barChartExample = new Chart(selector, {
                    type: 'bar',
                    options: {
                        scales: {
                            xAxes: [{
                                display: true,
                                gridLines: {
                                    color: 'transparent'
                                }
                            }],
                            yAxes: [{
                                display: true,
                                gridLines: {
                                    color: 'transparent'
                                }
                            }]
                        },
                    },
                    data: {
                        labels: impData.labels,
                        datasets: [
                            {
                                label: "Data Set 1",
                                backgroundColor: [
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9"
                                ],
                                hoverBackgroundColor: [
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9"
                                ],
                                borderColor: [
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9",
                                    "#864DD9"
                                ],
                                borderWidth: 0.5,
                                data: impData.lines[0],
                            },
                            {
                                label: "Data Set 2",
                                backgroundColor: [
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)"
                                ],
                                hoverBackgroundColor: [
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)"
                                ],
                                borderColor: [
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)",
                                    "rgba(98, 98, 98, 0.5)"
                                ],
                                borderWidth: 0.5,
                                data: impData.lines[1],
                            }
                        ]
                    }
                });
        }
        /*======== PIE CHART  */
    static chartPie = (selector, impData) => {
        var pieChartExample = new Chart(selector, {
                type: 'pie',
                options: {
                    legend: {
                        display: true,
                        position: "left"
                    }
                },
                data: {
                    labels: impData.labels,
                    datasets: [
                        {
                            data: impData.lines,
                            borderWidth: 0,
                            backgroundColor: [
                                '#723ac3',
                                "#864DD9",
                                "#9762e6",
                                "#a678eb"
                            ],
                            hoverBackgroundColor: [
                                '#723ac3',
                                "#864DD9",
                                "#9762e6",
                                "#a678eb"
                            ]
                        }]
                    }
            });

            var pieChartExample = {
                responsive: true
            };
        }
}