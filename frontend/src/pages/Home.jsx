import '../styles/Home.css'
import {Container, Row, Col} from 'reactstrap'
import heroimg from '../assets/images/hero-img01.jpg'
import heroimg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'


export default function Home(){
    return(
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
    )
}