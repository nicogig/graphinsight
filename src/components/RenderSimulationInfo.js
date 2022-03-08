import React from "react";
import { MainDataCards } from "./MainDataCards";
import { OtherDataTable } from "./OtherDataTable";
import { SmallCard } from "./SmallCard";
import { Row, Col } from "react-bootstrap";

function FullSimInfo({extractedData, index}) {
    if (extractedData.accuracies.length <= 1) {
        return (
            <div>
                <br />
                <h4>Simulation {index+1}</h4>
                <br />
                <Row xs={2} md={2} className="g-4">
                    <Col>
                        <SmallCard main={extractedData.pre_discretisation_accuracies[0]} description={'Pre-Discretisation Accuracy'} />
                    </Col>
                    <Col>
                        <SmallCard main={extractedData.accuracies[0]} description={'Discretised Accuracy'} />
                    </Col>
                </Row>
                <br />
                <MainDataCards data={extractedData} />
                <br />
                <OtherDataTable otherData={extractedData} />
            </div>
        )
    }
    return (
        <div>
            <br />
            <h4>Simulation {index+1}</h4>
            <br />
            <MainDataCards data={extractedData} />
            <br />
            <OtherDataTable otherData={extractedData} />
        </div>
    );
}

export function RenderSimulationInfo({extractedData}) {
    if (extractedData.length == 0) {
        return (
            <div>
                <br />
                <h6>Please Upload a Simulation Outcome to extract information.</h6>
            </div>
            
        );
    } else {
        return(
            <div>
                {extractedData.map((value, index) => <FullSimInfo extractedData={value} index={index} key={index} />)}
            </div>
        )
    }
}