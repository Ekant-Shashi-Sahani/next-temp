import * as Yup from "yup";

const contactSchema = Yup.object({
  FirstName: Yup.string()
    .required("First Name is required!")
    .min(3, "First Name must be at least 3 characters"),
  LastName: Yup.string()
    .required("Last Name is required!")
    .min(3, "Last Name must be at least 3 characters"),
  Company: Yup.string()
    .required("Company is required!")
    .min(3, "Company must be at least 3 characters"),
  City: Yup.string()
    .required("City is required!")
    .min(3, "City must be at least 3 characters"),
  Email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required"),
  PhoneNumber: Yup.number()
    .typeError("Phone number must be number")
    .positive("Phone number cannot be negative")
    .integer("Phone number must be an integer")
    .min(1000000000, "Phone number must be exactly 10 digits")
    .max(9999999999, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  Location: Yup.string().required("Location is required"),
  Message: Yup.string().required("Message is required"),
});
export default contactSchema;
