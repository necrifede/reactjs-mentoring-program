import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Logo from './Logo';

const Footer = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <Logo />
        </div>
    );
};

Footer.propTypes = {};

export default Footer;
