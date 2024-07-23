"use client";

import TextArea from "@/common/TextArea/TextArea";
import TextInput from "@/common/TextInput/TextInput";
import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@/common/Button/Button";
import { contactInitialValue } from "@/validationSchemas/InitialValue";
import contactValidationSchema from "@/validationSchemas/conatctValidationSchemas";
import PhoneNumber from "@/common/PhoneNumber/PhoneNumber";

const ContactUsForm: React.FC = () => {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState<boolean | null>(null); // Manage error state
  const [success, setSuccess] = useState<string | null>(null); // Manage success state

  const formik = useFormik({
    initialValues: contactInitialValue,
    validationSchema: contactValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const response = await fetch(
          "https://api.prestoenviro.com/api/presto/v1/contactus",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          throw new Error("Something went wrong while sending the message.");
        }

        const result = await response.json();
        setSuccess("Your message has been sent successfully!");
        formik.resetForm();
      } catch (error: any) {
        setError(error.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    },
  });

  console.log("values",formik.values,)


  return (
    <main className="flex w-full flex-col justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <TextInput
          label="Enter Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Type Something"
          error={Boolean(formik.touched.name && formik.errors.name)}
        />
           <TextInput
          label="Enter Type"
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Type Something"
          error={Boolean(formik.touched.type && formik.errors.type)}
        />
        <TextInput
          label="Enter Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="JoneDoe@gmail.com"
          error={Boolean(formik.touched.email && formik.errors.email)}
        />
        <PhoneNumber
          label="Phone number"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="(91) -(000-000-00)"
          error={Boolean(formik.touched.phone && formik.errors.phone)}
        />
        <TextArea
          label="Send Message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Type Something......"
          error={Boolean(formik.touched.message && formik.errors.message)}
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="flex justify-center mt-10">
          <Button
            type="submit"
            loading={loading}
            variant="primary"
            size="medium"
          >
            {loading ? "Sending..." : "Let's Talk"}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default ContactUsForm;
