import React from 'react';
// eslint-disable-next-line
import styled from "styled-components";
const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premium Assess to our Disney+ Clone. Pay me as soon as possible. I need Your Money. You get assess to my clone if you pay.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;
const Container=styled.div`
    position:relative;
    height:calc(100vh - 70px);
    // margin-top:100px;
    display:flex;
    align-items:top;
    justify-content:center;
    &:before{
        position: absolute;
        top:0;
        bottom:0;
        content: "";
        left:0;
        right:0;
        background-image: url("/images/login-background.jpg");
        opacity:0.6;
        background-position:top;
        background-size:cover;
        background-repeat : no-repeat;
        z-index:-1;
    }
`;
const CTA = styled.div`
    max-width:650px;
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center; 
    margin-top:80px;
`;
const CTALogoOne= styled.img``; 
const CTALogoTwo= styled.img`
    margin-top:16px;
    width:90%;

`;
const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    text-align:center;
    padding: 17px 0px;
    border-radius:5px;
    color:#f9f9f9;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing :1.5px;
    margin: 8px 0px 12px;

    &:hover{
        background-color: #0483ee;
    }
`;
const Description = styled.div`
    text-align:center;
    font-size:11px;
    letter-spacing:1.5px;
    line-height:1.5;
`;
