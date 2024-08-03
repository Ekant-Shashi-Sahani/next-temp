"use client"
export default function MyButton({children}:{children:React.ReactNode}) {
  return <button className="bg-blue-500 py-4 px-4 m-5 rounded-md" onClick={() => console.log("Hello World")}>{children}</button>;
}