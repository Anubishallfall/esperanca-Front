import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard';
import Login from './login';
function Admin() {

    return (
        <Routes>
            <Route path="/">
                <Route index element={
                    <Login />
                } />
                <Route path="dashboard" element={
                    <Dashboard />
                } />
            </Route>
        </Routes>

    )
}

export default Admin