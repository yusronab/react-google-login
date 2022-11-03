import { useSelector } from "react-redux"
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner"

export default function ResultFilter() {

    const { filteredCarsResult, filteredCarsLoading, filteredCarsError } = useSelector((state) => state.CarsReducer)

    return (
        <div>
            <Container className="my-5">
                {filteredCarsResult ? (
                    <>
                        <p>Hasil ditemukan : {filteredCarsResult.length} mobil</p>
                        <Row>
                            {filteredCarsResult.map((car) => {
                                return (
                                    <Col key={car.id} md="4" sm="6" className="d-flex align-items-stretch">
                                        <Card className="w-100 mb-4">
                                            <Card.Img variant="top" src={"https://github.com/fnurhidayat/probable-garbanzo/blob/main/public" + car.image.slice(1) + "?raw=true"} style={{ height: "200px", objectFit: "cover" }} />
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title>{`${car.manufacture} ${car.model}`}</Card.Title>
                                                <Card.Text>{car.description}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Kapasitas</Tooltip>}>
                                                    <span className="d-inline-block">
                                                        <div className="badge" style={{ background: "#5CB85F" }}><i className="bi bi-people-fill me-3"></i>{car.capacity}</div>
                                                    </span>
                                                </OverlayTrigger>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </>
                ) : filteredCarsLoading ? (
                    <div className="text-center"><LoadingSpinner /></div>
                ) : (
                    <h2 className="text-center text-muted">{filteredCarsError ? filteredCarsError : "Belum ada hasil pencarian"}</h2>
                )}
            </Container>
        </div>
    )
}