import React from "react";
import './contactTextArea.component.css';

export interface TextAreaComponentInput {
    searchFunction:any,
    placeholder:string
}

export const TextAreaComponent:React.FC<TextAreaComponentInput> = (data:TextAreaComponentInput) => {
    const { searchFunction, placeholder } = data;
    return (
        <div className="text-area-component">
            <textarea placeholder={placeholder} onChange={(e) => searchFunction(e.target.value)} maxLength={250}/>
        </div>
    )
}