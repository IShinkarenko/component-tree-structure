/**
 * @fileoverview useFormValidation Hook
 *
 * A custom React hook that provides comprehensive form validation functionality
 * for signup forms. Supports validation for both Form #1 (username/password)
 * and Form #2 (username/password/gender) configurations.
 *
 * Features:
 * - Real-time field validation
 * - Error state management
 * - Validation rules for username, password, and gender fields
 * - TypeScript support with proper type inference
 *
 * @author Your Team
 * @since 1.0.0
 */

import { useState, useCallback, useMemo } from 'react';

/**
 * Validation error structure for form fields
 */
type ValidationErrors = {
  /** Username field validation errors */
  username?: string;
  /** Password field validation errors */
  password?: string;
  /** Gender field validation errors (only for Form #2) */
  gender?: string;
  /** General form-level error */
  form?: string;
};

/**
 * Form data structure for validation
 */
type FormData = {
  /** User's chosen username */
  username: string;
  /** User's password */
  password: string;
  /** User's selected gender (optional, required only when isGenderRequired=true) */
  gender?: string;
};

/**
 * Validation rules configuration
 */
type ValidationRules = {
  /** Minimum username length */
  usernameMinLength?: number;
  /** Maximum username length */
  usernameMaxLength?: number;
  /** Minimum password length */
  passwordMinLength?: number;
  /** Whether password requires special characters */
  passwordRequireSpecialChars?: boolean;
  /** Whether gender field is required */
  isGenderRequired?: boolean;
  /** Available gender options */
  genderOptions?: string[];
};

/**
 * Hook return type with validation state and methods
 */
type UseFormValidationReturn = {
  /** Current validation errors */
  errors: ValidationErrors;
  /** Whether the form is currently valid */
  isValid: boolean;
  /** Whether validation has been attempted */
  hasValidationAttempted: boolean;
  /** Validate a specific field */
  validateField: (fieldName: keyof FormData, value: string) => string | undefined;
  /** Validate the entire form */
  validateForm: (formData: FormData) => ValidationErrors;
  /** Clear all validation errors */
  clearErrors: () => void;
  /** Clear specific field error */
  clearFieldError: (fieldName: keyof FormData) => void;
  /** Set custom error */
  setError: (fieldName: keyof ValidationErrors, error: string) => void;
};

/**
 * Default validation rules
 */
const DEFAULT_RULES: Required<ValidationRules> = {
  usernameMinLength: 3,
  usernameMaxLength: 20,
  passwordMinLength: 8,
  passwordRequireSpecialChars: true,
  isGenderRequired: false,
  genderOptions: ['male', 'female', 'other', 'prefer-not-to-say']
};

/**
 * Custom hook for form validation
 *
 * @param rules - Optional validation rules configuration
 * @returns Object containing validation state and methods
 *
 * @example
 * ```tsx
 * // Form #1: Basic signup validation (username + password)
 * function SignUpForm() {
 *   const {
 *     errors,
 *     isValid,
 *     validateField,
 *     validateForm,
 *     clearErrors
 *   } = useFormValidation({
 *     isGenderRequired: false
 *   });
 *
 *   const handleSubmit = (formData) => {
 *     const validationErrors = validateForm(formData);
 *     if (Object.keys(validationErrors).length === 0) {
 *       // Submit form
 *     }
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <input
 *         onChange={(e) => validateField('username', e.target.value)}
 *       />
 *       {errors.username && <span>{errors.username}</span>}
 *     </form>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Form #2: Extended signup validation (username + password + gender)
 * function ExtendedSignUpForm() {
 *   const {
 *     errors,
 *     isValid,
 *     validateForm
 *   } = useFormValidation({
 *     isGenderRequired: true,
 *     passwordMinLength: 10,
 *     genderOptions: ['male', 'female', 'non-binary']
 *   });
 *
 *   return (
 *     <SignUpForm
 *       errors={errors}
 *       isGenderRequired={true}
 *       onSubmit={(data) => {
 *         const validationErrors = validateForm(data);
 *         if (Object.keys(validationErrors).length === 0) {
 *           // Submit to Form #2 API endpoint
 *         }
 *       }}
 *     />
 *   );
 * }
 */
export function useFormValidation(
  rules: ValidationRules = {}
): UseFormValidationReturn {
  // Implementation will be added here
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [hasValidationAttempted, setHasValidationAttempted] = useState(false);

  // Merge provided rules with defaults
  const validationRules = useMemo(() => ({
    ...DEFAULT_RULES,
    ...rules
  }), [rules]);

  // Calculate if form is currently valid
  const isValid = useMemo(() => {
    return Object.keys(errors).length === 0;
  }, [errors]);

  // Validate individual field
  const validateField = useCallback((fieldName: keyof FormData, value: string): string | undefined => {
    // Field validation logic will be implemented here
    return undefined;
  }, [validationRules]);

  // Validate entire form
  const validateForm = useCallback((formData: FormData): ValidationErrors => {
    setHasValidationAttempted(true);
    const newErrors: ValidationErrors = {};

    // Form validation logic will be implemented here

    setErrors(newErrors);
    return newErrors;
  }, [validationRules]);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({});
    setHasValidationAttempted(false);
  }, []);

  // Clear specific field error
  const clearFieldError = useCallback((fieldName: keyof FormData) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  // Set custom error
  const setError = useCallback((fieldName: keyof ValidationErrors, error: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  }, []);

  return {
    errors,
    isValid,
    hasValidationAttempted,
    validateField,
    validateForm,
    clearErrors,
    clearFieldError,
    setError
  };
}
