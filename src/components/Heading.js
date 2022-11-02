import carImage from '../assets/cars.png'
import { Container, Row, Col } from 'react-bootstrap'

function Heading() {
    return (
        <div style={{ height: "100vh", background: "#F1F3FF", position: "relative" }}>
            <div className="bg-car"></div>
            <Container className="h-100 d-flex pt-md-5">
                <Row className=" d-flex justify-content-center align-items-center">
                    <Col md="6" className="tagline">
                        <h2>sewa &amp; rental mobil terbaik dikawasan lokasimu</h2>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <a href="/blog" className="btn btn-success">Mulai Sewa Mobil</a>
                    </Col>
                    <Col md="6" style={{ zIndex: 1 }}>
                        <img src={carImage} alt="car img" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Heading