export interface SideBarProps  {
  isOpen?: boolean
  onClick?: () => void
  maxWidth?: string
  padding?: string
  position?: 'relative' | 'absolute' | 'fixed' 
}