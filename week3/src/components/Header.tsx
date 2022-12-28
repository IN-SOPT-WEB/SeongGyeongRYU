import styled from "styled-components";

function Header() {
  return <Title>To the world! 여긴 NCT! 제가 누구일까요?</Title>;
}

const Title = styled.header`
  display: flex;
  justify-content: center;

  margin: 2rem;

  font-size: 2.8rem;
`;

export default Header;
