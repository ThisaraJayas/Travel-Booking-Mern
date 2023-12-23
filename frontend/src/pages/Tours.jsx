import CommonSection from "../shared/CommonSection"
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/Newsletter'
import { useState, useEffect } from "react"
import useFetch from '../hooks/userFetch'
import { BASE_URL } from "../utils/config"

import tourData from '../assets/data/tours'
import { Container, Row, Col } from "reactstrap"

export default function Tours(){

    ///////////////// Page Number////////////////////////////
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
    const {data: tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

    useEffect(()=>{
        const pages = Math.ceil(tourCount/8)
        setPageCount(pages)
    },[page,tourCount])
///////////////// Page Number end part////////////////////////////
    return(
        <>
            <CommonSection title={'All Tours'}/>
            <section>
                <Container>
                    <Row>
                        <SearchBar/>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {loading && <h4 className="text-center pt-5">Loading............</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {
                        !loading && !error && <Row>
                        {
                            tours?.map(tour=> <Col lg='3' className="mb-4"
                             key={tour._id}><TourCard tour={tour}/></Col>)
                        }
                        {/* ==========================page number====================== */}
                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center 
                            justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number=>(
                                    <span key={number} onClick={()=> setPage(number)}
                                    className={page==number? 'active__page':''}>
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                        {/* =====================page number end sec=================== */}
                    </Row>
                    }
                </Container>
            </section>
            <NewsLetter/>
        </>
    )
}