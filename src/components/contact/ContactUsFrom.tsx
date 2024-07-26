// "use client";

// import TextArea from "@/common/TextArea/TextArea";
// import TextInput from "@/common/TextInput/TextInput";
// import React, { useState } from "react";
// import { useFormik } from "formik";
// import Button from "@/common/Button/Button";
// import { contactInitialValue } from "@/validationSchemas/InitialValue";
// import contactValidationSchema from "@/validationSchemas/conatctValidationSchemas";
// import PhoneNumber from "@/common/PhoneNumber/PhoneNumber";
// import axios from "axios";

// const ContactUsForm: React.FC = () => {
//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: contactInitialValue,
//     validationSchema: contactValidationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);

//       try {
//         const response = await axios.post(
//           "http://10.0.0.10:4152/api/hexa/v1/contacts",
//           values, // Send form values directly
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.status === 200) {
//           console.log("Response Data:", response.data);
//           formik.resetForm();
//         } else {
//           throw new Error(
//             response.data.message ||
//               "Something went wrong while sending the message."
//           );
//         }
//       } catch (error: any) {
//         // Log the error details
//         console.error("Error Details:", {
//           message: error.message,
//           response: error.response
//             ? {
//                 status: error.response.status,
//                 data: error.response.data,
//               }
//             : "No response data",
//           config: error.config,
//           stack: error.stack,
//         });
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <main className="flex w-full flex-col justify-center m-auto bg-white px-6 py-24 sm:py-32 lg:px-8 max-w-[773px]">
//       <form onSubmit={formik.handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-2 gap-2">
//           <TextInput
//             label="First Name"
//             name="FirstName"
//             value={formik.values.FirstName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Type Something"
//             error={Boolean(formik.touched.FirstName && formik.errors.FirstName)}
//             errorMessage={formik.errors.FirstName}
//           />
//           <TextInput
//             label="Last Name"
//             name="LastName"
//             value={formik.values.LastName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="LastName Something"
//             error={Boolean(formik.touched.LastName && formik.errors.LastName)}
//             errorMessage={formik.errors.LastName}
//           />
//         </div>
//         <TextInput
//           label="Enter Email"
//           name="Email"
//           value={formik.values.Email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           placeholder="JoneDoe@gmail.com"
//           error={Boolean(formik.touched.Email && formik.errors.Email)}
//           errorMessage={formik.errors.Email}
//         />
//         <PhoneNumber
//           label="Phone number"
//           name="PhoneNumber"
//           value={formik.values.PhoneNumber}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           placeholder="(91) -(000-000-00)"
//           error={Boolean(
//             formik.touched.PhoneNumber && formik.errors.PhoneNumber
//           )}
//           errorMessage={formik.errors.PhoneNumber}
//         />
//         <div className="grid grid-cols-2 gap-2">
//           <TextInput
//             label="Company"
//             name="Company"
//             value={formik.values.Company}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Company name .."
//             error={Boolean(formik.touched.Company && formik.errors.Company)}
//             errorMessage={formik.errors.Company}
//           />
//           <TextInput
//             label="City"
//             name="City"
//             value={formik.values.City}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Mumbai"
//             error={Boolean(formik.touched.City && formik.errors.City)}
//             errorMessage={formik.errors.City}
//           />
//         </div>
//         <TextArea
//           label="Send Message"
//           name="Message"
//           value={formik.values.Message}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           placeholder="Type Something......"
//           error={Boolean(formik.touched.Message && formik.errors.Message)}
//           errorMessage={formik.errors.Message}
//         />
//         <div className="flex justify-center mt-10">
//           <Button
//             type="submit"
//             loading={loading}
//             variant="primary"
//             size="medium"
//           >
//             {loading ? "Sending..." : "Let's Talk"}
//           </Button>
//         </div>
//       </form>
//     </main>
//   );
// };

// export default ContactUsForm;
"use client"
import { useState } from 'react';
import axios from 'axios';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Company: '',
    City: '',
    Message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    console.log("I am claling")

    try {
      const response = await axios.post('http://10.0.0.10:4152/api/hexa/v1/contacts', formData);
      alert('Message sent successfully!');
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Company: '',
        City: '',
        Message: ''
      });
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          id="FirstName"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          id="LastName"
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="PhoneNumber"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Company" className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          id="Company"
          name="Company"
          value={formData.Company}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="City" className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          id="City"
          name="City"
          value={formData.City}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="Message"
          name="Message"
          value={formData.Message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
