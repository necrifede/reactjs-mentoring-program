import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import AddPanel from "./AddPanel";
import SearchPanel from "./SearchPanel";

const Header = ({ addMovie = () => {} }) => {
    return (
        <Row>
            <Col>
                <AddPanel addMovie={addMovie} />
                <SearchPanel />
            </Col>
        </Row>
    );
};

Header.propTypes = {};

export default Header;
