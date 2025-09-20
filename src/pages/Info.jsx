import '../styles/Info.css';
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { FaUsersCog } from "react-icons/fa";
import { GiPoliceCar } from "react-icons/gi";
import { RiUserSettingsFill } from "react-icons/ri";







export default function Info() {
    const dataInfo1 = [
        {id:1 , icon: <IoIosTime className='info_ico' /> , text: "une disponibilité 24H/24 / 7J/7" },
        {id:2 , icon: <RiCustomerService2Line className='info_ico' /> , text: "un service client"  },
    ];

    const dataInfo2 = [
        {id:1 , icon: <FaTruckFast className='info_ico' /> , text: "un service de livraison" },
        {id:2 , icon: <FaUsersCog className='info_ico' /> , text: "une équipe technique disponibe" },
    ];

    const dataInfo3 = [
        {id:1 , icon: <GiPoliceCar className='info_ico' /> , text: "une patrouille"   },
        {id:2 , icon:<RiUserSettingsFill  className='info_ico'/>
, text: "une révision technique par mois" },
    ];
    return(
        <section className='info_main'>
            <div className='info_cont'>
                {dataInfo1.map((data1) =>(
                    <div className='info_box' key={data1.id}>
                    {data1.icon}
                    <h4 className='info_text'> {data1.text} </h4>
                </div>
                ))}
            </div>
            <div className='info_cont'>
                {dataInfo2.map((data2) =>(
                    <div className='info_box' key={data2.id}>
                    {data2.icon}
                    <h4 className='info_text'> {data2.text} </h4>
                </div>
                ))}
            </div>
            <div className='info_cont'>
                    {dataInfo3.map((data3) =>(
                    <div className='info_box' key={data3.id}>
                    {data3.icon}
                    <h4 className='info_text'> {data3.text} </h4>
                </div>
                ))}
            </div>
        </section>
    )
}