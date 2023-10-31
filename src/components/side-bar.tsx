import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../images/1649500464.png";
import Styles from "../styles/side-bar.module.css";
import menuData from "../allDetails/menu-data.json";

const Sidebar = () => {
    return (
        <Row className={Styles.centerContent}>
            <Image className={Styles.profileImage} src={Profile} />
            <ul>
                <li>
                    <Link to="/">{menuData.home}</Link>
                </li>
                <li>
                    <Link to="/about-us">{menuData.about}</Link>
                </li>
                <li>
                    <Link to="/resume">{menuData.resume}</Link>
                </li>
                <li>
                    <Link to="/portfolio">{menuData.portfolio}</Link>
                </li>
                <li>
                    <Link to="/contact">Contact me</Link>
                </li>
            </ul>
        </Row>
    );
}

export default Sidebar;
