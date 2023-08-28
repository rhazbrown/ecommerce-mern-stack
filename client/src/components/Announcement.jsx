import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: Gold;
  color: Black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Exciting Deal! Free Shipping on Orders Over $80</Container>;
};

export default Announcement;
