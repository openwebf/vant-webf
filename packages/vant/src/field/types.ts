/* eslint-disable no-use-before-define */
import type { ComputedRef, ComponentPublicInstance } from 'vue';
import type { FieldProps } from './Field';

export type FieldType =
  | 'tel'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local';

export type FieldTextAlign = 'left' | 'center' | 'right';

export type FieldClearTrigger = 'always' | 'focus';

export type FieldFormatTrigger = 'onBlur' | 'onChange';

export type FieldValidateTrigger = 'onBlur' | 'onChange' | 'onSubmit';

export type FieldAutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

export type FieldValidateError = {
  name?: string;
  message: string;
};

export type FieldRuleMessage =
  | string
  | ((value: any, rule: FieldRule) => string);

export type FieldRuleValidator = (
  value: any,
  rule: FieldRule
) => boolean | string | Promise<boolean | string>;

export type FiledRuleFormatter = (value: any, rule: FieldRule) => string;

export type FieldRule = {
  pattern?: RegExp;
  trigger?: FieldValidateTrigger | FieldValidateTrigger[];
  message?: FieldRuleMessage;
  required?: boolean;
  validator?: FieldRuleValidator;
  formatter?: FiledRuleFormatter;
  validateEmpty?: boolean;
};

export type FieldValidationStatus = 'passed' | 'failed' | 'unvalidated';

// Shared props of Field and Form
export type FieldFormSharedProps =
  | 'colon'
  | 'disabled'
  | 'readonly'
  | 'labelWidth'
  | 'labelAlign'
  | 'inputAlign'
  | 'errorMessageAlign';

export type FieldExpose = {
  blur: () => void | undefined;
  focus: () => void | undefined;
  validate: (
    rules?: FieldRule[] | undefined
  ) => Promise<void | FieldValidateError>;
  resetValidation: () => void;
  getValidationStatus: () => FieldValidationStatus;
  /** @private */
  formValue: ComputedRef<unknown>;
};

export type FieldInstance = ComponentPublicInstance<FieldProps, FieldExpose>;

declare global {
  interface EventTarget {
    composing?: boolean;
  }
}
