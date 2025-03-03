
import { Header} from "../../components/header"
import { Card } from "../../components/card"

import {
  Container,
  Title,
  TitleHighlight,
  TextContent 
} from '../feed/styles'

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
    </>
  );
};

export { Feed };
