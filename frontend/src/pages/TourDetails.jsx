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
import { MdOutlineStar } from "react-icons/md";
import avatar from '../assets/images/avatar.jpg'
import { RiMapPinTimeLine } from "react-icons/ri";
import { useState, useRef } from 'react'
import Booking from '../components/Booking/Booking'
import NewsLetter from '../shared/Newsletter'

export default function TourDetails() {

    const { id } = useParams()
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] =useState(null)


    const tour = tourData.find(tour => tour.id == id)
    //destructure data from tour object
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)

    //format DATE
    const options = {day:'numeric', month:'long', year: 'numeric'}

    //submit request to the server
    const submitHandler = e=>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value

        alert(`${reviewText}, ${tourRating}`)

    }

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
                                            {avgRating == 0 ? null : avgRating}
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
                                            <i><RiMapPinTimeLine /></i> ${price} k/m
                                        </span>
                                        <span>
                                            <i><LuCircleDollarSign /></i> ${distance} /per person
                                        </span>
                                        <span>
                                            <i><RiGroupLine /></i> {maxGroupSize} people
                                        </span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                {/* ===============tour reviews section===================== */}
                                <div className='tour__reviews mt-4'>
                                    <h4>Reviews ({reviews?.length} reviews)</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className='d-flex align-items-center gap-3 
                                        mb-4 rating__group'>
                                            <span onClick={()=> setTourRating(1)}>1 <i><MdOutlineStar /></i></span>
                                            <span onClick={()=> setTourRating(2)}>2 <i><MdOutlineStar /></i></span>
                                            <span onClick={()=> setTourRating(3)}>3 <i><MdOutlineStar /></i></span>
                                            <span onClick={()=> setTourRating(4)}>4 <i><MdOutlineStar /></i></span>
                                            <span onClick={()=> setTourRating(5)}>5 <i><MdOutlineStar /></i></span>
                                        </div>
                                        <div className='review__input'>
                                            <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required />
                                            <button className='btn primary__btn text-white'  type='submit'>
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                    <ListGroup className='user__reviews'>
                                        {
                                            reviews?.map(review =>(
                                                <div className='review__item'>
                                                    <img src={avatar} alt='' />
                                                    <div className='w-100'>
                                                        <div className='d-flex align-items-center 
                                                        justify-content-between'>
                                                            <div>
                                                                <h5>Thisara</h5>
                                                                <p>{new Date('01-18-2023')
                                                                .toLocaleDateString('en-US', options
                                                                )}</p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                5 <i><MdOutlineStar /></i>
                                                            </span>
                                                        </div>
                                                        <h6>Amazing tour</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        <Col lg='4'>
                            <Booking tour={tour} avgRating={avgRating}/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <NewsLetter/>
        </>
    )
}