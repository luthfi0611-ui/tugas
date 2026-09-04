import React, { useState } from "react";
import ProfileDetail from "./ProfileDetail.jsx";
import Profile from "../reactrouter/Profile.jsx";
import NameUserContext from "./NameUserContext.jsx";

function Home() {
  const [name, setName] = React.useState("Fulan");

  return (
    <>
      <div>Home</div>
      <Profile />

      <NameUserContext.Provider value={{name, setName}}>
        <ProfileDetail />
      </NameUserContext.Provider>
    </>
  );
}

export default Home;
