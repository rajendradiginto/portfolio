import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../images/1649500464.png";
import Styles from "../styles/side-bar.module.css";

const Sidebar = () => {
    return (
        <Row className={Styles.centerContent}>
            <Image className={Styles.profileImage} src={Profile} />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/about-us">Resume</Link>
                    </li>
                    <li>
                        <Link to="/project">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/project">Contact</Link>
                    </li>
                </ul>
        </Row>
    );
}

export default Sidebar;
