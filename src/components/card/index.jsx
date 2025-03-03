import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  Content,
  CardContainer,
  ImageBackground,
  UserPicture,
  UserInfo,
  PostInfo,
  HasInfo,
} from "./styles";


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://wallpaperaccess.com/full/1760900.jpg" alt="background" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/186056277?v=4" alt="profile" />
                <div>
                    <h4>Leonardo H Saturnino</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp dio do Global avanade <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 27
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
};

export { Card };
