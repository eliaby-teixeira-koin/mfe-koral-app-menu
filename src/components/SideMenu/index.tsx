import { Navigate, Text, colors } from "@koin/mfe-koral-util-ui";
import { SideMenuContainer } from "./styles"
import { Bank, ChartBar, ChartLine, ChartDonut } from "@phosphor-icons/react";
import { SideMenuProps } from "./props";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/menuContext";

export function SideMenu({ }: SideMenuProps) {
  const { isOpen } = useContext(MenuContext);
  return (
    <SideMenuContainer>
      <Navigate path="/" text="Menu item 1" icon={<Bank size={24} color={colors['gray-500']} />} />
      <Navigate path="/" text="Menu item 2" icon={<ChartBar size={24} color={colors['gray-500']} />} />
      <Navigate path="/" text="Menu item 3" icon={<ChartLine size={24} color={colors['gray-500']} />} />
      <Navigate path="/" text="Menu item 4" icon={<ChartDonut size={24} color={colors['gray-500']} />} />
    </SideMenuContainer>
  );
}