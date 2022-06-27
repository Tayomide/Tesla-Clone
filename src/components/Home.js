import styled from "styled-components"
import { Link } from "react-router-dom"
import { TeslaButton } from "./TeslaButton"

export const HomeComponent = ({mobileImage, desktopImage, altText, title, leftButtonText, rightButtonText, description, buttonBackground}) => {
  return (
    <HomeComponentContainer>
        <picture>
            <source media="(min-width: 600px)" srcSet={desktopImage}/>
            <source srcSet={mobileImage} />
            <img src={desktopImage} alt={altText} />
        </picture>
        <HomeStatic>
            <h1 className={buttonBackground ? "bigger" : "normal" }>{title}</h1>
            {
                typeof description === "string" ? <p>{description}</p> : <p>Order Online for <Link to="/">touchless delivery</Link></p>
            }
            <ul>
                { leftButtonText && 
                    <li>
                        <TeslaButton 
                            content = { leftButtonText}
                            background = {buttonBackground ? buttonBackground : "#171a20cc"}
                            border = "transparent"
                            color = "#fff"
                        />
                    </li>
                }
                { rightButtonText &&
                    <li>
                        <TeslaButton 
                                content = {rightButtonText}
                                background = "#f4f4f4a6"
                                border = "transparent"
                                color = "#393c41"
                        />
                    </li>

                }
            </ul>
            <p></p>
            <button></button>
        </HomeStatic>
    </HomeComponentContainer>
  )
}

const HomeComponentContainer = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    picture{
        width: 100%;
        height: 100%;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

const HomeStatic = styled.div`
    position: sticky;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    align-items: center;
    h1{
        margin-top: calc(18vh - 52px);
    }
    h1.bigger{
        font-size: 36px;
        letter-spacing: 1px;
    }
    h1 + p{
        flex: 1;
        padding: 6px 24px 0 24px;
        a{
            text-transform: capitalize;
            border-bottom: 1px solid black;
        }
    }
    ul{
        padding: 16px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        li{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: row;
        }
    }
    @media only screen and (min-width: 600px){
        ul{
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 24px;
            li{
                width: 264px;
            }
        }
    }
    ul + p {
        font-size: 14px;
        line-height: 18px;
        height: 30px;
        width: 100%;
        padding: 0 24px 12px 24px;
    }
    button {
        height: 24px;
        width: 24px;
    }
`
