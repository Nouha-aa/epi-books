import { Col, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

export default function AllTheBooks({ books, searchQuery, selectedAsin, setSelectedAsin }) {
  return (
    <Row>
      <Col md={selectedAsin ? 8 : 12}>
        <Row>
          {books
            .filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(book => (
              <SingleBook 
                dataid='cards'
                key={book.asin} 
                book={book} 
                isSelected={selectedAsin === book.asin}
                setSelectedAsin={setSelectedAsin}
              />
            ))}
        </Row>
      </Col>
      {selectedAsin && (
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      )}
    </Row>
  );
}
