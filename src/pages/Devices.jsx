import '../styles/Devices.css';
import { Link } from 'react-router-dom';

export default function Devices() {

    const bigData1 = [
        "Centrales d'alarme avec transmetteurs GSM/IP",
        "Détecteurs de mouvement et d'ouverture",
        "Détecteurs de bris de verre et de vibration",
        "Sirènes intérieures et extérieures"
    ];

    const bigData2 = [
        "Caméras dômes, bullets et PTZ motorisées",
        "Caméras vision nocturne infrarouge",
        "Systèmes d'enregistrement NVR/DVR",
        "Caméras LPR pour lecture de plaques"
    ]

    const bigData3 = [
        "Badgeuses et lecteurs RFID",
        "Systèmes biométriques (empreintes, reconnaissance faciale)",
        "Tourniquets et portillons de sécurité",
        "Barrières et bornes de parking"
    ];

    const bigData4 = [
        "Terminaux de ronde électroniques",
        "Radios portatives UHF/VHF",
        "Systèmes de gestion de poste de garde",
        "Équipements de protection individuelle",
        "armes non létales",
        "Chiens de garde"
    ];

    return (
        <section className='devices_main'>
            <div className='devices_container' id='devices_container1'>
                <h3 className='devices_title'>
                    Systèmes d'Alarme et Détection
                </h3>
                <ul className='devices_list1'>
                    {bigData1.map((item, idx) => (
                        <li className='devices_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className='devices_container' id='devices_container2'>
                <h3 className='devices_title'>
                    Vidéosurveillance
                </h3>
                <ul className='devices_list1'>
                    {bigData2.map((item, idx) => (
                        <li className='devices_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className='devices_container' id='devices_container3'>
                <h3 className='devices_title'>
                    Contrôle d'Accès
                </h3>
                <ul className='devices_list1'>
                    {bigData3.map((item, idx) => (
                        <li className='devices_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className='devices_container' id='devices_container4'>
                <h3 className='devices_title'>
                    Équipements pour Agents
                </h3>
                <ul className='devices_list1'>
                    {bigData4.map((item, idx) => (
                        <li className='devices_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}