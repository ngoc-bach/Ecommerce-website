import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Category() {
  const imgURLs = [
    {
      id: "1",
      name: "dress",
      url: "https://img.freepik.com/free-photo/elegant-stylish-girl-summer-field_1157-23664.jpg?w=2000&t=st=1678253222~exp=1678253822~hmac=846eb128e045fad8a7bd09b077db308b54588c5c893288003a2a7a9c276c8ad4",
    },
    {
      id: "2",
      name: "blazers",
      url: "https://img.freepik.com/free-photo/young-attractive-caucasian-female-hat-sitting-cutting-logs-posing-camera_181624-54782.jpg?w=2000&t=st=1678253519~exp=1678254119~hmac=eeb05829ad9d88de10ce3670b995398fe7732149a75ad1a20e89d39e25006404",
    },
    {
      id: "3",
      name: "skirts",
      url: "https://img.freepik.com/free-photo/beautiful-woman-trendy-red-shoes-posing-park-path-blonde-girl-having-fun-outdoor_197531-26218.jpg?w=2000&t=st=1678253614~exp=1678254214~hmac=511160456f5f6fa8428fbcc658199fa421fccf723abd041487e2b7ff48cd0578",
    },
    {
      id: "4",
      name: "trousers",
      url: "https://img.freepik.com/free-photo/elegant-brunette-woman-posing-egyptian-desert-sand-dunes_273443-3028.jpg?w=2000&t=st=1678253735~exp=1678254335~hmac=7d19f3a2c5635001940cb618484542638e35aa9e3a03fd919f87c94527763a88",
    },
    {
      id: "5",
      name: "suits",
      url: "https://img.freepik.com/free-photo/young-beautiful-woman-outdoors-park_1303-25666.jpg?w=2000&t=st=1678253904~exp=1678254504~hmac=39855e18a9edc6827cb5b46b19d791027e47111a280458e463b8fde20782a4c1",
    },
    {
      id: "6",
      name: "tops",
      url: "https://img.freepik.com/free-photo/fashion-image-sexy-graceful-woman-straw-hat-posing-tropical-palm-leaves_273443-2918.jpg?w=2000&t=st=1678253873~exp=1678254473~hmac=80da968cc434520a016b6505661ac548d2ff6b6d11030a1d6e00700555acda38",
    },
  ];
  return (
    <Container>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>
        MiniMal Category
      </h2>
      <Row xs={1} md={3} className="g-4">
        {imgURLs.map((imgURL) => {
          const { id, name, url } = imgURL;
          return (
            <Col key={id}>
              <Card>
                <Card.Img variant="top" src={url} />
                <Card.ImgOverlay>
                  <Button variant="light">{name}</Button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Category;
