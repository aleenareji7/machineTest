import React, { Component } from 'react';
import {  HorizontalBar, Pie } from 'react-chartjs-2';


class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.data) {
            this.getChartData(newProps.data)
        }
    }

    getChartData(data) {
        let formattedStatus = Object.keys(data).map((value) => data[value]);
        this.setState({
            chartData: {
                labels: ['Total Cases', 'Active Cases', 'Recovered', 'Death Cases'],
                datasets: [
                    {
                        label: 'Status',
                        data: formattedStatus,
                        backgroundColor: [
                            "#FF6384",
                            "#63FF84",
                            "#6384FF",
                            "#8463FF",
                        ]
                    }
                ]
            }
        });

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Pie Chart</h1>
                    <Pie

                        data={this.state.chartData}
                        options={{
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: 'Covid status ',
                            },
                            legend: {
                                position: "bottom"
                            },
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItem, data) {
                                        var dataset = data.datasets[tooltipItem.datasetIndex];
                                        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                        var total = meta.total;
                                        var currentValue = dataset.data[tooltipItem.index];
                                        var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                                        return currentValue + ' (' + percentage + '%)';
                                    },
                                    title: function (tooltipItem, data) {
                                        return data.labels[tooltipItem[0].index];
                                    }
                                }
                            },
                            maintainAspectRatio: false,
                        }}

                    />
                </div>
                <div>
                    <h1>Horizontal Chart</h1>
                    <HorizontalBar
                        data={this.state.chartData}
                        options={{
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: 'Covid status ',
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            },
                            tooltips: {
                                enabled: true
                            },
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Charts;