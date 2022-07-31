import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  border: 1px solid red;
  background-color: rgb(56, 74, 85);
  display: flex;
  width: 100%;
  flex-direction: column;
  header {
    border: 1px solid red;
    height: 100px;
  }
  main {
    flex-grow: 1;
    border: 1px solid green;
  }
  footer {
    border: 1px solid red;
    height: 100px;

  }
`;
