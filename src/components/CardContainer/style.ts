import styled from "@emotion/styled"

const CardContainerWrapper = styled.div`
  padding: 16px;
  background-color: #0005;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow: hidden;
  width: 100%;

  .content {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export default CardContainerWrapper