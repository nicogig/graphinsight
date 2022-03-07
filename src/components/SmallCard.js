import React from "react";
import { Card } from "react-bootstrap";

export function SmallCard({main, description}) {
    return (
        <Card>
            <Card.Body>
                <h1>{main}</h1>
                <h6>{description}</h6>
            </Card.Body>
    </Card>
    );
}