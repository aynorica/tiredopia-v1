import React, {ReactNode} from "react";
import './specialBtn.component.css';
import './specialBtnBorder.component.css'

export interface SpecialBtnInput {
    link: string,
    text:string,
    fill: boolean,
    icon?: ReactNode,
    func?: any,
    scale: number
}

export const SpecialBtnComponent:React.FC<SpecialBtnInput> = (data:SpecialBtnInput) => {
    const { text, link, icon, fill, scale, func } = data;
    const bg:string = `${fill ? "special-btn-main-bg-green" : "special-btn-main-bg-transparent"}`
    return (
        <div onClick={() => func()}>
            <a href={link} className="special-btn-component special-btn-d-hidden" style={{transform: `scale(${scale})`}}>
                <div className="special-btn-center">
                    <div id={"b-h-1"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-h-2"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-h-3"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-h-4"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-v-1"} className="special-btn-custom-border-vertical"></div>
                    <div id={"b-v-2"} className="special-btn-custom-border-vertical"></div>
                    <div id={"b-v-3"} className="special-btn-custom-border-vertical"></div>
                    <div id={"b-v-4"} className="special-btn-custom-border-vertical"></div>
                    <button className={`special-btn-main ${bg}`}>
                        <span className="special-btn-logo">
                            {icon}
                        </span>
                        <span className={`special-btn-text`}>{text}</span>
                    </button>
                </div>
            </a>
            <a href={link} className="special-btn-component special-btn-d-responsive" style={{transform: `scale(${scale})`}}>
                <div className="special-btn-center">
                    <div id={"b-h-1"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-h-2"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-h-3"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-h-4"} className="special-btn-custom-border-horizontal"></div>
                    <div id={"b-v-1"} className="special-btn-custom-border-vertical"></div>
                    <div id={"b-v-2"} className="special-btn-custom-border-vertical"></div>
                    <div id={"b-v-3"} className="special-btn-custom-border-vertical"></div>
                    <div id={"b-v-4"} className="special-btn-custom-border-vertical"></div>
                    <button className={`special-btn-main ${bg}`}>
                        <span className="special-btn-logo">
                        {icon}
                        </span>
                        <span className="special-btn-text">{text}</span>
                    </button>
                </div>
            </a>
        </div>
    )
}