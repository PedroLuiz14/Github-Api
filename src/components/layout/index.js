import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({Children}) => {
  return (
    <S.WrapperLayout>
      <Header/>
     {Children}
    </S.WrapperLayout>
  );
};

export default Layout;