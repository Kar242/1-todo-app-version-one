import React, { useState } from "react";
import { TextField, Button, Grid, createSvgIcon } from "@mui/material";
import { getFormData } from "../store/AppStore";
import { useDispatch } from "react-redux";
import { formActions } from "../store/form-data-reducer";
import { todoActions } from "../store/Todo-Reducer";

// const PlusIcon = createSvgIcon(
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12 4.5v15m7.5-7.5h-15"
//     />
//   </svg>,
//   "Plus"
// );

function validateFormData(errors, formData) {
  const errorLength = Object.values(errors).some((error) => error.length > 0);
  const formDataLength = Object.values(formData).some(
    (value) => value?.length === 0
  );
  return errorLength || formDataLength;
}

function FormComponent({ onNewItem }) {
  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    text: "",
    myname: "",
  });
  const formData = getFormData((state) => state.formData);
  const todoItems = getFormData((state) => state.todoData.todoitem);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "email") {
      dispatch(formActions.setEmail({ email: e.target.value }));
      const emailRegex = /^\S+@\S+\.\S+$/;
      error = !emailRegex.test(value) ? "Invalid email format" : "";
    } else if (name === "phoneNumber") {
      dispatch(formActions.setPhone({ phone: e.target.value }));
      const phoneRegex = /^\d{10}$/;
      error = !phoneRegex.test(value) ? "Invalid phone number" : "";
    } else if (name === "text") {
      dispatch(formActions.setText({ text: e.target.value }));
      if (value.length < 5 || value.length > 254) {
        error = "Input must be between 5 and 254 characters.";
      } else {
        setErrors("");
      }
    } else if (name === "myname") {
      dispatch(formActions.setName({ name: e.target.value }));
      const mynameRegex = /^[A-Z][a-z]*$/;
      error = !mynameRegex.test(value) ? "Invalid Name Format" : "";
      if (error === "") {
        const isNameExists = todoItems.some(
          (obj) => obj.name === e.target.value
        );
        if (isNameExists) {
          error = "Name Already Exists";
        }
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      todoActions.setTodoItem([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          text: formData.text,
        },
      ])
    );
    dispatch(formActions.resetForm());
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Enter text"
            name="text"
            className="Text"
            value={formData.text}
            onChange={handleInputChange}
            error={!!errors.text}
            helperText={errors.text}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enter name"
            name="myname"
            className="Name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.myname}
            helperText={errors.myname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            className="Email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            className="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={validateFormData(errors, formData)}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FormComponent;
