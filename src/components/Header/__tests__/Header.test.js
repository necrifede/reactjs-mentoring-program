import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { createTestStore } from '../../../../settings/setupTests';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { clearSelectedMovie, setSelectedMovie } from '../../../store';
import SearchButtonPanel from '../SearchButtonPanel';

describe('<Header />', () => {
    let store;

    beforeEach(() => {
        store = createTestStore();
    });

    test('should Render default header', () => {
        const container = render(
            <Provider store={store}>
                <Header />
            </Provider>,
            { wrapper: BrowserRouter }
        );
        expect(container).toMatchSnapshot();
    });

    test('should Render header displaying a movie', () => {
        store.dispatch(setSelectedMovie({ id: 123, title: 'A movie', overview: 'An overview', genres: [] }));

        const container = render(
            <Provider store={store}>
                <Header />
            </Provider>,
            { wrapper: BrowserRouter }
        );

        expect(screen.getByText(/A movie/i)).toBeInTheDocument();
        expect(screen.getByText(/An overview/i)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    test('should Render header displaying a movie and unselecting it when state change', async () => {
        store.dispatch(setSelectedMovie({ id: 123, title: 'A movie', overview: 'An overview', genres: [] }));
        const FullHeader = () => (
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );
        const container = render(<FullHeader />);

        expect(screen.queryByText(/A movie/i)).toBeInTheDocument();
        expect(screen.queryByText(/An overview/i)).toBeInTheDocument();

        await store.dispatch(clearSelectedMovie());

        expect(screen.queryByText(/A movie/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/An overview/i)).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
