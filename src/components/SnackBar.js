import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export function SnackBar({childFunc, oldData}) {
    
    const chartBgColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ]
    
    const chartBorderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]

    const fileUpload = (e) => {
        const file = e.target.files[0];
        
        getFile(file).then(result => {
            var newParams = JSON.parse(result)
            var scaling = 1 / (newParams.accuracies.length - 1)
            var percentages = Array.from({length: newParams.accuracies.length}, (v, k) => Math.round(k*scaling*100))
            var newOptions = [{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Discretised Values',
                    },
                }
            },
            {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Pre-Discretisation Values',
                    },
                }
            }]
            var newData = oldData.concat(newParams)
            var datasetsDisc = []
            var datasetsPre = []
            for (var i = 0; i < newData.length; i++) {
                datasetsDisc.push({
                    label: 'Simulation ' + (i+1),
                    data: newData[i].accuracies,
                    borderColor: chartBorderColor[i % chartBorderColor.length],
                    backgroundColor: chartBgColors[i % chartBgColors.length],
                })
                datasetsPre.push({
                    label: 'Simulation ' + (i+1),
                    data: newData[i].pre_discretisation_accuracies,
                    borderColor: chartBorderColor[i % chartBorderColor.length],
                    backgroundColor: chartBgColors[i % chartBgColors.length],
                })
            }
            var newGraphData = [{
                labels: percentages,
                datasets: datasetsDisc
            },
            {
                labels: percentages,
                datasets: datasetsPre
            }]
            console.log(newData)
            childFunc(newGraphData, newOptions, newData);
            console.log("file", newData);
        })
    }

    let button;
    if (oldData.length > 0) {
        button = <Button variant="danger" onClick={() => {
            var stockData = [];
            var stockGraph = [{
                labels: [0],
                datasets: [{
                  label: 'Awaiting File Upload',
                  data: [0],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }]},
                {
                  labels: [0],
                  datasets: [{
                    label: 'Awaiting File Upload',
                    data: [0],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  }]
                }
              ];
            var stockOptions = [{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                    text: 'Please Upload a File to get Started',
                  },
                },},
                {
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: false,
                      text: 'Please Upload a File to get Started',
                    },
                  },
              }];
            childFunc(stockGraph, stockOptions, stockData);
            document.getElementById("fileUploadForm").reset();
        }}>Clear</Button>
    }

    return (
        <Row>
            <Col>
                <Form id="fileUploadForm">
                    <Form.Group>
                        <Form.Control type="file" onChange={fileUpload} />
                    </Form.Group>
                </Form> 
            </Col>
            <Col md="auto">
                {button}
            </Col>
        </Row>
        
    );

}


const getFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
    })
}