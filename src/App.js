import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Google, BootstrapFill } from 'react-bootstrap-icons';
import './styles.scss';

function App() {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md="auto" style={{ minWidth: '400px' }}>
                    <div className="text-center">
                        <BootstrapFill
                            className="mb-3"
                            size="50px"
                            color="blue"
                        />
                        <h1 className="h1 fs-2">Log in to your account</h1>
                        <p className="fs-6 mb-4">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <div className="d-flex flex-nowrap mb-3 justify-content-between">
                            <Form.Check type="checkbox" label="Rememer me" />
                            <a href="#/" color="primary" className="link">
                                Forgot password
                            </a>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <Button
                                className="mb-2"
                                variant="primary"
                                size="md"
                            >
                                Sign in
                            </Button>
                            <Button
                                variant="outlined"
                                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                                size="md"
                            >
                                <Google />
                                <span> Sign in with Google</span>
                            </Button>
                        </div>
                        <div className="text-center">
                            <span>Don’t have an account? </span>
                            <a href="#/" className="link">
                                Sign up
                            </a>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
