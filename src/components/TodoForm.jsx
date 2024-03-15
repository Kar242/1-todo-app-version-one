import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, createSvgIcon } from "@mui/material";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

function FormComponent({ onNewItem }) {
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({ email: "", phoneNumber: "" });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "email") {
      setUserEmail(e.target.value);
      const emailRegex = /^\S+@\S+\.\S+$/;
      error = !emailRegex.test(value) ? "Invalid email format" : "";
    } else if (name === "phoneNumber") {
      setPhoneNumber(e.target.value);
      const phoneRegex = /^\d{10}$/;
      error = !phoneRegex.test(value) ? "Invalid phone number" : "";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewItem(userEmail, phoneNumber);
    setPhoneNumber("");
    setUserEmail("");
    setIsDisabled(true);
  };

  useEffect(() => {
    const status =
      userEmail.length === 0 ||
      phoneNumber.length === 0 ||
      errors.email.length !== 0 ||
      errors.phoneNumber.length !== 0;
    if (status) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [userEmail, phoneNumber, errors]);

 

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            className="Email"
            value={userEmail}
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
            value={phoneNumber}
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
            disabled={isDisabled}
          >
            <PlusIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FormComponent;
