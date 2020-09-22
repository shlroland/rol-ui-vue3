<template>
  <Container>
    <Header>Header</Header>
    <Main>Main</Main>
  </Container>

  <Container>
    <Header>Header</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Container>

  <Container>
    <Aside width="200px">Aside</Aside>
    <Main>Main</Main>
  </Container>

  <Container>
    <Header>Header</Header>
    <Container>
      <Aside width="200px">Aside</Aside>
      <Main>Main</Main>
    </Container>
  </Container>

  <Container>
    <Header>Header</Header>
    <Container>
      <Aside width="200px">Aside</Aside>
      <Container>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Container>
    </Container>
  </Container>

  <Container>
    <Aside width="200px">Aside</Aside>
    <Container>
      <Header>Header</Header>
      <Main>Main</Main>
    </Container>
  </Container>

  <Container>
    <Aside width="200px">Aside</Aside>
    <Container>
      <Header>Header</Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Container>
  </Container>
</template>

<script lang="ts">
import { Container, Header, Main, Footer, Aside } from '@rol-ui/layout'

export default {
  components: {
    Container,
    Header,
    Main,
    Footer,
    Aside,
  },
}
</script>

<style>
.rol-header,
.rol-footer {
  background-color: hsl(0, 0%, 71%);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.rol-aside {
  background-color: hsl(0, 0%, 86%);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.rol-main {
  background-color:hsl(0, 0%, 93%) ;
  color: #333;
  text-align: center;
  line-height: 160px;
}

#root > .rol-container {
  margin-bottom: 40px;
}

.rol-container:nth-child(5) .rol-aside,
.rol-container:nth-child(6) .rol-aside {
  line-height: 260px;
}

.rol-container:nth-child(7) .rol-aside {
  line-height: 320px;
}
</style>
