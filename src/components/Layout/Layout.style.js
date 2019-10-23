import styled from "styled-components"

export const Container = styled.div`
  margin: 0 20px;
  width: calc(100% - 40px);
  min-height: calc(100vh - 20px);
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  font: 1em sans-serif;
  color: #222222;

  a {
    color: #c2392a;
    text-decoration: none;

    &:hover {
      border-bottom: 3px solid #c2392a;
    }
  }

  .content {
    flex-grow: 1;
  }
`
