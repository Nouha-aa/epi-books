import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi'; 

export default function SearchBook({ search, handleSearch }) {
  return (
    <Col md={3} className="mx-3">
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Book's Title..."
          value={search}
          onChange={handleSearch}
        />
        <InputGroup.Text>
          <BiSearch />
        </InputGroup.Text>
      </InputGroup>
    </Col>
  );
}