import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarSection from './components/side-bar';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about-us';
import Home from './pages/home';
import Sidebar from './components/side-bar';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/project' element={<AboutUs />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
