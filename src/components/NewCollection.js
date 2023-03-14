import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function NewCollection() {
  const imgURLs = [
    {
      id: "1",
      url: "https://img.freepik.com/free-photo/portrait-beautiful-fashionable-model-with-natural-blond-hair-posing-red-background-close-up-studio-shot-silk-cocktail-dress_639032-817.jpg?w=1480&t=st=1678332817~exp=1678333417~hmac=afc2fb940044ee2eecbedd0d2adabe5022038b2f31c91098ad36095fa0b274cb",
    },
    {
      id: "2",
      url: "https://img.freepik.com/free-photo/portrait-young-beautiful-girl-black-hat_176420-8523.jpg?w=1480&t=st=1678332704~exp=1678333304~hmac=9df8b2c967b108b9b4026bd584dc3eb30c819bc04b9a55a97a29dac6d13cd874",
    },
    {
      id: "3",
      url: "https://img.freepik.com/free-photo/elegant-stylish-female-woman-with-blond-hair_291650-653.jpg?w=1480&t=st=1678332776~exp=1678333376~hmac=017032ceee2ec735241351f5d0529a9518f2468ef919314a57f50d59405625ff",
    },
  ];
  return (
    <Container
      style={{
        backgroundColor: "#fff5ed",
        borderRadius: "1rem",
        padding: "3rem 2rem",
        marginTop: "2rem",
      }}
    >
      <Row style={{ marginBottom: "1rem" }}>
        <h2 style={{ textAlign: "center" }}>New Colection</h2>
        <Button style={{ color: "black", marginTop: "-0.5rem" }} variant="link">
          Discover more
        </Button>
      </Row>
      <Row xs={1} md={3} className="g-4">
        {imgURLs.map((imgURL) => {
          const { id, url } = imgURL;
          return (
            <Col key={id}>
              <Card>
                <Card.Img variant="top" src={url} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewCollection;
