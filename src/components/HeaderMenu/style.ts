import styled from "@emotion/styled"

const HeaderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #0005;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 16px;

  nav {
    ul {
      display: flex;
      gap: 16px;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: #237bda;
        }
      }
    }
  }
`

export default HeaderMenuWrapper