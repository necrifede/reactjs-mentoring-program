import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Layout = (props) => {
    return (
        <Container>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
};

Layout.propTypes = {};

export default Layout;
