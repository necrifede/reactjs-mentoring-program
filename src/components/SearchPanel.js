import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";

const SearchPanel = (props) => {
    const [word, setWord] = useState("");

    return (
        <Row>
            <Col className="p-5">
                <form className="d-flex justify-content-center">
                    <label htmlFor="movieName">Find your movie</label>
                    <input id="movieName" type="text" value={word} onChange={(e) => setWord(e.target.value)} />
                    <Button type="submit">Search</Button>
                </form>
            </Col>
        </Row>
    );
};

SearchPanel.propTypes = {};

export default SearchPanel;
