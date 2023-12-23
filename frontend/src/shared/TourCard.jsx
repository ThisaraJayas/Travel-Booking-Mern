import { Card, CardBody } from "reactstrap"
import { Link } from 'react-router-dom'
import { FiMapPin } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import './Tour-card.css'
import calculateAvgRating from "../utils/avgRating";
// import image from '../assets/images/tour-img01.jpg'

export default function TourCard({ tour }) {

    const { _id, city, title, photo, price, featured, reviews } = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)//

    //calculate rating======================================
            //in avgRating.js file
    //calculate rating======================================    

    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                <img src={photo} alt="tour-img" />
                    {featured && <span>Featured</span>}
                </div>
                <CardBody>
                    <div className="card__top d-flex align-items-center 
                justify-content-between">
                        <span className="tour__location d-flex align-items-center gap-1">
                            <i><FiMapPin className="i" /></i> {city}
                        </span>
                        <span className="tour__rating d-flex align-items-center gap-1">

                            {/* //Calculate rating==================================================== */}
                            <i><IoStar /></i> {avgRating == 0 ? null : avgRating}
                            {totalRating == 0 ? 'Not rated' : <span>({reviews.length})</span>}
                            {/* //Calculate rating==================================================== */}
                        </span>
                    </div>
                    <h5 className="tour__title">
                        <Link to={`/tours/${_id}`}>{title}</Link>
                        </h5>
                    <div className="card__bottom d-flex align-items-center
                justify-content-between mt-3">
                        <h5>${price} <span> /per person</span></h5>
                        <button className="btn booking__btn">
                            <Link to={`/tours/${_id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}