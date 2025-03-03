import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from 'react-icons/md';


import {
  Container,
  Wrapper,
  Colunm,
  Row,
  Title,
  TitleLogin,
  SubTitleLogin,
  ForgottText,
  CreateText,
} from "../login/styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Colunm>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Colunm>
        <Colunm>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
          <form>
            <Input placeholder="E-mail" letfIcon={<MdEmail />} />
            <Input placeholder="Senha" type="password" letfIcon={<MdLock />} />
            <Button title="Entrar"  variant="secondary"/>
          </form>
          <Row>
            <ForgottText>Esqueci minha senha</ForgottText>
            <CreateText>Criar conta</CreateText>
          </Row>
        </Wrapper>
        </Colunm>
      </Container>
    </>
  );
};

export { Login };
