import React from "react";
import MainContainer from "../components/main-container";
import Navbar from "@/components/navbar";
import { ModeToggle } from "@/components/mode-toggle";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Navbar />
      <ModeToggle />
    </MainContainer>
  );
};

export default Home;
