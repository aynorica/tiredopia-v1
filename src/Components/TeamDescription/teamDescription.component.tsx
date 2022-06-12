import React from 'react';
import './teamDescription.component.css';


export const TeamDescriptionHeader:React.FC = () => {
    return (
        <div className="team-desc-header-component">
            MEET OUR TEAM
        </div>
    )
}

export const TeamDescriptionSubHeader:React.FC = () => {
    return (
        <div className="team-desc-sub-header-component">
            Who We Are
        </div>
    )
}

export const TeamDescriptionText:React.FC = () => {
    return (
        <div className="team-desc-text-component">
            Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.
        </div>
    )
}

export const TeamDescriptionBtn:React.FC<{direction:boolean, active:boolean}> = (data:{direction:boolean, active:boolean}) => {
    const { direction, active } = data;
    return (
        <div className={`svg-hover-effect ${active ? "svg-hover-effect-active" : null}`}>
            <svg className="team-desc-btn-component">
                <polyline points="0,50 0,0 50,0 50,50 0,50"/>
                <svg>
                    {
                        direction ?
                            <polyline points="13,10 38,25 13,40"/>
                            :
                            <polyline points="37,10 12,25 37,40"/>
                    }
                </svg>
            </svg>
        </div>
    )
}