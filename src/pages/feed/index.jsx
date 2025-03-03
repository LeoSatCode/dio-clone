import { Header } from "../../components/header";
import { Card } from "../../components/card";

import { Container, Column, Title, TitleHighlight } from "../feed/styles";
import { UserInfo } from "../../components/userinfo";

const Feed = () => {
  return (
    <>
      <Header autenticaded={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />  
        </Column>
        <Column flex={1}>
        <TitleHighlight># RANKING 5 TOP da SEMANA</TitleHighlight>
        <UserInfo
          percentual={80}
          name="Leonardo H Saturnino"
          image="https://avatars.githubusercontent.com/u/186056277?v=4"
        />
        <UserInfo
          percentual={65}
          name="Leonardo H Saturnino"
          image="https://avatars.githubusercontent.com/u/186056277?v=4"
        />
        <UserInfo
          percentual={50}
          name="Leonardo H Saturnino"
          image="https://avatars.githubusercontent.com/u/186056277?v=4"
        />
        <UserInfo
          percentual={45}
          name="Leonardo H Saturnino"
          image="https://avatars.githubusercontent.com/u/186056277?v=4"
        />
        <UserInfo
          percentual={30}
          name="Leonardo H Saturnino"
          image="https://avatars.githubusercontent.com/u/186056277?v=4"
        />
        </Column>
        
      </Container>
    </>
  );
};

export { Feed };
