import styled from "styled-components"
import { Link } from "react-router-dom"

export const HomeComponent = () => {
  return (
    <HomeComponentContainer>
        <picture>
            <source media="(min-width: 600px)" srcSet="/M3-Homepage-Desktop.jpg"/>
            <source srcSet="/M3-Homepage-Mobile.jpg" />
            <img src="small.jpg" alt="The president giving an award." />
        </picture>
        <HomeStatic>
            <h1>Model 3</h1>
            <p>Order Online for <Link to="/">Touchless Delivery</Link></p>
            <ul>
                <li>
                    <Link to="/">Custom Order</Link>
                </li>
                <li>
                    <Link to="/">Existing Inventory</Link>
                </li>
            </ul>
            <p></p>
            <button></button>
        </HomeStatic>
    </HomeComponentContainer>
  )
}

const HomeComponentContainer = styled.div``
