import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import { Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchButtonPanel = ({ unselectMovie = () => {} }) => {
    return (
        <div className="d-flex">
            <div className="me-auto p-2">
                <Logo />
            </div>
            <div>
                <Button variant="primary" onClick={() => unselectMovie()}>
                    <Search />
                </Button>
            </div>
        </div>
    );
};

SearchButtonPanel.propTypes = {
    unselectMovie: PropTypes.func,
};

export default SearchButtonPanel;
