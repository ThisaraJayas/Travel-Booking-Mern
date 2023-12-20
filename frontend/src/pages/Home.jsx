import '../styles/Home.css'
import {Container, Row, Col} from 'reactstrap'
import heroimg from '../assets/images/hero-img01.jpg'
import heroimg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServicesList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import experenceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../components/image-gallery/MasonyImageGallery'


export default function Home(){
    return(
        <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='hero__content'>
                            <div className='hero__subtitle d-flex align-items-center'>
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src={worldImg} alt=''/>
                            </div>
                            <h1>Traveling opens the door to creating 
                                <span className='highlight'> memories</span>
                            </h1>
                            <p>
                            Love those Anime inspired Mixes. Lofi and Asian instruments work so great together
                            This mix really gives me chills, feels like an new era of Lofi is beginning.
                            instruments work so great together This mix really gives me chills, feels like
                             an new era of Lofi is beginning era of Lofi This mix really gives me chills
                            </p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box'>
                            <img src={heroimg} alt=''/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-4'>
                            <video src={heroVideo} alt='' controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-5'>
                            <img src={heroimg02} alt=''/>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/* ================== what we serve section part=========================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className='services__subtitle'>What we serve</h5>
                        <h2 className='services__title'>We offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>
        {/* =============================featured tour section=========================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <Subtitle subtitle={'Explore'}/>
                        <h2 className='featured__tour-title'>Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        {/* =============================experience section=========================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='experence_content'>
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With our all experence <br/> we will serve you</h2>
                            <p>
                                Lorem isfj kolso isne dusm, jupaske elite quaes.
                                <br/>
                                Ques alies. fis btsum dkiu undesb jdopsa
                            </p>
                        </div>
                        <div className='counter__wrapper d-flex align-items-center gap-5'>
                            <div className='counter__box'>
                                <span>12k</span>
                                <h6>Successfull Trip</h6>
                            </div>
                            <div className='counter__box'>
                                <span>2k</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className='counter__box'>
                                <span>15</span>
                                <h6>Years experence</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='experence__img'>
                            <img src={experenceImg} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* =============================Gallery section=========================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'} />
                        <h2 className='gallery__title'>Visit our customers tour gallery</h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* =============================Testimonial section=========================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className='testimonial__title'>What our fans say about us</h2>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}