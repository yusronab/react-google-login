import { useSelector } from "react-redux"
import { Container } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner"

export default function ResultFilter() {

    const { filteredCarsResult, filteredCarsLoading, filteredCarsError } = useSelector((state) => state.CarsReducer)

    console.log(filteredCarsResult)
    return (
        <div>
            <Container className="my-5">
                {filteredCarsResult ? (
                    <>
                        <p>Hasil ditemukan: {filteredCarsResult.length} mobil</p>
                        {filteredCarsResult.map((cars) => {
                            return (
                                <div key={cars.id}>
                                    <p>{cars.manufacture} {cars.model}</p>
                                </div>
                            )
                        })}
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