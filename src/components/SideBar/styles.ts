import { styled } from "styled-components";
import { SideBarProps } from "./props";

export const SideBarContainer = styled.div<SideBarProps>`
  height: 100%;
  display: flex;
  width: 4rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  border-right: 1px solid #eaecee;
  padding: ${({ padding }) => padding ? padding : '0'};
  position: ${({ position }) => position || 'relative'};
  left: 0;
  animation: showSidebar .4s;
  
  &:hover {
    width: 13rem;
  }

  @keyframes showSidebar {
    from {
      width: 4rem;
    }
    to {
      width: 13rem;
    }
  }
`;

export const SideBarTop = styled.header`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  img {
    margin-bottom: 2rem;
  }
`;