import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";

import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

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


const schema = yup
  .object({
    email: yup.string().email('Email não é válido').required('Este campo é obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Este campo é obrigatório'),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

 
  const onSubmit = async (formData) => {
    try {
      
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      
      
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro na API:', error);
      alert('Erro, tente novamente');
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="email" 
                control={control} 
                placeholder="E-mail" 
                leftIcon={<MdEmail />} 
                errorMessage={errors?.email?.message}
              />
              <Input 
                name="password" 
                control={control} 
                placeholder="Senha" 
                type="password" 
                leftIcon={<MdLock />} 
                errorMessage={errors?.password?.message}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <ForgottText>Esqueci minha senha</ForgottText>
              <CreateText href="/account">Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Colunm>
      </Container>
    </>
  );
};

export { Login };
