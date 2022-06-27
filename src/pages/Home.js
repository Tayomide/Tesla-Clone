import styled from "styled-components"
import { HomeComponent } from "../components/Home"

export const Home = () => {
  return (
    <HomeContainer>
        <HomeComponent
          mobileImage = "/M3-Homepage-Mobile.jpg"
          desktopImage = "/M3-Homepage-Desktop.jpg"
          altText = "Model 3"
          title = "Model 3"
        />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`

`