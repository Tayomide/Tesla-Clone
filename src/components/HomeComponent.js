import styled from "styled-components"

export const HomeComponent = () => {
  return (
    <HomeComponentContainer>
        <picture>
            <source media="(min-width: 600px)" srcSet="/M3-Homepage-Desktop.jpg"/>
            <source srcSet="/M3-Homepage-Mobile.jpg" />
            <img src="small.jpg" alt="The president giving an award." />
        </picture>
    </HomeComponentContainer>
  )
}

const HomeComponentContainer = styled.div``
