import { useState } from 'react';
// models
import { ConfirmModalContentProps } from '@models/layout';

const ConfirmCloseModal: React.FC<ConfirmModalContentProps> = ({
  title,
  closeModal,
  submitModal,
  doubleConfirmationText,
  cancelText,
  submitText,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="h-full flex flex-col gap-6 justify-center items-center py-10 px-4">
      <h3 className="text-slate-100 text-3xl lg:text-5xl font-black leading-[1.1] tracking-tight mr-auto w-[80%] sm:mr-0 sm:w-fit">
        {title}
      </h3>

      {doubleConfirmationText && (
        <p className="text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
          {doubleConfirmationText}
        </p>
      )}

      <div className="flex gap-4">
        <button
          onClick={() => closeModal()}
          className="cursor-pointer h-14 px-8 rounded-xl bg-slate-800 text-slate-100 font-bold text-base border border-slate-700 hover:bg-slate-700 transition-colors"
        >
          {cancelText || 'Close'}
        </button>

        <button
          onClick={() => !isLoading && submitModal(setIsLoading)}
          className="cursor-pointer w-full min-w-30 items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          {submitText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmCloseModal;
