import React from "react";
import CardLayout from "../../components/card/card-layout";
import HeaderLayout from '../../components/header/header-layout';
import MainLayout from "../../components/main/main-layout";
import CardHeader from "../card/card-header/card-header";
import CardMessage from "../card/card-message/card-message";
import Menu from "../menu/menu";

const Home = () => {

    return (
      <>
        <HeaderLayout>
          <Menu/>
        </HeaderLayout>
        <MainLayout>
          <CardLayout>
            <CardHeader/>
            <CardMessage/>
          </CardLayout>
        </MainLayout>
      </>
    );
};

export default Home;