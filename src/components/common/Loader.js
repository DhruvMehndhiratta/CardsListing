import React from 'react';
import { Container } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="page-container">
      <Container>
        <div className="loader">
          <img src={require('../../assets/loader1.gif')} />
        </div>
      </Container>
    </div>
  )
}

export default Loader;