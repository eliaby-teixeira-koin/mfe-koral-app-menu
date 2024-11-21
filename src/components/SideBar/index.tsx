import { useContext } from "react";
import { SideMenu } from "../SideMenu";
import { SideBarProps } from "./props";
import { SideBarContainer, SideBarTop } from "./styles"
import { Logo } from "@koin/mfe-koral-util-ui";
import { MenuContext } from "../../context/menuContext";

export function SideBar({ }: SideBarProps) {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  console.log(`isOpen: ${isOpen}`);
  return (
    <SideBarContainer
      padding="1rem"
      position="fixed"
      // onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <SideBarTop>
        <Logo />
        <SideMenu />
      </SideBarTop>
    </SideBarContainer>
  )
}