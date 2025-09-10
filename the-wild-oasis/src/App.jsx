import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  //background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horiozontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>

              <Button variation="primary" size="medium">
                Check in
              </Button>
              <Button size="small" variation="secondary">
                Check out
              </Button>
            </div>
          </Row>
          <Heading as="h3">Form</Heading>
          <Row>
            <form type="vertical">
              <Input type="number" placeholder="hello world" />

              <Input type="number" placeholder="hello world" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
