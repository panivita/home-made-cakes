import React from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import "./booking-page.css";

const AddReservationForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="fields" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        ref={register({ minLength: 2, maxLength: 10, pattern: /^[A-Za-z]+$/i })}
      ></input>
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Email"
        ref={register({ required: true, validate: (input) => isEmail(input) })}
      ></input>
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        ref={register({ required: true, minLength: 8, maxLength: 8 })}
      ></input>
      <input
        type="number"
        name="number_of_guests"
        placeholder="Number of guests"
        ref={register({ required: true, max: 20, min: 1 })}
      ></input>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default AddReservationForm;
