import styled from 'styled-components';
import { Header, Nav, Button } from 'rsuite';

export const StyledHero = styled.div`
    height: 80vh;
    background-image: linear-gradient(135deg, #168af0 0%, #764ba2 100%);
    color: #fff;
    padding-top: 12rem;
`;
    
export const StyledHeader = styled(Header)`
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: #FFF;
`;
    
    export const StyledNavItem = styled(Nav.Item)`
    color: #FFF;
    `;
    
export const Title = styled.h1`
    font-family: 'Dosis', sans-serif;
    font-size: 2.57813rem;
    margin-bottom: 1rem;
`;
    
export const SectionTitle = styled.h2`
    color: #323d47;
    font-family: 'Dosis', sans-serif;
    font-size: 2.10938rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
`;
    
export const SectionHeader = styled.div`
    text-align: center;
    max-width: 70%;
    margin: 0 auto 70px;
    
    p {
        font-size: 1.125rem;
    }
`;
    
export const Section = styled.div`
    position: relative;
    border-bottom: none;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
`;

export const PricingSection = styled(Section)`
    background-color: #fafbfb;

    .rs-panel {
        background-color: #fff;
        border-color: #f2f2f2;
        .rs-panel-heading {
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Dosis', sans-serif;
        }

        h3 {
            font-family: 'Dosis', sans-serif;
            font-weight: 400;
            letter-spacing: 0.5px;
            margin-bottom: 1rem;
        }

        p {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
        }

        small {
            font-family: 'Open Sans', sans-serif;
        }
    }
`;
    
export const SignUpSection = styled(Section)`
    position: relative;
    border-bottom: none;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-image: linear-gradient(135deg, #9C27B0 0%, #E91E63 100%);
    color: #FFF;

    h1 {
        font-family: 'Dosis', sans-serif;
        font-weight: 400;
        letter-spacing: 0.5px;
        font-size: 2rem;
        margin-bottom: .5rem;
    }
`;

export const Logo = styled.img`
    width: 90px;
    filter: brightness(0) invert(1);
`;

export const SubTitle = styled.p`
    font-family: "Open Sans",sans-serif;
    font-weight: 300;
    line-height: 1.9;
    font-size: 1.17188rem;
    margin-bottom: 2rem !important;
`;
    
export const StyledButton = styled(Button)`
    font-weight: 600;
`;

export const StepTitle = styled.h6`
    font-weight: 500;
    font-family: Dosis,sans-serif;
    letter-spacing: 0.75px;
    color: #323d47;
    font-size: 1.05469rem;
    margin-bottom: 1rem;
`;

export const StepText = styled.p`
    font-family: "Open Sans",sans-serif;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    margin-bottom: 1rem;
`;

export const SectionSubTitle = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 1rem;
    line-height: 1.9;
    color: #757575;
    `;

    export const TeamSection = styled(Section)`
    h5 {
        font-weight: 400;
        color: #323d47;
        letter-spacing: 0.5px;
        font-size: 1;
        margin-bottom: .5rem;
        font-family: Dosis,sans-serif;
        line-height: 1.5;
    }
    
    p {
        font-family: "Open Sans", sans-serif;
        line-height: 1.9;
        color: #757575;
    }
`
