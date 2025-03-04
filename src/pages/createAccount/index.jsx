import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";

import { MdPersonOutline, MdEmail, MdLock } from "react-icons/md";
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
  TitleAccount,
  SubTitleAccount,
  BottomAccount,
  BottomLogin,
  BottomLink
} from "./styles";


const schema = yup
  .object({
    nome: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Email não é válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Este campo é obrigatório"),
  })
  .required();

const CreateAccount = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      nome: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      
      const response = await api.post("/users", formData);

      
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      } else {
        alert("Ocorreu um erro ao realizar o cadastro.");
      }
    } catch (error) {
      console.error("Erro na API:", error);
      alert("Erro ao tentar cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Colunm>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Colunm>
        <Colunm>
          <Wrapper>
            <TitleAccount>Comece agora grátis</TitleAccount>
            <SubTitleAccount>Crie sua conta e make the change._</SubTitleAccount>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPersonOutline />}
                errorMessage={errors?.nome?.message}
              />
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
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
            </Row>
            <BottomAccount>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</BottomAccount>
            <Row>
            <BottomLogin>Já tenho conta.</BottomLogin>
            <BottomLink href="/login">Fazer login</BottomLink>
            </Row>
          </Wrapper>
        </Colunm>
      </Container>
    </>
  );
};

export { CreateAccount };
