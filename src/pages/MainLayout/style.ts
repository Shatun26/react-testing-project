import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  background-color: #afd7ed;
  display: flex;
  width: 100%;
  flex-direction: column;
  header {
    height: 100px;
    border-bottom: 1px solid;
    flex-shrink: 0;
  }
  main {
    flex-grow: 1;
    border-bottom: 1px solid;
  }
  footer {
    height: 100px;
    flex-shrink: 0;

  }
`;
