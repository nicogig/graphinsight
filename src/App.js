import React, { useState } from 'react';
import { Container, Row, Stack, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import './App.css';
import { AppBar } from './components/AppBar';
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { RenderSimulationInfo } from './components/RenderSimulationInfo';
import { SnackBar } from './components/SnackBar';


ChartJS.register(
	CategoryScale,
  	LinearScale,
  	PointElement,
  	LineElement,
  	Title,
  	Tooltip,
  	Legend
);

const defaultGraphData = [
	{
		labels: [0],
		datasets: [{
			label: 'Awaiting File Upload',
      		data: [0],
  		    borderColor: 'rgb(255, 99, 132)',
   	   		backgroundColor: 'rgba(255, 99, 132, 0.5)',
		}]
	},
	{
		labels: [0],
		datasets: [{
			label: 'Awaiting File Upload',
      		data: [0],
  		    borderColor: 'rgb(255, 99, 132)',
   	   		backgroundColor: 'rgba(255, 99, 132, 0.5)',
		}]
	}
]

const defaultGraphOptions = [
	{
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: false
			}
		}
	},
	{
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: false
			}
		}
	}
]


function App() {

	const [data, setData] = useState(defaultGraphData)
	const [options, setOptions] = useState(defaultGraphOptions)
	const [extractedData, setExtractedData] = useState([])

	const setDataInDiscrete = (childData, newOptions, extractedData) => {
		setData(childData);
		setOptions(newOptions);
		setExtractedData(extractedData);
	}

	return (
		<div>
			<AppBar />
			<Container fluid className='p-1'>
				<br />
				<Stack gap={3}>
					<Container className="p-4 mb-4 bg-light rounded-3">
						<SnackBar childFunc={setDataInDiscrete} oldData={extractedData} />
					</Container>
					<Container className="p-4 mb-4 bg-light rounded-3">
						<Row>
							<Col>
								<Card>
									<Card.Body>
										<Line options={options[0]} data={data[0]} />
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card>
									<Card.Body>
										<Line options={options[1]} data={data[1]} />
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
					<Container className="p-4 mb-4 bg-light rounded-3">
						<h2>About your Simulations</h2>
						<RenderSimulationInfo extractedData={extractedData} />
					</Container>
				</Stack>
			</Container>
		</div>
	);

}

export default App;
