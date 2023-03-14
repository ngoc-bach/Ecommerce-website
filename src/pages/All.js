import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { clothes } from "../constant/data";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "../components/Rating";
import Container from "react-bootstrap/esm/Container";

const All = () => {
  return (
    <Container>
      <Row style={{ height: "3rem" }}>
        <Stack direction="horizontal" gap={2}>
          <span>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </a>
          </span>
          <span>/</span>
          <span>
            <a href="all" style={{ textDecoration: "none", color: "black" }}>
              Category
            </a>
          </span>
          <span>/</span>
          <span style={{ color: "gray" }}>All</span>
        </Stack>
      </Row>
      <Row xs={1} md={4} className="g-4">
        {clothes.map((item) => {
          const { id, name, price, rating, imgURL } = item;
          return (
            <Col key={id}>
              <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.ImgOverlay>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Stack direction="horizontal" gap={2}>
                    <Rating rating={rating} />
                    <Card.Text className="ms-auto">${price}</Card.Text>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default All;
