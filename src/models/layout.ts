export interface SectionProps {
  index: number;
  id?: string;
}

type FlexAlignment = 'flex-start' | 'flex-end' | 'center';

export interface FlexProps {
  justify?: 'space-between' | 'space-evenly' | FlexAlignment;
  gap?: number;
  align?: FlexAlignment;
  direction?: 'row' | 'column';
  flex?: number;
  alignSelf?: FlexAlignment;
  isFullWidth?: boolean;
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}
