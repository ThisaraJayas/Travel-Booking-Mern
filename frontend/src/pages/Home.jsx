import '../styles/Home.css'
import {Container, Row, Col} from 'reactstrap'
import heroimg from '../assets/images/hero-img01.jpg'
import heroimg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'

export default function Home(){
    return(
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='hero__content'>
                            <div className='hero__subtitle d-flex align-items-center'>
                                <h1>Know Before You Go</h1>
                                {/* <Subtitle subtitle={'Know Before You Go'}/> */}
                                <img src={worldImg} alt=''/>
                            </div>
                            <h1>Traveling opens the door to creating 
                                <span className='highlight'>memories</span>
                            </h1>
                            <p>
                            Love those Anime inspired Mixes. Lofi and Asian instruments work so great together
                            This mix really gives me chills, feels like an new era of Lofi is beginning.
                            instruments work so great together This mix really gives me chills, feels like
                             an new era of Lofi is beginning era of Lofi This mix really gives me chills
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}