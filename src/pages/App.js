import Navigation from '../components/Navigation'
import Heading from '../components/Heading';
import CarModal from '../components/CarModal';
import { useEffect, useState } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getDetailCar, getListCars } from "../actions/CarsAction";

function App() {
  const [modal, setModal] = useState(false)

  const {
    getListCarsResult,
    getListCarsLoading,
    getListCarsError
  } = useSelector((state) => state.CarsReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getListCars())

  }, [dispatch])

  const detailCar = (e, id) => {
    e.preventDefault()

    dispatch(getDetailCar({ carId: id }))

    setModal(true)
  }

  return (
    <div className="home-page">
      <CarModal
        show={modal}
        onHide={() => setModal(false)}
      />
      <Navigation />
      <Heading />
      <Container>
        <h3 className="my-4 fw-bold">Daftar Mobil</h3>
        <Row>
          {getListCarsResult ? (
            getListCarsResult.map((car) => {
              return (
                <Col key={car.id} md="4" sm="6" className="d-flex align-items-stretch">
                  <Card className="w-100 mb-4">
                    <Card.Img variant="top" src={"https://github.com/fnurhidayat/probable-garbanzo/blob/main/public" + car.image.slice(1) + "?raw=true"} style={{ height: "200px", objectFit: "cover" }} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{`${car.manufacture} ${car.model}`}</Card.Title>
                      <Card.Text>{car.description}</Card.Text>
                      {car.available ? (
                        <p className="text-primary">Tersedia</p>
                      ) : (
                        <p className="text-danger">Tidak Tersedia</p>
                      )}
                      <div className="d-flex mt-auto mb-2">
                        <button className="btn btn-success" onClick={(e) => detailCar(e, car.id)}>Go somewhere</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          ) : getListCarsLoading ? (
            <p>Loading ...</p>
          ) : (
            <p>{getListCarsError ? getListCarsError : "Data Kosong"}</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
