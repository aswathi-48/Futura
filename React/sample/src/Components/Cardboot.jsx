import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cardboot = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.HX9OpIKb8a5a2A7mbdowcAHaE8&pid=Api&P=0&h=180" />
          <Card.Body>
            <Card.Title>Developer</Card.Title>
            <Card.Text>
            “We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.” 
            </Card.Text>
            <Button variant="primary">Click</Button>
          </Card.Body>
        </Card>
      );}

export default Cardboot