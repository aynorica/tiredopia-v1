import React from "react";
import './pageTitle.component.css';

export interface PageTitleComponentInput {
    text:string
}

export const PageTitleComponent:React.FC<PageTitleComponentInput> = (data:PageTitleComponentInput) => {
    return (
        <div className="bg-nav-scroll">
            <h1 className="page-title-component">
                {data.text}
            </h1>
        </div>
    )
}