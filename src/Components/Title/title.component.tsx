import React from "react";
import './title.component.css';

export interface TitleComponent {
    text:string
}

export const TitleComponent:React.FC<TitleComponent> = (data:TitleComponent) => {
    const { text } = data;
    return (
        <div className="title-component">
            {text}
        </div>
    )
}