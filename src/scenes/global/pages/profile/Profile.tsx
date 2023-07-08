import { TextField, Box, Stack, MenuItem, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import TextHeader from "../../../../components/TextHeader";
const Profile = () => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  type formReg = {
    firstName: string;
    lastName: string;
    email: string;
    number: number;
    role: string;
  };
  const form = useForm<formReg>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const currencies = [
    {
      label: "Admin",
      value: "Admin",
    },
    {
      label: "Manager",
      value: "Manager",
    },
    {
      label: "User",
      value: "User",
    },
  ];
  const submit = (data: formReg) => {
    console.log("done", data);
  };
  return (
    <>
      <TextHeader
        title="CREATE USER"
        subTitle="Create a New User Profile"
        isDashbord={false}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        component="form"
      >
        <Stack direction="row" gap={2}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName?.type == "pattern"
                ? errors.firstName.message
                : errors.firstName?.type == "required"
                ? "this field is required"
                : null
            }
            variant="filled"
            label="First Name"
            sx={{ flex: 1 }}
            {...register("firstName", {
              required: true,
              pattern: { value: /^[A-Za-z]+$/i, message: "invalid Name" },
              min: 3,
              max: 20,
            })}
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              errors.lastName?.type == "pattern"
                ? errors.lastName.message
                : errors.lastName?.type == "required"
                ? "this field is required"
                : null
            }
            variant="filled"
            label="Last Name"
            sx={{ flex: 1 }}
            {...register("lastName", {
              required: true,
              pattern: { value: /^[A-Za-z]+$/i, message: "invalid Name" },
              min: 3,
              max: 20,
            })}
          />
        </Stack>
        <TextField
          error={Boolean(errors.email)}
          helperText={
            errors.email?.type == "required"
              ? "Enter Your Email"
              : errors.email?.type == "pattern"
              ? errors.email.message
              : null
          }
          variant="filled"
          label="Email"
          sx={{ flex: 1 }}
          {...register("email", {
            required: true,
            pattern: {
              value: regEmail,
              message: "not valid email",
            },
          })}
        />
        <TextField
          variant="filled"
          error={Boolean(errors.number)}
          helperText={
            errors.number?.type == "pattern"
              ? errors.number.message
              : errors.number?.type == "required"
              ? "the field is required"
              : null
          }
          label="Contact Number"
          sx={{ flex: 1 }}
          {...register("number", {
            required: true,
            pattern: {
              value: phoneRegExp,
              message: "Number is not valid",
            },
          })}
        />
        <TextField variant="filled" label="Address 1" sx={{ flex: 1 }} />
        <TextField variant="filled" label="Address 2" sx={{ flex: 1 }} />
        <TextField
          select
          label="Role"
          variant="filled"
          defaultValue="Admin"
          {...register("role")}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            onClick={handleSubmit(submit)}
            type="submit"
            variant="contained"
          >
            Create New User
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
