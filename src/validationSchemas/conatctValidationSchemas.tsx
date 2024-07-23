import  * as Yup from 'yup'
const contactValidationSchema=Yup.object({
    name:Yup.string()
    .required("Name is required!")
    .min(2,"Name must be at least 2 characters"),
    type:Yup.string()
    .required("type is required!")
    .min(2,"type must be at least 2 characters"),
    email:Yup.string()
    .required("Invalid email address"),
    phone:Yup.string().required("").matches(/^\d{10}$/,"Phone number must be 10 digits "),
    message:Yup.string()
    .required("Message is required")
    .min(10,"Message must be at least 10 characters")
    
})
export default contactValidationSchema
