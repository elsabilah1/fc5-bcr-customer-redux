import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetail from './components/CarDetail';
import CarList from './components/CarList';
import Error from './components/Error';
import Layout from './components/Layout';
import OrderDetail from './components/OrderDetail';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="cars" element={<CarList />} />
                    <Route path="cars/:id" element={<CarDetail />} />
                    <Route path="order/:id" element={<OrderDetail />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
