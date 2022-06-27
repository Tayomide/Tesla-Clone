import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Navbar = () => {
  return (
    <NavbarContainer>
        <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="#171a20"></path></svg>
        <ul>
            <li>
                <Link to="/">Model S</Link>
            </li>
            <li>
                <Link to="/">Model 3</Link>
            </li>
            <li>
                <Link to="/">Model X</Link>
            </li>
            <li>
                <Link to="/">Model Y</Link>
            </li>
            <li>
                <Link to="/">Solar Roof</Link>
            </li>
            <li>
                <Link to="/">Solar Panels</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/">Shop</Link>
            </li>
            <li>
                <Link to="/">Account</Link>
            </li>
            <li className="mobile">
                <button>Menu</button>
            </li>
        </ul>
        <Overflow className={blur}>
            <ul>
                <li className='close'>
                    <button onClick={() => setBlur("unblur")}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path></svg>
                    </button>
                </li>
                <li>
                    <Link to="/">Model S</Link>
                </li>
                <li>
                    <Link to="/">Model 3</Link>
                </li>
                <li>
                    <Link to="/">Model X</Link>
                </li>
                <li>
                    <Link to="/">Model Y</Link>
                </li>
                <li>
                    <Link to="/">Solar Roof</Link>
                </li>
                <li>
                    <Link to="/">Solar Panels</Link>
                </li>
                <li>
                    <Link to="/">Existing Inventory</Link>
                </li>
                <li>
                    <Link to="/">Used Inventory</Link>
                </li>
                <li>
                    <Link to="/">Trade-In</Link>
                </li>
                <li>
                    <Link to="/">Test Drive</Link>
                </li>
                <li>
                    <Link to="/">Insurance</Link>
                </li>
                <li>
                    <Link to="/">Powerwall</Link>
                </li>
                <li>
                    <Link to="/">Commercial Energy</Link>
                </li>
                <li>
                    <Link to="/">Utilities</Link>
                </li>
                <li>
                    <Link to="/">Charging</Link>
                </li>
                <li>
                    <Link to="/">Find Us</Link>
                </li>
                <li>
                    <Link to="/">Support</Link>
                </li>
                <li>
                    <Link to="/">Investor Relations</Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/">Account</Link>
                </li>
                <li>
                    <Link to="/">More</Link>
                </li>
            </ul>
        </Overflow>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 32px;
    position: fixed;
    width: 100%;
    z-index: 2;
    color: #171a20;
    > svg{
        height: 24px;
        width: 120px;
        margin-left: 16px;
    }
    > ul{
        display: flex;
        flex-direction: row;
        > li{
            display: none;
            width: max-content;
            /* padding: 4px 8px; */
            a, button{
                font-size: 16px;
                line-height: 24px;
                font-weight: bold;
                padding: 4px 16px;
                color: #171a20;
                height: max-content;
                display: block;
            }
        }
        > li.mobile{
            display: list-item;
            button{
                border-radius: 12px;
                backdrop-filter: blur(16px);
                background-color: #0000000d;
            }
        }
        @media screen and (min-width: 1200px) {
            > li{
                display: list-item;
                > a,> button{
                    background-color: transparent!important;
                    :hover{
                        border-radius: 12px;
                        backdrop-filter: blur(16px);
                        background-color: #0000000d!important;
                    }
                }
            }
        }
    }
`
const Overflow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    transform: translateX(100vw);
    /* animation: blur 1s linear forwards; */
    @keyframes unblur {
        0%{
            backdrop-filter: blur(4px);
            background-color: rgba(0, 0,0, 0.3);
            transform: translateX(0);
        }
        50%{
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0,0, 0.15); 
            transform: translateX(0);
        }
        100%{
            backdrop-filter: blur(0);
            background-color: rgba(0, 0,0, 0); 
            transform: translateX(0);
        }
    }
    @keyframes blur {
        0%{
            backdrop-filter: blur(0);
            background-color: rgba(0, 0,0, 0); 
            transform: translateX(0);
        }
        50%{
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0,0, 0.15);
            transform: translateX(0); 
        }
        100%{
            backdrop-filter: blur(4px);
            background-color: rgba(0, 0,0, 0.3);
            transform: translateX(0);
        }
    }
    &.unblur{
        animation: unblur 0.31s linear forwards;
        ul{
            animation: fade-out 0.31s linear forwards;
        }
    }
    &.blur{
        animation: blur 0.31s linear forwards;
        ul{
            animation: fade-in 0.31s linear forwards;
        }
    }
    ul{
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 300px;
        background-color: #fff;
        z-index: 11;
        padding: 0 8px 48px 32px;
        position: relative;
        @keyframes fade-out {
            0%{
                transform: translateX(0);
                opacity: 1;
            }
            45%{
                transform: translateX(40px);
                opacity: 1;
            }
            75%{
                transform: translateX(70px);
                opacity: 0.5;
            }
            90%{
                transform: translateX(85px);
                opacity: 0.1;
            }
            100%{
                transform: translateX(100px);
                opacity: 0;
                display: none;
            }
        }
        @keyframes fade-in {
            0%{
                transform: translateX(100px);
                opacity: 0;
                display: none;
            }
            10%{
                transform: translateX(85px);
                opacity: 0.1;
            }
            25%{
                transform: translateX(70px);
                opacity: 0.5;
            }
            55%{
                transform: translateX(40px);
                opacity: 1;
            }
            100%{
                transform: translateX(0);
                opacity: 1;
            }
        }
        .close{
            position: sticky;
            top: 0;
            width: 100%;
            min-height: 80px;
            padding: 20px 0 20px 20px;
            display: flex;
            flex-direction: row-reverse;
            background-color: #fff;
            z-index: 14;
            button{
                height: 40px;
                width: 40px;
                padding: 8px;
                border-radius: 50%;
                :hover{
                    backdrop-filter: blur(16px);
                    background-color: #0000000d;
                }
                svg{
                    height: 100%;
                    aspect-ratio: 1 /1;
                }
            }
        }
        li ~ li{
            margin-bottom: 8px;
            width: 100%;
            a{
                display: block;
                width: 100%;
                padding: 4px 10px;
                line-height: 24px;
                font-weight: bold;
                border-radius: 10px;
                :hover{
                    backdrop-filter: blur(16px);
                    background-color: #0000000d;
                }
            }
        }
    }
`