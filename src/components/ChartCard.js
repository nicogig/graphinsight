import React from "react";
import { Col, Card } from "react-bootstrap";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
  	LinearScale,
  	PointElement,
  	LineElement,
  	Title,
  	Tooltip,
  	Legend
);

export function ChartCard({options, data}) {

    return (
        <Col>
            <Card>
                <Card.Body>
                    <Line options={options} data={data} height={250} />
                </Card.Body>
            </Card>
        </Col>
    );

}