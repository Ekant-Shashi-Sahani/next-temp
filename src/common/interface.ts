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
  error?: boolean;
  errorMessage?:string;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: string;
  error?: boolean;
  errorMessage?:string;

  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


export interface IPhoneNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?:string;

}
export interface IBlog {
  Image: string;
  Title: string;
  PostedDate?: string;
  Author: string;
  BriefDescription: string;
  Slug: string;
  [key: string]: any
}
export interface IBlogDetails {
  Image: string;
  BlogID: number;
  Title: string;
  Author: string;
  ImageAltText: string;
  PostedDate: string;
  BriefDescription: string;
  Description: string;
  Slug: string;
  [key: string]: any
}
export interface ICategoryProps {
  CategoryTypeID: number;
  UserID: number;
  ParentID:number;
  CategoryName: string;
  ImageAltText:string;
  UploadImage:string;
  BriefDescription:string;
  SliderBanner:string;
  BannerAltText:string;
  Slug: string;
  Active: string;
  DOC: string;
  [key: string]: any;

}
