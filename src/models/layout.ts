import { TranslationKey } from '@i18n/index';
import { StaticImageData } from 'next/image';

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

export interface ModalProps {
  closeModal: () => Promise<void> | void;
}

export interface ConfirmModalContentProps extends ModalProps {
  title: string;
  submitModal: (
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => Promise<void>;
  doubleConfirmationText?: string;
  cancelText?: string;
  submitText: string;
}

export type OpenedModal = 'manager' | 'checkout' | null;

export interface ProjectProps {
  titleKey: TranslationKey;
  tagsKey: TranslationKey;
  thumbnail: string | StaticImageData;
  name?: OpenedModal;
  description: TranslationKey;
  url?: string;
  ctaTextKey?: TranslationKey;
}
