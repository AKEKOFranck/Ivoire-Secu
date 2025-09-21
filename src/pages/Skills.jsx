import '../styles/Skills.css';
import { Link } from 'react-router-dom';
import { PiSecurityCameraDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiPoliceCar } from "react-icons/gi";

export default function Skills() {
    

    const bigData1 = [
        "Installation de systèmes d'alarme (intrusion, incendie, détection de gaz, inondation)",
        "Installation de systèmes de vidéosurveillance (caméras, enregistreurs, visionnage à distance)",
        "Contrôle d'accès électronique (badges, biométrie, digicodes)",
        "Maintenance et dépannage (entretien contractuel pour fonctionnement optimal)"
    ];

    const bigData2 = [
        "Agent de sécurité posté (contrôle d'accès, rondes, protection des biens et personnes)",
        "Rondes de surveillance (vérification programmée de l'intégrité des sites)",
        "Surveillance événementielle (sécurité pour congrès, concerts, mariages)"
    ];

    const bigData3 = [
        "Monitoring d'alarme intrusion (vérification audio/vidéo et intervention)",
        "Vidéo-vérification (confirmation visuelle des intrusions)",
        "Surveillance vidéo à distance (détection de comportements suspects)",
        "Télé-assistance médicale (service d'urgence pour personnes vulnérables)"
    ];

    const bigData4 = [
        "Audit de sécurité (analyse des risques et recommandations)",
        "Plan de sécurité (élaboration de procédures et stratégies)",
        "Formation du personnel (premiers secours, évacuation, gestion d'intrusion)"
    ];

    

    return (
        <section className='skills_main'>
           

            <div className='skills_container' id='skills_container1'>
                <h3 className='skills_title'>
                    Installation de systèmes
                </h3>
                <ul className='skills_list1'>
                    {bigData1.map((item, idx) => (
                        <li className='skills_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className='skills_container' id='skills_container2'>
                <h3 className='skills_title'>
                    Agent de Sécurité
                </h3>
                <ul className='skills_list1'>
                    {bigData2.map((item, idx) => (
                        <li className='skills_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className='skills_container' id='skills_container3'>
                <h3 className='skills_title'>
                    Services de Télésurveillance
                </h3>
                <ul className='skills_list1'>
                    {bigData3.map((item, idx) => (
                        <li className='skills_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className='skills_container' id='skills_container4'>
                <h3 className='skills_title'>
                    Services de Conseil
                </h3>
                <ul className='skills_list1'>
                    {bigData4.map((item, idx) => (
                        <li className='skills_list2' key={idx}> {item} </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}