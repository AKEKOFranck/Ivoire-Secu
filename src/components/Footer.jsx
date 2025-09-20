import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { LuMessageCircleMore } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

export default function Footer() {
    const footData1 = [
        {
            id: 1,
            ico: (
                <a href="mailto:ivoireSecu@gmail.com?subject=Demande de reservation">
                    <LuMessageCircleMore className='foot_ico' />
                </a>
            ),
            text: "Faire une réservation",
        },
        {
            id: 2,
            ico: (
                <a href='https://maps.app.goo.gl/TEFETP8zaejG7H3BA' target="_blank" rel="noopener noreferrer">
                    <FaMapLocationDot className='foot_ico' />
                </a>
            ),
            text: "Voir notre localisation",
        },
    ];

    const footData2 = [
        {
            id: 1,
            ico: (
                <a href="tel:+2250708128559">
                    <FaPhone className='foot_ico' />
                </a>
            ),
            text: "Contactez-nous",
        },
        {
            id: 2,
            ico: (
                <Link to='/About'>
                    <FaQuestionCircle className='foot_ico' />
                </Link>
            ),
            text: "Questions / Préoccupations",
        },
    ];

    return (
        <footer className='foot'>
            <div className='foot_box'>
                {footData1.map((f1) => (
                    <div className='foot_cont' key={f1.id}>
                        {f1.ico}
                        <h4 className='foot_text'>{f1.text}</h4>
                    </div>
                ))}
            </div>
            
            <div className='foot_box'>
                {footData2.map((f2) => (
                    <div className='foot_cont' key={f2.id}>
                        {f2.ico}
                        <h4 className='foot_text'>{f2.text}</h4>
                    </div>
                ))}
            </div>
        </footer>
    );
}