import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form as FormBootstrap, Modal, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import uniqid from 'uniqid';
import { format, parse } from 'date-fns/esm';
import { MovieShape } from './shapes';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getAllGenders } from '../utils';
import { prop } from 'ramda';
const { Label, Text, Group, Control } = FormBootstrap;

const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Is required'),
    poster_path: Yup.string().required('Is required'),
    genres: Yup.array().min(1, "You can't leave this blank.").required("You can't leave this blank.").nullable(),
    release_date: Yup.string(),
    vote_average: Yup.lazy((value) => (value === '' ? Yup.string() : Yup.number())),
    runtime: Yup.lazy((value) =>
        value === '' ? Yup.string().required('Is required') : Yup.number().required('Is required')
    ),
    overview: Yup.string().required('Is required'),
});

const initials = {
    title: '',
    poster_path: '',
    genres: [],
    release_date: '',
    vote_average: '',
    runtime: '',
    overview: '',
};

const AddEditMovieModal = ({ show = false, hideFunction = () => {}, actionMovie = () => {}, movie = initials }) => {
    const movies = useSelector((state) => state.movies.data);
    const allGenres = getAllGenders(movies);
    const genreOptions = allGenres?.map((genre) => ({ value: genre, label: genre })) ?? [];

    return (
        <Modal show={show} size="lg" onHide={hideFunction}>
            <Formik
                initialValues={movie}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('values: ', values);
                    // TODO: control vote_average and runtime when it is empty string ''
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    handleReset,
                    setFieldValue,
                }) => (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Add/Edit Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col lg={7}>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Title Movie</Label>
                                            <Control
                                                type="input"
                                                name="title"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                                placeholder="Title Movie"
                                            />
                                            <Text className="text-danger">
                                                {errors.title && touched.title && errors.title}
                                            </Text>
                                        </Group>
                                    </Col>
                                    <Col>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Release Date</Label>
                                            <Control
                                                type="date"
                                                name="release_date"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.release_date}
                                                placeholder="Select Date"
                                            />
                                            <Text className="text-danger">
                                                {errors.release_date && touched.release_date && errors.release_date}
                                            </Text>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Poster URL</Label>
                                            <Control
                                                type="input"
                                                name="poster_path"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.poster_path}
                                                placeholder="https://"
                                            />
                                            <Text className="text-danger">
                                                {errors.poster_path && touched.poster_path && errors.poster_path}
                                            </Text>
                                        </Group>
                                    </Col>
                                    <Col>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Rating</Label>
                                            <Control
                                                type="number"
                                                name="vote_average"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.vote_average}
                                                placeholder="example 7.8"
                                            />
                                            <Text className="text-danger">
                                                {errors.vote_average && touched.vote_average && errors.vote_average}
                                            </Text>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Genres</Label>
                                            <Select
                                                isMulti
                                                closeMenuOnSelect={false}
                                                // defaultValue={[]}
                                                name="genres"
                                                // onChange={(e) => {
                                                //     console.log('e: ', e);
                                                //     // handleChange(e.map(prop('value')));
                                                //     setValues({ genres: e.map(prop('value')) });
                                                // }}
                                                onChange={(option) =>
                                                    setFieldValue('genres', option.map(prop('value')))
                                                }
                                                isLoading={!allGenres}
                                                options={genreOptions}
                                                placeholder="Select Genres"
                                            />
                                            <Text className="text-danger">
                                                {errors.genres && touched.genres && errors.genres}
                                            </Text>
                                        </Group>
                                    </Col>
                                    <Col>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Runtime</Label>
                                            <Control
                                                type="number"
                                                name="runtime"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.runtime}
                                                placeholder="Minutes"
                                            />
                                            <Text className="text-danger">
                                                {errors.runtime && touched.runtime && errors.runtime}
                                            </Text>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Group className="mb-3" controlId="formBasicEmail">
                                            <Label>Overview</Label>
                                            <Control
                                                type="text"
                                                as="textarea"
                                                name="overview"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.overview}
                                                placeholder="Movie Description"
                                            />
                                            <Text className="text-danger">
                                                {errors.overview && touched.overview && errors.overview}
                                            </Text>
                                        </Group>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="reset" variant="secondary" onClick={() => handleReset()}>
                                Reset
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                onClick={(e) => {
                                    console.log('e: ', e);
                                    handleSubmit(e);
                                }}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal>
    );
};

AddEditMovieModal.propTypes = {
    show: PropTypes.bool,
    hideFunction: PropTypes.func,
    actionMovie: PropTypes.func,
    movie: PropTypes.shape(MovieShape),
};

export default AddEditMovieModal;
