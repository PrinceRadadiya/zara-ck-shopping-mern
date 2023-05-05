import React from "react";
import Header from "../Header/Header";
import Main from "../section1/Main";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Sextion4/Section4";
import Section5 from "../Section5/Section5";
import Section01 from "../Section01/Section01";
import Fotter from "../Footer/Fotter";
import Shoppingzara from "../SectionShopping/Shoppingzara";

const Firstheader = () => {
  return (
    <div>
      <Header />

      <Main />
      <Section01 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Shoppingzara />
      <Fotter />
    </div>
  );
};

export default Firstheader;
