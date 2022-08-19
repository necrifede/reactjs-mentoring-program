import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useSearchParams } from 'react-router-dom';

const SearchButtonPanel = () => {
    const [, setSearchParams] = useSearchParams();

    return (
        <div className="d-flex">
            <div className="me-auto p-2">
                <Logo />
            </div>
            <div>
                <Button variant="primary" onClick={() => setSearchParams({ movie: '' })}>
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
