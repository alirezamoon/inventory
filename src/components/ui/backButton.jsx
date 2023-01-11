import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { back } from "./../../constants"

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      position="absolute"
      top="0"
      transform="translateY(-50%)"
      bgColor="#fff"
      boxShadow="0 0 5px #eee"
      colorScheme="blue"
      variant="outline"
      onClick={() => navigate(-1)}
      fontWeight={400}
    >
      {back}
    </Button>
  )
}

export default BackButton
