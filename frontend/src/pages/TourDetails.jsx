import '../styles/tourDetails.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import { IoStar } from "react-icons/io5";
import { RiMapPinFill } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";

export default function TourDetails() {

    const { id } = useParams()
    const tour = tourData.find(tour => tour.id == id)
    //destructure data from tour object
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className='tour__content'>
                                <img src={photo} alt='' />
                                <div className='tour__info'>
                                    <h2>{title}</h2>

                                    <div className='d-flex align-items-center gap-5'>
                                        <span className="tour__rating d-flex align-items-center gap-1">

                                            {/* //Calculate rating==================================================== */}
                                            <i><IoStar style={{'color':'var(--secondary-color)'}} /></i> 
                                            {calculateAvgRating == 0 ? null : avgRating}
                                            {totalRating == 0 ? 'Not rated' 
                                            : <span>({reviews?.length})</span>}
                                            {/* //Calculate rating==================================================== */}
                                        </span>
                                        <span>
                                            <RiMapPinFill />{address}
                                        </span>
                                    </div>
                                    <div className='tour__extra-details'>
                                        <span>
                                            <i><RiMapPin2Line /></i> {city}
                                        </span>
                                        <span>
                                            <i><LuCircleDollarSign /></i> ${price} /per person
                                        </span>
                                        <span>
                                            <i><RiGroupLine /></i> {maxGroupSize}
                                        </span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}