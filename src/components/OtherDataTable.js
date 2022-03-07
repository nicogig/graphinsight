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
                        <td>Excluded Weights Proportion</td>
                        <td>{otherData.simulation_parameters.excluded_weights_proportion}</td>
                    </tr>
                    <tr>
                        <td>kV</td>
                        <td>{otherData.simulation_parameters.k_V}</td>
                    </tr>
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