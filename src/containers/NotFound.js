import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Page not found!</h1>
                </Col>
            </Row>
        </Container>
    );
};

NotFound.propTypes = {};

export default NotFound;
