import {  baseUrlImg } from "../server-base"

export const getImageUrl=(endpoint:string,type:string)=>{
    return `${baseUrlImg}/${type}/${endpoint}`

}