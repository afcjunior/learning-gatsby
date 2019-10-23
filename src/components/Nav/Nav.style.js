import styled from "styled-components"

export const NavContainer = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    flex-direction: row;
    margin: 0;
    padding: 0;

    li {
      margin-right: 10px;
    }

    a {
      &:hover {
        border-bottom: 3px solid #c2392a;
      }
    }
    .active {
      border-bottom: 3px solid #c2392a;
    }
  }
`
