import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Users = ({ params }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <DocumentsList _id={ params._id }/>
      </Col>
    </Row>
  </div>
);

Users.propTypes = {
  params: React.PropTypes.object,
};

export default Users;
