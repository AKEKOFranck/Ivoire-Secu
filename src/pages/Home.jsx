import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { PiSecurityCameraDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiPoliceCar } from "react-icons/gi";

import { LuMessageCircleMore } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";



import pic1 from'../assets/MT.jpg';
import pic2 from'../assets/DM.jpg';
import pic3 from'../assets/AS.jpg';
import pic4 from'../assets/BA.jpg';







export default function Home() {
    const boxInfo1 = [
        {id:1, icons: <PiSecurityCameraDuotone  className='home2_ico'/> , text: "Installation de", text2: "systèmes d'arlame", text3: "systèmes d'arlame"},
        {id:2, icons:<FaUserTie  className='home2_ico' /> , text: "Agent de Sécurité PostéProtection Rapprochée", text3: ""},
    ];

    const boxInfo2 = [
        {id:1, icons: <GiPoliceCar  className='home2_ico' /> , text: "Services de Télésurveillance", text2: "Une centrale de surveillance opère", text3:"24h/24 et 7j/7"},
        {id:2, icons: <TfiHeadphoneAlt className='home2_ico' /> , text: "Services de Conseil", text2:"Élaboration de documents stratégiques", text3:" pour définir les procédures à suivre en cas d'incident"},
    ];



    const devicesData1 = [
        {id:1 , image:pic1 ,title:"Matériel de Vidéosurveillance" , item: [
            "Caméras ",
            "Enregistreurs Vidéo ",
            "Moniteurs de Contrôle",
            "Systèmes de Management Vidéo"
        ]},
        {id:2, image: pic2, title: "Matériel de Surveillance et d'Alarme" , item: [
            "Centrale d'Alarme",
            "Détecteurs d'Intrusion",
            "Sirène Intérieure/Extérieure",
            "Transmetteur Téléphonique",
        ]},
        {id:3 , image: pic3, title: "Équipement pour les Agents de Sécurité" , item: [
            "Tenue Professionnelle",
            "Équipement de Communication",
            "Matériel de Ronde",
            "Équipement de Protection Individuelle",
        ]},
        {id:4 , image: pic4, title: "Matériel de Contrôle d'Accès" , item: [
            "Lecteurs de badges",
            "Empreintes Digitales",
            "Reconnaissance Faciale",
            " Claviers à Code",
        ]},
    ];


    const priceData1 = [
        "Flexibilité et Adaptabilité du Service :",
        "Vous pouvez faire évoluer votre pack de services ",
        "Test et Évaluation sans Engagement :",
        "Idéal pour évaluer la qualité de service concret de l'agence",
        "Changement de Prestataire Simplifié : ",
        "si le service ne vous satisfait pas",
        
    ];

    const priceData2 = [
        "Services Premium ou Prioritaires :",
        "vous pouvez bénéficier d'un accès prioritaire au support technique,",
        "Stabilité et Sérénité :",
        "Votre solution de sécurité est opérationnelle ",
        "et maintenue sans aucune interruption",
        " Intégration et Évolutivité Privilégiée ",
        "Audits et Rapports Personnalisés :",
    ]


    
    return(
        <section className='home_main'>
          <div className='home_container' id='presentation'>
              <h1 className='home1_title1'>
                Bienvenue sur IVOIRE SECU
             </h1>

             <h2 className='home1_title2'>
                <span>Votre agence de securité</span>
                <span>Ivoirienne</span>
             </h2>
          </div>



          <div className='home_container' id='skills'>
            <Link to='/'>
                <h2 className='home2_title'>
                Découvrez Nos Services
               </h2>
            </Link>

            <div className='home2_cont'>
                {boxInfo1.map((box1) => (
                     <div className='home2_box' key={box1.id}>
                        {box1.icons}
                    <h3 className='home2_text'>
                        <p>{box1.text}</p>
                        <p>{box1.text2}</p>
                        <p>{box1.text3}</p>
                    </h3>
                </div>
                ))}
            </div>

             <div className='home2_cont'>
                 {boxInfo2.map((box2) => (
                     <div className='home2_box' key={box2.id}>
                        {box2.icons}
                    <h3 className='home2_text'>
                        <p>{box2.text}</p>
                        <p>{box2.text2}</p>
                        <p>{box2.text3}</p>
                    </h3>
                </div>
                ))}
            </div>

          </div>



          <div className='home_container' id='devices'>
                    <Link to='/'>
                    <h2 className='home3_title'>
                       Explorez Nos Outils
                    </h2>
                    </Link>

                <div className='home3_cont'>
                    {devicesData1.map((device1) => (
                        <div className='home3_box' key={device1.id}>
                        <img src={device1.image} className='home3_img' alt='poste' />
                       
                            <p className='home3_text_title'> {device1.title} </p>
                            <ul className='home3_text1'>
                                {device1.item?.map((items, idx) =>
                                <li key={idx} className='home3_text2'>{items}</li>
                                )}
                            </ul>
                        
                    </div>
                    ))}
                </div>

          </div>



          <div className='home_container' id='prices'>
            <div className='home4_cont' id='h4_1'>
                <h3 className='home4_text_title'>
                    Opter pour un Abonnement mensuel
                </h3>
                <ul className='home4_text'>
                    {priceData1.map((item, idx) => (
                        <li key={idx}>{item}</li>
                ))}
                </ul>
            </div>

            <div className='home4_cont' id='h4_2'>
                  <h3 className='home4_text_title'>
                    Opter pour un Abonnement annuel
                </h3>
                <ul className='home4_text'>
                    {priceData2.map((item, idx) => (
                        <li key={idx}>{item}</li>
                ))}
                </ul>
            </div>
          </div>


          <div className='home_container' id='contact'>
            <div className='home5_cont'>
                <a href="mailto:ivoireSecu@gmail.com?subject=Demande de reservation">
                    <LuMessageCircleMore className='home5_ico' />
                </a>
                <h4 className='home5_text'> faire une réservation </h4>
            </div>
            <h2 className='home5_title'>
                <p>La sécurité est un art </p>
                <p>Nous en sommes les experts</p>
            </h2>
            <div className='home5_cont'>
                
                <a href="tel:+225 0708128559"> 
                    <FaPhone className='home5_ico' />
                </a>
                 <h4 className='home5_text'> contactez nous </h4>
            </div>
          </div>
        </section>
    )
}
