import { styled } from "@styles";

export const AddToCartSelection = styled.div``;

export const SocialShareSelection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const ProductNameHeader = styled.h3`
  text-transform: uppercase;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const ProductPricing = styled.p`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const UndiscountedPrice = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.colors.baseFontColorSemiTransparent};
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const VariantPicker = styled.div`
  display: grid;
  margin-top: 20px;

  .react-select-wrapper,
  .input {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export const QuantityInput = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  display: none;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
`;

export const SocialButton = styled.span`
  margin-right: 5px;

`;
