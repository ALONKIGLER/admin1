import React from "react";
import Layout from "../../components/Layout";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/inpot";

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                  ></Input>
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                  ></Input>
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
              ></Input>

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
              ></Input>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
