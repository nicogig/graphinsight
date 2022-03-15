import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export function SnackBar({childFunc, oldData, oldGraphData, oldOptions}) {
    
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
            var newParams = JSON.parse(result);
            var scaling = 1 / (newParams.accuracies.length - 1)
            var percentages = Array.from({length: newParams.accuracies.length}, (v, k) => Math.round(k*scaling*100))

            var newData = oldData.concat(newParams)
            if (newParams.accuracies.length <= 1) {
                childFunc(null, null, newData)
                return
            }

            var newGraphData = {
                "conductance_drifting": {
                    title: "Cond. Drifting Accuracies",
                    graph: {
                        labels: percentages,
                        datasets: []
                    }},
                "discretisation_pre": {
                    title: "Pre Discretisation Accuracies",
                    graph: {
                        labels: percentages,
                        datasets: []
                    }},
                "discretisation_post": {
                    title: "Post Discretisation Accuracies",
                    graph: {
                        labels: percentages,
                        datasets: []
                    }},
                "combined": {
                        title: "Combined Graphs",
                        graph: {
                            labels: percentages,
                            datasets: []
                        }},
            }

            for (var i = 0; i < newData.length; i++) {

                switch (newData[i]["simulation_parameters"]["discretisation"]) {
                    case false:
                        newGraphData["conductance_drifting"]["graph"]["datasets"].push({
                            label: 'Simulation ' + (i+1),
                            data: newData[i].accuracies,
                            borderColor: chartBorderColor[(i+1) % chartBorderColor.length],
                            backgroundColor: chartBgColors[(i+1) % chartBgColors.length],
                        })
                        newGraphData["combined"]["graph"]["datasets"].push({
                            label: 'Simulation ' + (i+1) + ' (Cond. Drifting)',
                            data: newData[i].accuracies,
                            borderColor: chartBorderColor[(i+1) % chartBorderColor.length],
                            backgroundColor: chartBgColors[(i+1) % chartBgColors.length],
                        })
                        break;
                    case true:
                        newGraphData["discretisation_pre"]["graph"]["datasets"].push({
                            label: 'Simulation ' + (i+1),
                            data: newData[i].pre_discretisation_accuracies,
                            borderColor: chartBorderColor[(i+1) % chartBorderColor.length],
                            backgroundColor: chartBgColors[(i+1) % chartBgColors.length],
                        })
                        newGraphData["discretisation_post"]["graph"]["datasets"].push({
                            label: 'Simulation ' + (i+1),
                            data: newData[i].accuracies,
                            borderColor: chartBorderColor[(i+1) % chartBorderColor.length],
                            backgroundColor: chartBgColors[(i+1) % chartBgColors.length],
                        })
                        newGraphData["combined"]["graph"]["datasets"].push({
                            label: 'Simulation ' + (i+1) + ' (Post-Disc)',
                            data: newData[i].accuracies,
                            borderColor: chartBorderColor[(chartBorderColor.length-i) % chartBorderColor.length],
                            backgroundColor: chartBgColors[(chartBorderColor.length-i) % chartBgColors.length],
                        })
                        newGraphData["combined"]["graph"]["datasets"].push({
                            label: 'Simulation ' + (i+1) + ' (Pre-Disc)',
                            data: newData[i].pre_discretisation_accuracies,
                            borderColor: chartBorderColor[(i+1) % chartBorderColor.length],
                            backgroundColor: chartBgColors[(i+1) % chartBgColors.length],
                        })
                        break;


                }

            }
            childFunc(newGraphData, null, newData);



        })

    }

    let button;
    if (oldData.length > 0) {
        button = <Button variant="danger" onClick={() => {
            childFunc("reset");
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