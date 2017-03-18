import React from 'react';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
// import { Row, Col, Button } from 'react-bootstrap';
import AllDocuments from '../containers/AllDocuments.js';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Wholesome Pinterest</h2>
      <p>Heartwarming images from all our users!</p>
    </Jumbotron>

    <div className="Documents">
      <Row>
        <Col xs={ 12 }>
          <div className="page-header clearfix">
            <h4 className="pull-left">Documents</h4>
            <Button
              bsStyle="success"
              className="pull-right"
              href="/documents/new"
            >New Document</Button>
          </div>
          <AllDocuments />
        </Col>
      </Row>
    </div>
  </div>
);

export default Index;
