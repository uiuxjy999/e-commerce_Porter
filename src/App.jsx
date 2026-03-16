import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Complete from './pages/Complete';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindAccount from './pages/FindAccount';
import MyPage from './pages/MyPage';
import Board from './pages/Board';
import NotFound from './pages/NotFound';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

function App() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product" element={<ProductList />} />
                    <Route path="/women" element={<ProductList />} />
                    <Route path="/men" element={<ProductList />} />
                    <Route path="/kids" element={<ProductList />} />
                    <Route path="/sale" element={<ProductList />} />
                    <Route path="/best" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/complete" element={<Complete />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/find-account" element={<FindAccount />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/board/:type" element={<Board />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
