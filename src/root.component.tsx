import { ContainerFull, Container } from "@koin/mfe-koral-util-ui"

export default function Root(props) {
  return (
    <ContainerFull background="background-color" height="100vh">
      <Container height="100%" position="relative">
        <h1>Menu project</h1>
      </Container>
    </ContainerFull>
  );
}
