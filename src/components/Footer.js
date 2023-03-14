import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Stack from "react-bootstrap/Stack";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4", marginTop: "3rem" }}>
      <Container style={{ margin: "0 auto", padding: "2rem" }}>
        <Row>
          <Col>
            <h5 style={{ marginBottom: "1.5rem" }}>About MiniMal</h5>
            <p>Information</p>
            <p>Store Locator</p>
            <p>Careers</p>
          </Col>
          <Col>
            <h5 style={{ marginBottom: "1.5rem" }}>Help</h5>
            <p>FAQ</p>
            <p>Return policy</p>
            <p>Term & Conditions</p>
          </Col>
          <Col>
            <h5 style={{ marginBottom: "1.5rem" }}>Account</h5>
            <p>Membership</p>
            <p>Profile</p>
            <p>Coupons</p>
          </Col>
          <Col>
            <h5 style={{ marginBottom: "1.5rem" }}>Social media</h5>
            <Stack direction="horizontal" gap={3}>
              <FontAwesomeIcon icon={faSquareFacebook} size={"2x"} />
              <FontAwesomeIcon icon={faSquareInstagram} size={"2x"} />
              <FontAwesomeIcon icon={faYoutubeSquare} size={"2x"} />
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
