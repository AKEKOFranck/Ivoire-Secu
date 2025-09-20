import '../styles/About.css';

export default function About() {

    const Data1 = [
        {
        id:1,
        title:"Objectif de l'Entreprise",
        text:"L'objectif principal d'IVOIRE SECU est d'offrir à ses clients, particuliers et entreprises, une tranquillité d'esprit absolue grâce à des solutions de sécurité sur mesure, innovantes et fiables. Nous nous engageons à protéger les biens et les personnes en prévenant les risques et en intervenant avec rapidité et professionnalisme, 24h/24 et 7j/7.",
    },

     {
        id:2,
        title:"Histoire et Localisation",
        text:"Fondée à Abidjan, IVOIRE SECU puise sa force dans une connaissance approfondie des enjeux de sécurité locaux et une expertise technique de pointe. Notre agence s'est rapidement imposée comme un acteur de confiance dans le paysage ivoirien en alliant le professionnalisme des standards internationaux à une compréhension unique des besoins spécifiques de la région. Basée au cœur de la capitale économique, Abidjan, notre entreprise dispose d'une centrale de télésurveillance ultra-moderne et d'équipes d'intervention réparties stratégiquement pour garantir une réactivité optimale sur l'ensemble du district et au-delà.",
    },
    ]

    
    return(
        <section className="about_main">
            <div className='about_cont'>
                {Data1.map((d1) =>(
                    <div className='about_box' key={d1.id}>
                        <h3 className='about_title'>
                            {d1.title}
                        </h3>
                        <h4 className='about_text'>
                            {d1.text}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    )
}