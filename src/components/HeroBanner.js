import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./custom.css";
import Container from "react-bootstrap/esm/Container";

function HeroBanner() {
  return (
    <Container style={{ maxWidth: "1550px" }}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/woman-with-dalmatin-dog-outdoors_624325-617.jpg?w=2000&t=st=1678247654~exp=1678248254~hmac=74125c773dacd525a948064187535017f3c1e730cece871a3ba28d3656c4f3ad"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="dark">Shop now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/close-up-shot-woman-with-crossed-arms_23-2148248546.jpg?w=2000&t=st=1678247689~exp=1678248289~hmac=6079f97b27d8a92e879ba92c2d49f3697282cd728c1955926bb7fa4fb6702824"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/stylish-happy-attractive-smiling-woman-posing-desert-sand-dressed-white-clothes-wearing-straw-hat-sunglasses-sunset_285396-9188.jpg?w=2000&t=st=1678247732~exp=1678248332~hmac=32a8fb8f3abc6327a2bc62bb015e2bf5436f737778018292676321a488444b1d"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HeroBanner;
