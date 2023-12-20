import './Newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

export default function NewsLetter(){
    return(
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Subscribe now to get useful traveling information.</h2>
                            <div className='newsletter__input'>
                                <input type='email' placeholder='Enter your email' />
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>
                            <p>Lorem hdo fn jsi apoil soplso mongo dayt this the same day to
                                is and amazing day isnt it i this to kite is out city is good</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='newsletter__img'>
                            <img src={maleTourist} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}