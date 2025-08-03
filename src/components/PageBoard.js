import styled from "styled-components";
import Box from "./Box"

const PageBoard = styled(Box)`
  width: 100%;
  border-color: #919395;
  background: #e2e6ea;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.5rem;
`;

export default PageBoard;