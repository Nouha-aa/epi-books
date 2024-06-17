import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, ListGroup, Row, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';
import fantasy from '../books/fantasy.json';
import history from '../books/history.json';
import horror from '../books/horror.json';
import romance from '../books/romance.json';
import scifi from '../books/scifi.json';

export default function BookDetail() {
  const { asin } = useParams();

  // Combina all books in a un singlo array
  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
  const book = allBooks.find(b => b.asin === asin);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Row>
      <Col md={8}>
        <Row>
          <Col md={5}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={book.img} />
            </Card>
          </Col>
          <Col md={7}>
            <h1>Book Details</h1>
            <ListGroup>
              <ListGroup.Item>Title: {book.title}</ListGroup.Item>
              <ListGroup.Item>Category: {book.category}</ListGroup.Item>
              <ListGroup.Item>Price: €{book.price}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <CommentArea asin={asin} />
        <Button variant="dark" className="mt-3" onClick={() => window.history.back()}>
          Back to Books
        </Button>
      </Col>
    </Row>
  );
}
