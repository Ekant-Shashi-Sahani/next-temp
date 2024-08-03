import React from "react";
import { IconType } from "react-icons";
export interface TLink{
    url:string;
    title:string;
    active?:boolean;
    icon?:IconType;
}
export interface TBreadCrumb{
    pageTitle:string;
    pageDescription?:string |React.JSX.Element;
    links:Array<TLink>;
    image?:any;
    backgroundColor?:string;
    textColor?:string;
    iconColor?:string;
}