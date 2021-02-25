import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {Card,Row,Image} from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { getPhones } from './graphql-server/queries'



function Product() {
  const { loading, error, data } = useQuery(getPhones)
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (data) {
      setItems(data.phones);
    }
  }, [data]);


  return <Row xs="3" className="mt-5" >
    {items.map((phone) => {
      return <h1 key={phone.id}><Link to={`/Product/${phone.id}`}>
                <Card className="mt-5 ml-5" style={{ width: '17rem',height: '25rem' }}>
                <img src={phone.img} className="mt-1"/>
                <Card.Body>
                <Card.Text className="name">{phone.name}</Card.Text>
                <Card.Title>{phone.price} VNĐ</Card.Title>
                </Card.Body>
              </Card></Link></h1>;
    })}
  </Row>;

}

export default Product;
