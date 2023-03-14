import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BestSeller() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row style={{ marginBottom: "1rem" }}>
        <h2 style={{ textAlign: "center" }}>Best Seller</h2>
        <Button style={{ color: "black", marginTop: "-0.5rem" }} variant="link">
          Shop Now
        </Button>
      </Row>
      <Row>
        {/* One image */}
        <Col>
          <Card className="text-white">
            <Card.Img
              src="https://img.freepik.com/free-photo/beautiful-sexy-selfconfident-blonde-woman-beige-trench-coat-red-sunglasses-looks-into-camera-poses-outside_197531-28435.jpg?w=1480&t=st=1678334509~exp=1678335109~hmac=36d767e296a1c13054eaad7014e55e29b0f6b032b6ec313c6fe3c4f9c0189d73"
              alt="Card image"
            />
          </Card>
        </Col>

        {/* Four small images */}
        <Col>
          <Row>
            <Col xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/portrait-cute-woman-with-pink-sweater_23-2148749912.jpg?w=1480&t=st=1678337209~exp=1678337809~hmac=efcf508da8c820f9c1218421a5031e47230d6ce064afdab959c3c2aed7bac2cb"
                />
              </Card>
            </Col>
            <Col xs={6}>
              {" "}
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/sad-woman-light-blouse-with-lace-jeans-with-belt-posing-street-trendy-woman-with-short-hair-red-lipstick-looks-away-city_197531-19312.jpg?w=1480&t=st=1678336973~exp=1678337573~hmac=8571c458d27521ef56869b6e60ffb68a0c2f4c0c0a430080cba5508e8aa15277"
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg?w=1480&t=st=1678337058~exp=1678337658~hmac=44bd4673f3918a67736912b93df65375ce63b5838378d27a92011d71cc411acb"
                />
              </Card>
            </Col>
            <Col xs={6}>
              {" "}
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/interested-girl-grey-sweater-photo-sensual-european-lady-posing-home_197531-14056.jpg?w=1480&t=st=1678337121~exp=1678337721~hmac=55238a8c3dd084ac3d47a21a8157677a95d0246639f2585f3ba8d3f27bcfd109"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BestSeller;
