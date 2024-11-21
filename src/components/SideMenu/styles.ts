import { styled } from "styled-components";
import { SideMenuProps } from "../SideMenu/props";

export const SideMenuContainer = styled.nav<SideMenuProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  svg {
    margin-right: 0;
  }
`;
