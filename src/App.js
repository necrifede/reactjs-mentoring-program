import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Header from './components/Header/Header';

const SearchEmpty = () => (
    <>
        <h2>Empty seach</h2>
        <Outlet />
    </>
);

const SearchValue = () => {
    const params = useParams();
    console.log('params: ', params);
    return <>specific value {JSON.stringify(params)}</>;
};

const App = () => (
    <Routes>
        <Route path="/" element={<Navigate to="search" />} />
        {/* replace */}
        {/* <Route path="" element={<h2>Empty Route</h2>} /> */}
        {/* <Route path="/search" element={<Layout />}>
            <Route path=":id" element={<Header />} />
        </Route> */}
        <Route path="search" element={<SearchEmpty />}>
            <Route path=":id" element={<SearchValue />} />
        </Route>
        {/* <Route path=":jaja" element={<Layout />} /> */}
        {/* </Route> */}
        {/* <Route exact path="/search/:jaja" element={<Layout />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default App;
