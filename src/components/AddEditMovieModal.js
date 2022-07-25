import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form as FormBootstrap, Modal, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MovieShape } from './shapes';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getAllGenres } from '../utils';
import { isEmpty, prop } from 'ramda';
import { compose } from 'ramda';
import { createMovie, updateMovie } from '../store/actions';
import { format } from 'date-fns';
const { Label, Text, Group, Control } = FormBootstrap;

const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Is required'),
    poster_path: Yup.string().url().required('Is required'),
    genres: Yup.array()
        .min(1, 'Select at least one genre to proceed.')
        .required('Select at least one genre to proceed.')
        .nullable(),
    release_date: Yup.date().required('Is required'),
    vote_average: Yup.lazy((value) => (value === '' ? Yup.string() : Yup.number())),
    runtime: Yup.lazy((value) =>
        value === '' ? Yup.string().required('Is required') : Yup.number().required('Is required')
    ),
    overview: Yup.string().required('Is required'),
});

const rectifyFinalValues = ({ vote_average, runtime, ...values }) => ({
    ...values,
    vote_average: vote_average === '' ? 0 : vote_average,
    runtime: runtime === '' ? 0 : runtime,
});

const rectifyInitialValues = ({ release_date, runtime, ...values }) => ({
    ...values,
    release_date: isEmpty(release_date) ? '' : format(release_date, 'yyyy-MM-dd'),
    runtime: runtime ?? '',
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

const AddEditMovieModal = ({ show = false, hideFunction = () => {}, movie = initials }) => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.data);
    const isAddingMovie = movie === initials;
    const createUpdateMovie = compose(dispatch, isAddingMovie ? createMovie : updateMovie, rectifyFinalValues);
    const allGenres = getAllGenres(movies);
    const genreOptions = allGenres?.map((genre) => ({ value: genre, label: genre })) ?? [];

    return (
        <Modal show={show} size="lg" onHide={hideFunction}>
            <Formik
                initialValues={rectifyInitialValues(movie)}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    createUpdateMovie(values);
                    setSubmitting(false);
                    hideFunction();
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
                            <Modal.Title>{`${isAddingMovie ? 'Add' : 'Edit'} Movie`}</Modal.Title>
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
                                        <Group className="mb-3" controlId="formBasicEmail1">
                                            <Label>Release Date</Label>
                                            <Control
                                                type="date"
                                                name="release_date"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.release_date}
                                                placeholder={'Select Date'}
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
                                                name="genres"
                                                defaultValue={
                                                    movie?.genres?.map((genre) => ({
                                                        label: genre,
                                                        value: genre,
                                                    })) ?? []
                                                }
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
                                                rows="4"
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
                            <Button variant="primary" type="submit" disabled={isSubmitting} onClick={handleSubmit}>
                                {isAddingMovie ? 'Create Movie' : 'Save Changes'}
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
    movie: PropTypes.shape(MovieShape),
};

export default AddEditMovieModal;
