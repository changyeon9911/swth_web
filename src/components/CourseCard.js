import styled from "styled-components";
import { BaseBox } from "./shared";

const Container = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
`;

function CourseCard({ children }) {
  return <Container>{children}</Container>;
}
export default CourseCard;