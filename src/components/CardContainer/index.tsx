import CardContainerWrapper from "./style"

interface CardContainerProps {
  children: React.ReactNode
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <CardContainerWrapper>
      {children}
    </CardContainerWrapper>
  )
}

export default CardContainer