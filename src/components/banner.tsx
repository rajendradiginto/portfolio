import { Col, Row } from "react-bootstrap";
import Styles from "../styles/banner.module.css";

const Banner = () => {
    return (
        <>
            <Row>
                <div className={Styles.centerContent}>
                    <Col md={10}>
                        <h1>Hi, I am <span className={Styles.myName}>Rajendra Singh Bisht</span></h1>
                        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    </Col>
                </div>
            </Row>
        </>
    );
}

export default Banner;
