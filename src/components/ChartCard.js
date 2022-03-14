import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
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
            <div>
                        {
                            <Col><Line options={options} data={data} height={100} /></Col>
                        }
            </div>
    );

}