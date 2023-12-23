import CommonSection from './../shared/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'

export default function SearchResultList() {
    const location = useLocation()
    const [data] = useState(location.state)
    console.log(data)

    return (
        
        <>
            <CommonSection title={'Tour Search Result'}/>
            <section>
                <Container>
                    <Row>
                        {data && data.length > 0 ? (
                            data.map(tour => (
                                <Col lg='3' className='mb-4' key={tour._id}>
                                    <TourCard tour={tour}/>
                                </Col>
                            ))
                        ) : (
                            <h4 className='text-center'>No Tour Found</h4>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}