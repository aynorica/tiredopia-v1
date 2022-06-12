import React, {ReactNode} from "react";
import './specialBtn.component.css';

export interface SpecialBtnInput {
    link: string,
    text:string,
    fill: boolean,
    icon?: ReactNode,
    scale: number
}

export const SpecialBtnComponent:React.FC<SpecialBtnInput> = (data:SpecialBtnInput) => {
    const { text, link, icon, fill, scale } = data;
    const bg:string = `${fill ? "special-btn-main-bg-green" : "special-btn-main-bg-transparent"}`
    return (
        <>
            <a href={link} className="special-btn-component special-btn-d-hidden" style={{transform: `scale(${scale})`}}>
                <div className="special-btn-center">
                    <button className={`special-btn-main ${bg}`}>
                    <span className="special-btn-logo">
                        {icon}
                    </span>
                        <svg width="140px" height="48px" viewBox="0 0 140 48" className="border">
                            <polyline points="140,1 140,47 1,47 1,1 140,1" className="bg-line"/>
                            <polyline points="140,1 140,47 1,47 1,1 140,1" className="hl-line"/>
                        </svg>
                        <span className="special-btn-text">{text}</span>
                    </button>
                </div>
            </a>
            <a href={link} className="special-btn-component special-btn-d-responsive" style={{transform: `scale(${scale})`}}>
                <div className="special-btn-center">
                    <button className={`special-btn-main ${bg}`}>
                    <span className="special-btn-logo">
                        {icon}
                    </span>
                        <svg width="180px" height="48px" viewBox="0 0 180 48" className="border">
                            <polyline points="179,1 179,47 1,47 1,1 179,1" className="bg-line"/>
                            <polyline points="179,1 179,47 1,47 1,1 179,1" className="hl-line"/>
                        </svg>
                        <span className="special-btn-text">{text}</span>
                    </button>
                </div>
            </a>
        </>
    )
}