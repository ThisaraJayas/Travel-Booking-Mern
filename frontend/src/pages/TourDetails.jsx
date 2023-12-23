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
import { useState, useRef, useEffect } from 'react'
import Booking from '../components/Booking/Booking'
import NewsLetter from '../shared/Newsletter'
import image from '../assets/images/tour-img01.jpg'
import { BASE_URL } from "../utils/config"
import useFetch from '../hooks/userFetch'

//for review.....................................
import { useContext } from 'react'
import AuthContext from './../context/AuthContext'


export default function TourDetails() {

    const { id } = useParams()
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] =useState(null)
    ////////for review part/////////////////////////////////////
    const {user} = useContext(AuthContext)


    const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)
    //destructure data from tour object
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)

    //format DATE
    const options = {day:'numeric', month:'long', year: 'numeric'}

    //submit request to the server
    const submitHandler = async e=>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value

        /////////review part////////////////////////////////////////////
        
        }

        try{
            if(!user || user===undefined || user===null){
                alert('please sign in')
            }

            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating
            }
            const res = await fetch(`${BASE_URL}/review/${id}`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj)
            })
            const result = await res.json()
            if(!res.ok){
                return  alert(result.message)
            }
            alert(result.message)
        }catch(err){
            alert(err.message)
        }

    }
 ///////////////////////////////////////////review part  end////////////////////////////////////////////
    useEffect(()=>{
        window.scrollTo(0,0)
    },[tour])

    return (
        <>
            <section>
                <Container>
                    {
                        loading && <h4 className='text-center pt-5'>Loading..........</h4>
                    }
                    {
                       error && <h4 className='text-center pt-5'>{error}</h4>
                    }
                    {
                        !loading && !error && <Row>
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
//------------------------ review part---------------------------------------------------------------------------------------------
                                                                <h5>{review.username}</h5>
                                                                <p>{new Date(review.createdAt)
                                                                .toLocaleDateString('en-US', options
                                                                )}</p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                {review.rating} <i><MdOutlineStar /></i>
                                                            </span>
                                                        </div>
                                                        <h6>{review.reviewText}</h6>
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
                    }
                </Container>
            </section>
            <NewsLetter/>
        </>
    )
}