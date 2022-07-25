import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { clearSelectedMovie } from '../../store';

const SearchButtonPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="d-flex">
            <div className="me-auto p-2">
                <Logo />
            </div>
            <div>
                <Button variant="primary" onClick={() => dispatch(clearSelectedMovie())}>
                    <Search />
                </Button>
            </div>
        </div>
    );
};

SearchButtonPanel.propTypes = {
    unselectMovie: PropTypes.func,
};

// TODO: Test this without connect
export default SearchButtonPanel;
