import styled from "styled-components";
import {Icon} from "../Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";
import 'animate.css';


export const GoTopBtn = () => {

    const [visibleBtn, setVisibleBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 200) {
                setVisibleBtn(true)
            } else {
                setVisibleBtn(false)
            }
        });
    }, [])

    return (
    <>
        {visibleBtn && (
            <StyledGoTopBtn
                onClick={() => scroll.scrollToTop()}
                className="animate__animated animate__swing"
            >
                <Icon iconId="goTop" height="30px" width="30px" viewBox="0 0 24 24" />
            </StyledGoTopBtn>
        )}
    </>
    );
};

const StyledGoTopBtn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
`
