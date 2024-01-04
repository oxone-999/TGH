import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home.jsx'
import Bookmark from './components/Bookmark.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/bookmark"
          element={
            <Layout>
              <Bookmark />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
