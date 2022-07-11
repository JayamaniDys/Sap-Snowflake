import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardSubtitle,
    CardTitle,
    Button,
    Form,
    FormGroup,
    Label,
    Alert,
    Input,
    Toast,
    ToastBody,
    ToastHeader,
    FormText,
    CardHeader
} from "reactstrap";

const LoginForm = (props) => {
    console.log("here");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginHandler = (ev) => {
        ev.preventDefault();
        if (!username || !password) {
            return;
        }

        // email: "eve.holt@reqres.in",
        // password: "cityslicka"
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("RESPONSE from login success ", data);
                setLoggedin(true);
            });

        // console.log(username, password);
    };

    return (
        <Container >
            <CardHeader>
                <img src="images/header.png" />
            </CardHeader>

            <Row>
                <Col lg="7">
                    <Card>
                        <img src="images/Image 35.png" />
                    </Card>
                </Col>
                <Col lg="5" className="card_sigin">
                    <Card className="display_logo_first" inline >
                        <CardImg className="disys_logo"
                            alt="Card image cap"
                            src="images/Disys_logo.png"
                            top
                        />
                    </Card>
                    <Card className="display_logo_first">
                        <CardBody>
                            <CardTitle className="text-center" tag="h5">
                                SIGN IN
                            </CardTitle>
                            <CardBody className="container-inside">
                                <Form onSubmit={loginHandler}>
                                    <FormGroup className="textbox">
                                        <div className="userid">USER ID</div>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="exampleEmail"
                                            placeholder="Enter your Email or Username"
                                            onChange={(ev) => setUsername(ev.currentTarget.value)}
                                        />
                                        <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                                    </FormGroup>
                                    <FormGroup className="textbox">
                                        <div className="userid">PASSWORD</div>
                                        <Input 
                                            type="password"
                                            name="password"
                                            id="examplePassword"
                                            placeholder="Enter your password"
                                            onChange={(ev) => setPassword(ev.currentTarget.value)}
                                        />
                                        <i class="fa-solid fa-lg fa-fw fa-lock"  aria-hidden="true"></i>
                                    </FormGroup>
                                    <Row>
                                        <Col xs="6">
                                            <FormGroup check>
                                                <Input id="exampleCheck" name="check" type="checkbox" />
                                                <Label for="exampleCheck">Remember me</Label>
                                            </FormGroup>
                                        </Col>
                                        <Col className="text-right" xs="6">
                                            <a href="/forgot">Forgot Password </a>
                                        </Col>
                                    </Row>
                                    <Button block color="primary" className="sigin_priary" size="lg">
                                        SIGN IN
                                    </Button>
                                </Form>
                            </CardBody>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div>
                <CardFooter className="center">
                    <img src="images/footer.png" />
                </CardFooter>
            </div>
        </Container>
    );
};

export default LoginForm;
