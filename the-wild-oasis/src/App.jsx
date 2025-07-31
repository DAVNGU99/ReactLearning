import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2 rem;
`;

function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
    </div>
  );
}

export default App;
