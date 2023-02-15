import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user_.value);
  const { name, email, age, company, role, salary } = user;

  // Getting the value from a different slice !
  const theme_color = useSelector((state) => state.theme.value);
  console.log(theme_color);
  return (
    <>
      <div style={{ color: theme_color }}>
        <h1>Profile Page</h1>
        <p>Name : {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Company: {company}</p>
        <p>Role: {role}</p>
        <p>Salary: {salary}</p>
      </div>
    </>
  );
};

export default Profile;
