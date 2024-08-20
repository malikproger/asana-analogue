import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';

export const TooltipContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: 0.2s ease;
  cursor: pointer;
  width: 135px;
  height: 30px;
  font-size: 16px;
  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.tooltipContentHover};
  }
`;

export const OptionText = styled.p`
  font-size: 16px;
`;

export const LogoutIcon = styled(FiLogOut)`
  transition: 0.2s ease;
  width: 18px;
  height: 18px;
  margin-left: 2px;
`;
