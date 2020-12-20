import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  background: #f6f6f6;
  padding: 0rem;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  ${media.largeScreen`
    padding: 0rem;
  `}
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
  ${textProps}
`;

export const ArtisanName = styled.p`
  font-weight: normal;
  font-family: "Cardo", serif;
  font-style: italic;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
`;

export const Image = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${media.mediumScreen`
    grid-template-columns: 1fr 1fr;
  `}
  ${media.smallScreen`
    grid-template-columns: 1fr 1fr;
  `}
  display: grid;
  background: #f6f6f6;

  :hover {
    background: #d1dee6;
    color: black;
  }

  > img {
    width: 300px;
    height: auto;
    max-width: 100%;
    grid-column-end: span 1;
  }
  > div {
    h3 {
      margin-bottom: 10px;
    }

    height: auto;
    max-width: 100%;
    grid-column-end: span 2;
    padding: 10px;
    overflow: hidden;
    line-height: 2rem;
    max-height: 8rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }
`;
