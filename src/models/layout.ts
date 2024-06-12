export interface SectionProps {
  index: number;
}

export interface FlexProps {
  justify?: 'space-between' | 'flex-start' | 'flex-end' | 'center';
  gap?: number;
  align?: 'flex-start' | 'flex-end' | 'center';
  direction?: 'row' | 'column';
  flex?: number;
}
