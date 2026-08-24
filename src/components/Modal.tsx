import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
// components
import { ConfirmCloseModal } from '@components/ModalContent';

export interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  isCentered?: boolean;
  isHeightFit?: boolean;
  modalContentClassname?: string;
  isFullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

  // confirm close props
  confirmCloseData?: {
    title: string;
    cancelText?: string;
    submitText?: string;
  };
}

const SIZE_MAP: Record<string, string> = {
  sm: 'md:max-w-sm',
  md: 'md:max-w-md',
  lg: 'md:max-w-lg',
  xl: 'md:max-w-xl',
  '2xl': 'md:max-w-2xl',
  '3xl': 'md:max-w-3xl',
  '4xl': 'md:max-w-4xl',
  '5xl': 'md:max-w-5xl',
};

const ModalComponent: React.FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  closeModal,
  children,
  modalContentClassname,
  isCentered,
  isHeightFit,
  isFullWidth,
  size,
}) => {
  // Container positioning logic
  const containerClasses = useMemo(
    () =>
      isCentered
        ? // Centered modal
          'fixed inset-0 flex justify-center p-4 sm:p-6 items-center overflow-y-auto'
        : // Top-right positioned modal (non-centered)
          'fixed inset-0 flex items-start justify-end lg:right-4 p-4',
    [isCentered],
  );

  // Panel sizing and height logic
  const panelClasses = useMemo(() => {
    const baseClasses = [
      'relative w-full transform rounded-lg flex flex-col',
      'border shadow shadow-white/10',
      'bg-background-dark',
      'text-primary',
    ];

    // Width classes
    let widthClass = 'md:max-w-[600px]';

    if (isFullWidth) {
      widthClass = 'md:max-w-[calc(100vw-40px)]';
    } else if (size) {
      widthClass = SIZE_MAP[size];
    }

    // Height classes
    const heightClasses = isHeightFit
      ? 'max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]' // Fit to content with max height
      : isCentered
        ? 'max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]' // Centered with scroll
        : 'h-full'; // Non-centered full height

    return [...baseClasses, widthClass, heightClasses].join(' ');
  }, [isFullWidth, size, isHeightFit, isCentered]);

  // Content wrapper classes for scrolling
  const contentClasses = useMemo(() => {
    const baseClasses = ['p-4', modalContentClassname]
      .filter(Boolean)
      .join(' ');

    return isHeightFit
      ? // Content determines height, add overflow if needed
        `${baseClasses} overflow-y-auto`
      : // Use flex-1 to take available space and scroll
        `${baseClasses} overflow-y-auto flex-1`;
  }, [modalContentClassname, isHeightFit]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={() => {}}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </TransitionChild>

        {/* Portal target for dropdowns like react-select to escape clipping and focus traps. Must be outside the padded container! */}
        <div
          id="modal-portal-target"
          className="fixed inset-0 pointer-events-none z-99999"
        />

        {/* Container */}
        <div className={containerClasses}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className={panelClasses}>
              {/* No `closeModal` means the modal is not dismissible */}
              {closeModal && (
                <div className="absolute top-4 right-4 z-9999">
                  <span
                    className="cursor-pointer material-symbols-outlined"
                    onClick={() => closeModal()}
                    aria-label="Close modal"
                  >
                    close
                  </span>
                </div>
              )}

              {/* Content with scroll */}
              <div className={contentClasses}>{children}</div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

const Modal: React.FC<PropsWithChildren<ModalProps>> = (props) => {
  const { closeModal, confirmCloseData } = props;

  const [isConfirmCloseOpen, setIsConfirmCloseOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    const shouldConfirmClose = Boolean(confirmCloseData);

    if (shouldConfirmClose) {
      if (isConfirmCloseOpen) {
        setIsConfirmCloseOpen(false);
        closeModal?.();

        return;
      }

      setIsConfirmCloseOpen(true);
      return;
    }

    closeModal?.();
  }, [closeModal, confirmCloseData, isConfirmCloseOpen]);

  return (
    <>
      {/* Close confirmation modal */}
      {confirmCloseData && (
        <ModalComponent
          {...props}
          size="md"
          modalContentClassname=""
          isOpen={isConfirmCloseOpen}
          closeModal={closeModal ? handleClose : undefined}
          isFullWidth={false}
          isHeightFit
          isCentered
        >
          <ConfirmCloseModal
            title={confirmCloseData.title}
            closeModal={async () => setIsConfirmCloseOpen(false)}
            cancelText={confirmCloseData.cancelText || 'Close'}
            submitText={confirmCloseData.submitText || 'Submit'}
            submitModal={async () => handleClose()}
          />
        </ModalComponent>
      )}

      {/* Main content modal */}
      <ModalComponent
        {...props}
        closeModal={closeModal ? handleClose : undefined}
      />
    </>
  );
};

export default Modal;
