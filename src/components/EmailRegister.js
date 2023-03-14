import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

function EmailRegister() {
  return (
    <Container
      style={{
        backgroundColor: "#fff5ed",
        borderRadius: "1rem",
        padding: "2rem",
        marginTop: "2rem",
      }}
    >
      <h3 style={{ textAlign: "center" }}>
        Get 30% off your first purchase - sign up now!
      </h3>
      <Form
        style={{ maxWidth: "40%", margin: "1rem auto", textAlign: "center" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ border: "none" }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="dark">Submit</Button>
      </Form>
    </Container>
  );
}

export default EmailRegister;
