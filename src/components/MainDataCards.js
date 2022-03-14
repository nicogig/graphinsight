import React from "react";
import { SmallCard } from "./SmallCard";
import { Row, Col } from "react-bootstrap";


export function MainDataCards({data}) {
    if (data.simulation_parameters != undefined) {
        return (
            <Row xs={2} md={4} className="g-4">
                <Col>
                    <SmallCard main={data.simulation_parameters.number_hidden_layers} description={'No. of Hidden Layers'}/>
                </Col>
                <Col>
                    <SmallCard main={data.simulation_parameters.number_simulations} description={'No. of Simulations'}/>
                </Col>
                <Col>
                    <SmallCard main={data.simulation_parameters.noise_variance} description={'Noise Variance'}/>
                </Col>
                {
                    data.simulation_parameters.discretisation &&
                    <Col>
                        <SmallCard main={data.simulation_parameters.number_conductance_levels} description={'No. of Conductance Levels'}/>
                    </Col>
                }
            </Row>
        );
    } else {
        return(
            <h6>Please Upload a Simulation Outcome to extract information.</h6>
        )
    }
}