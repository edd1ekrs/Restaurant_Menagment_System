import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import aboutus from '../assets/images/aboutus.jpg';

function AppAbout() {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;

    return (
        <section id="about" className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className="subtitle">learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={aboutus} />
                    </Col>
                    <Col sm={6}>
                        <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>Welcome to RMS- your premier destination for discovering and booking reservations at the finest restaurants in town!
                            At RMS, we're passionate about connecting food lovers with their ideal dining experiences. Whether you're a seasoned epicurean or simply seeking a memorable meal, we're here to make your culinary adventures unforgettable.
                            Our mission is simple: to provide a seamless and delightful dining experience from start to finish. With our easy-to-use platform, you can explore a diverse range of restaurants, from cozy neighborhood gems to upscale dining destinations. We handpick each establishment to ensure quality, diversity, and authenticity, so you can trust that every dining experience will be exceptional.
                            But we're more than just a reservation platform. We're a community of food enthusiasts, dedicated to sharing our love for great food and hospitality. Our blog features insider tips, chef interviews, and culinary inspiration to enhance your dining journey.
                            Whether you're planning a romantic dinner for two, a family celebration, or a business lunch, let RMS be your trusted companion. Join us in savoring the flavors of life, one unforgettable meal at a time. Welcome to the RMS family!
                        </p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AppAbout;