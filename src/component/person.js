import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Person() {

  const [name, setName] = useState('Amani');
  const [age, setAge] = useState('28');
  const [gender, setGender] = useState('Female');

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.nameId.value);
    setAge(e.target.ageId.value);
    setGender(e.target.genderId.value);
  }

  return (
    <>

      <Card style={{ width: '18rem', backgroundColor: "silver" }} >
        <Card.Body>
          <h3 data-testid='nameId'>Name: {name}</h3>
          <h3 data-testid='genderId'>Gender: {gender}</h3>
          <h3 data-testid='ageId'>Age: {age}</h3>
        </Card.Body>
      </Card>

      <Form onSubmit={handleChange} data-testid='submit'>
        
          <Form.Label>Name :</Form.Label>
          <Form.Control id="nameId" data-testid='nameId-input' type="text" placeholder="Enter your name" />
       
          <Form.Label>Age :</Form.Label>
          <Form.Control id="ageId" data-testid='ageId-input' type="namber" placeholder="Enter your age" />
        
          <Form.Label>Gender :</Form.Label>
          <Form.Control id="genderId" data-testid='genderId-input' type="text" placeholder="Enter your gender" />
        

        <Button type="submit" >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Person;