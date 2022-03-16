import React from "react";
import { Card, Table } from "react-bootstrap";

export function OtherDataTable({otherData}) {
    if (otherData.simulation_parameters != undefined) {
        return(
            <Card>
                <Table hover>
                    <tbody>
                    <tr>
                        <td>G_on</td>
                        <td>{otherData.simulation_parameters.G_on}</td>
                    </tr>
                    <tr>
                        <td>G_off</td>
                        <td>{otherData.simulation_parameters.G_off}</td>
                    </tr>
                    <tr>
                        <td>kV</td>
                        <td>{otherData.simulation_parameters.k_V}</td>
                    </tr>
                    <tr>
                        <td>Nonidealities</td>
                        <td>{otherData.simulation_parameters.nonidealities}</td>
                    </tr>
                    <tr>
                        <td>Model Size</td>
                        <td>{otherData.simulation_parameters.model_size}</td>
                    </tr>
                    <tr>
                        <td>Optimiser</td>
                        <td>{otherData.simulation_parameters.optimiser}</td>
                    </tr>
                    {otherData.simulation_parameters.discretisation && <tr>
                            <td>Excluded Weights Proportion</td>
                            <td>{otherData.simulation_parameters.excluded_weights_proportion}</td>
                    </tr>
                    }
                    {
                        otherData.simulation_parameters.conductance_drifting &&
                        <tr>
                            <td>Conductance Drifting</td>
                            <td>Enabled</td>
                        </tr>
                    }
                    </tbody>
                </Table>
            </Card>
        );
    } else {
        return (
            <br />
        )
    }
}