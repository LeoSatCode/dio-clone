import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: 2px solid #222222;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E4105D;

        &:hover {
            opacity: 0.6;
        }

        &::after {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            border: 2px solid #E4105D;
            border-radius: 22px;
        }
    `}
`;
