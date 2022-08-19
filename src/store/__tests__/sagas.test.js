// import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { moviesReducer } from '../reducerMovies';
import { fetchMovies } from '../sagas';
import axios from 'axios';
import { formatMovies } from '../../utils';

jest.mock('axios');

describe('sagas', () => {
    describe('fetchMovies', () => {
        test('should get empty movies', () => {
            const criterias = { payload: { criterias: { query: 'value', query2: 'value2' } } };
            const response = { data: [], totalAmount: 0, limit: 10, offset: 0 };
            axios.get.mockResolvedValueOnce({ data: response });

            return expectSaga(fetchMovies, criterias)
                .withReducer(moviesReducer)
                .provide([[call(axios.get, ''), null]])
                .hasFinalState(response)
                .run();
        });

        test('should get 13 movies', () => {
            const movies = [
                { name: 'movie01', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie02', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie03', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie04', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie05', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie06', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie07', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie08', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie09', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie10', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie11', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie12', release_date: '2012-12-30', runtime: 123 },
                { name: 'movie13', release_date: '2012-12-30', runtime: 123 },
            ];
            const criterias = { payload: { criterias: { query: 'value', query2: 'value2' } } };
            const response = { data: movies, totalAmount: 12, limit: 10, offset: 3 };
            axios.get.mockResolvedValueOnce({ data: response });

            return expectSaga(fetchMovies, criterias)
                .withReducer(moviesReducer)
                .provide([[call(axios.get, ''), null]])
                .hasFinalState(formatMovies(response))
                .run();
        });
    });
});
