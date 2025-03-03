import React from 'react';
import { Button } from '../button';
import logo from '../../assets/images/logo-dio.png';

import {
    Container,
    Row,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles';

const Header = ({autenticaded}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo" />
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
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  );
}

export { Header };
