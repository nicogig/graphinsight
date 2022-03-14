import React, { useState } from 'react';
import { Card, Container, Nav, Stack } from 'react-bootstrap';

import './App.css';

import { AppBar } from './components/AppBar';
import { RenderSimulationInfo } from './components/RenderSimulationInfo';
import { SnackBar } from './components/SnackBar';
import { ChartCard } from './components/ChartCard';

import Constants from './components/Constants';


function App() {

	const [selectedTab, setSelectedTab] = useState("conductance_drifting")
	const [data, setData] = useState(Constants.defaultGraphData)
	const [options, setOptions] = useState(Constants.defaultGraphOptions)
	const [extractedData, setExtractedData] = useState([])

	const setDataInDiscrete = (childData, newOptions, extractedData) => {

		if (childData === "reset") {
			setData(Constants.defaultGraphData);
			setOptions(Constants.defaultGraphOptions);
			setExtractedData([]);
		} else {
			if (childData != null) {
				setData(childData);
			}
			if (newOptions != null) {
				setOptions(newOptions);
			}	
			
			setExtractedData(extractedData);
		}
	}

	return (
		<div>
			<AppBar />
			<Container fluid className='p-1'>
				<br />
				<Stack gap={3}>
					<Container className="p-4 mb-4 bg-light rounded-3">
						<SnackBar childFunc={setDataInDiscrete} oldData={extractedData} oldGraphData={data} oldOptions={options} />
					</Container>
					<Container className="p-4 mb-4 bg-light rounded-3">
						<Card>
							<Card.Header>
								<Nav 
									variant="tabs" 
									defaultActiveKey={"conductance_drifting"}
									onSelect={(selectedKey) => setSelectedTab(selectedKey)}>
									{Object.keys(data).map((value) => <Nav.Item><Nav.Link eventKey={value}>{data[value]["title"]}</Nav.Link></Nav.Item>)}
								</Nav>
							</Card.Header>
							<Card.Body>
								<ChartCard options={options[selectedTab]} data={data[selectedTab]["graph"]} />
							</Card.Body>
						</Card>
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
