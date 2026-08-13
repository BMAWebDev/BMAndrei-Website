import { Field, ErrorMessage, useFormikContext } from 'formik';
// import {
//   ChevronDownIcon,
//   ExclamationCircleIcon,
// } from '@heroicons/react/20/solid';
// import { components } from 'react-select';
import { useMemo } from 'react';
// models
import { FieldGroupProps } from '@models/form';
// utils
import { getClassNames } from '@utils/tailwind';
// components
// import { Select, Checkbox, RadioGroup } from '@components/index';
// import PlusIcon from '@assets/icons/Plus.svg';
// import DeleteIcon from '@assets/icons/Trash.svg';
// import DateRangePicker from './DateRangePicker';
// import DatePicker from './DatePicker';

const FieldGroup = ({
  type = 'text',
  name,
  label,
  id,
  placeholder,
  children,
  inputClassName,
  isDisabled,
  requiredText,
  defaultValue,
  // onAdd,
  // deleteField,
  rows = 3,
  ...restProps
}: FieldGroupProps) => {
  const { errors, touched } = useFormikContext();
  const isError = useMemo(
    () =>
      !!errors[name as keyof typeof errors] &&
      !!touched[name as keyof typeof touched],
    [errors, touched, name],
  );

  // const handleCheckboxChange = () => {
  //   const newValue = !(values as Record<string, boolean>)[name];
  //   setFieldValue(name, newValue);
  // };

  // const handleRadioChange = (optionKey: string) => {
  //   setFieldValue(name, optionKey);
  // };

  return (
    <div
      {...restProps}
      className={`flex-1 w-full ${isDisabled ? ' opacity-50' : ''}`}
    >
      {label && type !== 'checkbox' && (
        <label
          htmlFor={name}
          className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1"
        >
          {label}
          {requiredText && <span className="text-primary">*</span>}
        </label>
      )}

      <div className="relative rounded-md shadow-sm">
        {type === 'select' ? //   {...selectProps} //   }} //     IndicatorSeparator: () => null, //     ), //       </components.DropdownIndicator> //         /> //           aria-hidden="true" //           className="h-5 w-5 text-gray-400 mr-2" //         <ChevronDownIcon //       <components.DropdownIndicator {...props}> //     DropdownIndicator: (props) => ( //   components={{ //   }} //     valueContainer: (styles) => ({ ...styles, padding: '0 8px' }), //   styles={{ //   }} //     multiValue: () => ' ', //     singleValue: () => ' ', //     control: () => ' py-1 px-2', //     menu: () => ' rounded-md shadow-lg', //   classNames={{ //   className={`block w-full bg-transparent rounded-md border dark:border-white/30 border-black outline-none sm:text-sm sm:leading-6 dark:text-gray-1 light:text-black dark:placeholder:text-gray-1 light:placeholder:text-black ${inputClassName ? ` ${inputClassName}` : ''}`} //   menuPlacement="bottom" //   menuPosition="absolute" //   isDisabled={isDisabled} //   placeholder={placeholder} //   name={name} //   id={id} //   value={(values as Record<string, number>)[name]} //   onChange={(e) => setFieldValue(name, e)} // <Select
        // />
        null : type === 'textarea' ? (
          <Field
            as="textarea"
            type={type}
            name={name}
            className={getClassNames(
              'w-full bg-background-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-0 transition-colors outline-none',
              inputClassName,
              isDisabled ? 'opacity-70' : '',
            )}
            id={id}
            // should be moved to tailwind class after migrating to tailwind v4
            style={{
              fieldSizing: 'content',
              minHeight: '6lh',
              maxHeight: '10lh',
            }}
            placeholder={placeholder}
            disabled={isDisabled}
            onKeyDown={(e: KeyboardEvent) => {
              // Prevent spacebar interference from headlessui components
              if (e.key === ' ') {
                e.stopPropagation();
              }
            }}
          />
        ) : (
          // : type === 'calendar' ? (
          //   <DatePicker
          //     ariaLabel={label || 'Pick a date'}
          //     value={(values as Record<string, string>)[name]}
          //     setDate={(value) => {
          //       if (!value) {
          //         setFieldValue(name, '');
          //       } else {
          //         // Value must be string in order to be properly parsed
          //         setFieldValue(name, value.toString());
          //       }
          //     }}
          //   />
          // )
          // : type === 'multi-calendar' ? (
          //   <DateRangePicker
          //     ariaLabel={label || 'Pick a date'}
          //     value={
          //       (values as Record<string, string>)[name] as {
          //         start?: string;
          //         end?: string;
          //       }
          //     }
          //     setDateRange={(value) => {
          //       if (!value) {
          //         setFieldValue(name, '');
          //       } else {
          //         // Start and end values must be strings in order to be properly parsed
          //         setFieldValue(name, {
          //           start: value.start.toString(),
          //           end: value.end.toString(),
          //         });
          //       }
          //     }}
          //   />
          // )
          // : type === 'checkbox' ? (
          //   <Checkbox
          //     id={name}
          //     name={name}
          //     onChange={handleCheckboxChange}
          //     checked={(values as Record<string, boolean>)[name]}
          //     isDisabled={isDisabled}
          //     label={label}
          //   />
          // )
          // : type === 'radio' && radioOptions ? (
          //   <RadioGroup
          //     name={name}
          //     checkedRadio={(values as Record<string, string>)[name]}
          //     onChange={handleRadioChange}
          //     options={radioOptions}
          //   />
          // )
          <Field
            type={type}
            name={name}
            className={getClassNames(
              'w-full bg-background-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-0 transition-colors outline-none',
              inputClassName,
              isDisabled ? 'opacity-70' : '',
            )}
            id={id}
            placeholder={placeholder}
            disabled={isDisabled}
            defaultValue={defaultValue}
            onKeyDown={(e: KeyboardEvent) => {
              // Prevent spacebar interference from headlessui components
              if (e.key === ' ') {
                e.stopPropagation();
              }
            }}
          />
        )}

        {isError && type !== 'password' && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex pr-3 items-start pt-3.5">
            <span
              className="material-symbols-outlined h-5 w-5 text-red-500"
              aria-hidden="true"
            >
              error
            </span>
          </div>
        )}

        {children}
      </div>

      <ErrorMessage
        name={name}
        className="m-0 mt-1 text-sm text-red-500"
        id={`${name}-error`}
        component="p"
      />
    </div>
  );
};

export default FieldGroup;
