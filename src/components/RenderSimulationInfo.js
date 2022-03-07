import React from "react";
import { MainDataCards } from "./MainDataCards";
import { OtherDataTable } from "./OtherDataTable";

function FullSimInfo({extractedData, index}) {
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