import React from 'react';
import { Button } from '../button';
import logo from '../../assets/images/logo-dio.png';

import { useNavigate } from 'react-router-dom';

import {
    Container,
    Row,
    Wrapper,
    HeaderImg,
    SearchInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles';

const Header = ({autenticaded}) => {
    
  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  const handleClickSignIn = () => {
    navigate('/login')
  }

  const handleCreateAc = () => {
    navigate('/account')
  }

  return (
    <Wrapper>
        <Container>
            <Row>
                <HeaderImg src={logo} alt="logo" onClick={handleClickLogo} />
                {autenticaded ? (
                <> 
                    <SearchInputContainer>
                    <Input  placeholder='Buscar...' />
                    </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}              
            </Row>
            <Row>
                {autenticaded ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/186056277?v=4" alt="profile"/>
                ) : (<>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickSignIn} />
                    <Button title="Cadastrar" onClick={handleCreateAc} />
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  );
}

export { Header };
