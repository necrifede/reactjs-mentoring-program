import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchPanel = () => {
    const navigate = useNavigate();
    const search = useSelector((state) => state.criterias.search);
    const [word, setWord] = useState(search);

    useEffect(() => {
        setWord(search);
    }, [search]);

    return (
        <Row>
            <Col className="p-5">
                <form className="d-flex justify-content-center">
                    <label htmlFor="movieName">Find your movie</label>
                    <input id="movieName" type="text" value={word} onChange={(e) => setWord(e.target.value)} />

                    <Button type="submit" onClick={() => navigate(`${word}`)}>
                        Search
                    </Button>
                </form>
            </Col>
        </Row>
    );
};

SearchPanel.propTypes = {};

export default SearchPanel;
