import React,{useState,useEffect} from 'react'
import NavCard from './NavCard.js';
import "../styles/NavOptios.css";

const NavOptios = ({miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {

    // const [miPhonesToggle, setmiPhonesToggle] = useState(false);
    // const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
    // const [tvToggle, setTvToggle] = useState(false);
    // const [laptopToggle, setlaptopToggle] = useState(false);
    // const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] = useState(false);
    // const [homeToggle, sethomeToggle] = useState(false);
    // const [audioToggle, setaudioToggle] = useState(false);
    // const [accessoriesToggle, setaccessoriesToggle] = useState(false);

    // useEffect(() => {
        
    //     if (window.location.pathname==="/miphones") {
    //         return setmiPhonesToggle(true);
    //     }
    //     if (window.location.pathname==="/redmiphones") {
    //         return setredmiPhonesToggle(true);
    //     }
    //     if (window.location.pathname==="/tv") {
    //         return setTvToggle(true);
    //     }
    //     if (window.location.pathname==="/laptops") {
    //         return setlaptopToggle(true);
    //     }
    //     if (window.location.pathname==="/lifestyle") {
    //         return setfitnessAndLifeStyleToggle(true);
    //     }
    //     if (window.location.pathname==="/home") {
    //         return sethomeToggle(true);
    //     }
    //     if (window.location.pathname==="/audio") {
    //         return setaudioToggle(true);
    //     }
    //     if (window.location.pathname==="/accessories") {
    //         return setaccessoriesToggle(true);
    //     }

    // }, [])


    return (
        <div className="navOptions">
            {miPhones && miPhones.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            ))}
            {redmiPhones && redmiPhones.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            )) }
            {tv && tv.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            ))}
            {laptop && laptop.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            )) }
            {fitnessAndLifeStyle && fitnessAndLifeStyle.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            )) }
            {home && home.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            ))}
            {audio && audio.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            )) }
            {accessories && accessories.map((item)=>(
                <NavCard name={item.name} price={item.price} image={item.image} key={item.key}/>
            )) }
            
        </div>
    )
}

export default NavOptios
