import { useHistory } from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.div`
    height: 55px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    background-color: #ffffff;
`
const BackIconButton = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: 0;
    background-color: transparent;
    position: absolute;
    left: 10px;
    padding-top: 3px;
`

const BackIconImg = styled.img`
    height: 14px;
`
const TitleWrapper = styled.span`
    font-size: 18px;
    font-weight: 500;
`
const ExtraButtonWrapper = styled.span`
    position: absolute;
    right: 8px;
`

const ExtraButton = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: 0;
    background-color: transparent;
    font-size: 16px;
    padding-top: 3px;
    color: ${props => props.change ? '#FF4F00' : '#9F9F9F'};
`;

export default function Header({title, extraButton, onExtraButtonClick, change}) {
    const router = useHistory()
    return (
        <HeaderContainer>
            <BackIconButton onClick={() => router.goBack()}><BackIconImg src='/images/back-icon.png' /></BackIconButton>
             <TitleWrapper>{title}</TitleWrapper>
             {extraButton ? <ExtraButtonWrapper><ExtraButton onClick={onExtraButtonClick} change={change}>{extraButton}</ExtraButton></ExtraButtonWrapper> : null}
        </HeaderContainer>
        )
}