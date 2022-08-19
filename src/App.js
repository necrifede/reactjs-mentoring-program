import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './containers/NotFound';

const App = () => (
    <Routes>
        <Route path="/" element={<Navigate to="search" replace />} />
        <Route path="search" element={<Layout />}>
            <Route path=":searchValue" element={() => {}} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default App;
