import { useNavigate } from "react-router-dom";
import Banner from '../../assets/images/banner.png'

import { Button } from "../../components/button"
import { Header} from "../../components/header"

import {
  Container,
  Title,
  TitleHighlight,
  TextContent 
} from '../home/styles'

const Home = () => {

  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora
          </Title>
            <TextContent>
              domine as tecnologias utilizadas pelas empresas mais inovadoras do Mundo e encare seu novo
                desafio profissional. evoluindo em comunidade com os melhores experts.
            </TextContent>
              <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>

        </div>
        <div>
          <img src={Banner} alt="banner" />
        </div>
      </Container>
    </>
  );
};

export { Home };
