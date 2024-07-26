import React from 'react'
import './Button.css'
interface ButtonProps{
  type:"button"|"submit"|"reset";
  loading?:boolean;
  variant:"primary"|"secondary";
  size:"small"|"medium"|"large";
  onClick?:()=>void;
  children:React.ReactNode;

}

const Button:React.FC<ButtonProps>=({type,loading,variant,size,onClick,children})=> {
  return (
    <button type={type}
    className={`btn ${variant} ${size} ${loading ? 'loading' : ''}`}
      onClick={onClick}
      disabled={loading}

    >
      {loading?<span className="spinner"></span>:children}
    </button>
  )
}

export default Button