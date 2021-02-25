import React, { useState, useEffect } from 'react';
import './App.css';
import { Row, Card, Img } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client'




function ProductDetail({ match }) {

  const { loading, error, data } = useQuery(gql`
  query {
      phone(id:"${match.params.id}") {     
        name
        price
        system
        camera
        cpu
        ram
        sim
        pin
        img
      }
  }
`)

  const [phone, setPhone] = useState([]);

  useEffect(() => {
    if (data) {
      setPhone(data.phone);
    }
  }, [data]);

  return <Row sx="4">
    <img src={phone.img} alt="nothing" width="400" className="mt-5 ml-5" />
    <Card className="mt-5 ml-5" style={{ width: '22rem', height: '25rem' }}>
      <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Card.Text>Giá: {phone.price}</Card.Text>
        <Card.Text>Hệ điều hành: {phone.system}</Card.Text>
        <Card.Text>Camera: {phone.camera}</Card.Text>
        <Card.Text>Cpu: {phone.cpu}</Card.Text>
        <Card.Text>Ram: {phone.ram}</Card.Text>
        <Card.Text>Pin: {phone.pin}</Card.Text>

      </Card.Body>
    </Card>
  </Row>
}

export default ProductDetail;
