import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Notification from './components/Notification';
import { motion, AnimatePresence } from 'framer-motion';

// A simple local protected route component that uses useApp
const ProtectedNeuralHub = ({ children }) => {
    const { user } = useApp();
    return user ? children : <Navigate to="/auth" />;
};

function AppContent() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Notification />

            <div style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                    <Routes>
                        {/* Public Access Hubs - Perfect for a landing experience */}
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/auth" element={<Auth />} />

                        {/* Protected Neural Hubs */}
                        <Route path="/cart" element={
                            <ProtectedNeuralHub>
                                <Cart />
                            </ProtectedNeuralHub>
                        } />
                        <Route path="/profile" element={
                            <ProtectedNeuralHub>
                                <Profile />
                            </ProtectedNeuralHub>
                        } />
                    </Routes>
                </AnimatePresence>
            </div>

            <footer className="glass" style={{ marginTop: '4rem', padding: '4rem 0', borderBottom: 'none' }}>
                <div className="container grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div>
                        <h3 className="cyan-glow mb-4" style={{ letterSpacing: '2px' }}>INDUSNODE</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            The premier destination for futuristic circuitry and biological sync tech.
                            Established 2026.
                        </p>
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Navigation</p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <li className="mb-2"><a href="/">Home</a></li>
                            <li className="mb-2"><a href="/search">Categories</a></li>
                            <li className="mb-2"><a href="/profile">Profile</a></li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Support</p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <li className="mb-2">FAQ</li>
                            <li className="mb-2">Shipping Hub</li>
                            <li className="mb-2">Neural Links</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Connect</p>
                        <div className="flex gap-4">
                            <div className="glass" style={{ width: '32px', height: '32px', borderRadius: '50%' }}></div>
                            <div className="glass" style={{ width: '32px', height: '32px', borderRadius: '50%' }}></div>
                            <div className="glass" style={{ width: '32px', height: '32px', borderRadius: '50%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="container mt-8 pt-8" style={{ borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    © 2026 IndusNode. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <AppProvider>
            <Router>
                <AppContent />
            </Router>
        </AppProvider>
    );
}

export default App;
