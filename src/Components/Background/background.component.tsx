import React, {useState} from "react";
import bg from '../../Assets/Backgrounds/wp7632973.webp'
import './background.component.css';


export const BackgroundComponent:React.FC = () => {
    const [size, setSize] = useState(window.innerHeight);
    const setting = () => setSize(window.innerHeight);
    window.addEventListener("resize", setting);
    return (
        <div className="background" style={{minHeight: `${size + 100}px`}} ></div>
    )
}