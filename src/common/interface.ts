import { StaticImageData } from "next/image";
import { ChangeEvent, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface IProduct {
  UploadImage: string;
  OgTitle: string;
  CategoryName: string;
  BriefDescription: string;
  Description: string;
  ImageAltText: string;
}

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  error?:boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: string;
  error?:boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


export interface IPhoneNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string ;
  error?:boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IBlog {
  Image: string ;
  Title: string;
  PostedDate?: string;
  Author: string;
  BriefDescription: string;
  Slug:string;
  [key:string]:any
}
export interface IBlogDetails{
  Image: string ;
  BlogID: number;
  Title: string;
  Author: string;
  ImageAltText: string;
  PostedDate: string;
  BriefDescription: string;
  Description: string;
  Slug: string;
  [key:string]:any
}