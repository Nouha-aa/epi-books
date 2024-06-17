import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { useNavigate } from 'react-router-dom';

export default function SingleBook({ book, isSelected, setSelectedAsin }) {
  const [themeCtx] = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setSelectedAsin(book.asin);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    navigate(`/details/${book.asin}`);
  };

  return (
    <Col>
      <Card
        data-testid="cards"
        bg={themeCtx}
        data-bs-theme={themeCtx}
        style={{ width: '18rem', border: isSelected ? '2px solid red' : 'none' }}
        onClick={handleCardClick}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button 
            className="btn btn-dark w-100 my-2"
            onClick={handleButtonClick}
          >
            Book Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
