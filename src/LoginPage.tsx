import React from 'react';
import { Container, Row, Col, Form, Button, Card, FloatingLabel } from 'react-bootstrap';
import one from './assets/one.png';
import login from './assets/login-bg.mp4';
import './Custom.css';

const LoginPage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={login} type="video/mp4" />
      </video>

      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} className="d-flex flex-column align-items-center">
            <div
              style={{
                width: '86px',
                height: '89px',
                borderRadius: '100%',
                overflow: 'hidden',
                marginBottom: '20px',
                border: '11px solid rgba(255,255,255,0.15)',
                padding: '0px',
                position: 'relative',
                zIndex: 1,
                top: '60px',
              }}
            >
              <img
                src={one}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <Card
              style={{
                backgroundColor: 'rgb(0 0 0 / 56%)',
                color: '#fff',
                padding: '28px',
                width: '100%',
                maxWidth: '365px',
                margin: '0 auto',
              }}
            >
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h3 className="fst-italic">Login Here</h3>
              </div>

              <Form>
                <Form.Group controlId="formEmail" style={{ marginBottom: '15px' }}>
                  <FloatingLabel controlId="floatingEmail" label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="custom-form-control"
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid #fff',
                        borderRadius: '0',
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="formPassword" style={{ marginBottom: '15px' }}>
                  <FloatingLabel controlId="floatingPassword" className='formPassword' label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="custom-form-control"
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid #fff',
                        borderRadius: '0',
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: '65px',
                    width: '100%',
                    marginBottom: '15px',
                    padding: '3px',
                  }}
                >
                  Login
                </Button>

                <div style={{ textAlign: 'left', marginTop: '10px' }}>
                  <a href="/forgot-password" style={{ color: '#fff', display: 'block', marginBottom: '10px' }}>
                    Forget Password
                  </a>
                  <a href="/register" style={{ color: '#fff' }}>
                    Registration
                  </a>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* cstm */}
      {/* <style>
        {`
          .custom-form-control:focus {
            box-shadow: none !important;
          }
          :root {
  --bs-body-bg: #ffffff00;
}
.form-floating>.form-control:focus~label{
color: rgba(var(--bs-body-color-rgb), .65);
    transform: scale(.85) translateY(-.5rem) translateX(.15rem);
}
        `}
      </style> */}
    </div>
  );
};

export default LoginPage;
