import styled from "styled-components";

const Title = styled.header`
  display: flex;
  justify-content: center;

  margin: 20px;

  font-size: 30px;
`;

function Header() {
  return <Title>To the world! 여긴 NCT! 제가 누구일까요?</Title>;
}

export default Header;
