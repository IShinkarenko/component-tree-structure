/**
 * SignUpForm Component
 *
 * A molecular component that renders a user registration form with username and password fields.
 * Can optionally include a gender field when isGenderRequired is true, allowing this component
 * to serve as both Form #1 (username/password) and Form #2 (username/password/gender).
 * Each form configuration submits data to different API endpoints.
 *
 * @component
 * @example
 * ```tsx
 * import { SignUpForm } from './components/molecules/SignUpForm';
 *
 * function SignUpPage() {
 *   const handleSignUp = (userData) => {
 *     console.log('User signed up:', userData);
 *     // Redirect to dashboard or login page
 *   };
 *
 *   const handlePasswordReset = (email) => {
 *     console.log('Password reset requested for:', email);
 *     // Navigate to password reset confirmation
 *   };
 *
 *   const handleError = (error) => {
 *     console.error('Sign up failed:', error);
 *     // Show error message to user
 *   };
 *
 *   // Form #1: Basic signup (username + password)
 *   return (
 *     <SignUpForm
 *       onSubmit={handleSignUp}
 *       onResetPassword={handlePasswordReset}
 *       onError={handleError}
 *       isLoading={isLoading}
 *     />
 *   );
 *
 *   // Form #2: Extended signup (username + password + gender)
 *   return (
 *     <SignUpForm
 *       onSubmit={handleSignUp}
 *       onResetPassword={handlePasswordReset}
 *       errors={errors}
 *       isLoading={isLoading}
 *       isGenderRequired
 *     />
 *   );
 * }
 * ```
 */

/**
 * Props interface for the SignUpForm component
 */
type SignUpFormProps = {
  /**
   * Callback function called when form submission
   * @param userData - The user data returned from the API
   */
  onSubmit?: (userData: {
    username: string;
    password: string;
    gender?: string;
  }) => void;

  /**
   * Callback function called when form submission fails
   * @param error - The error object from the failed API request
   */
  error?: Error;

  /**
   * Callback function called when user requests password reset
   * @param email - The email/username for password reset
   */
  onResetPassword?: (email: string) => void;

  /**
   * Optional CSS class name for custom styling
   */
  className?: string;

  /**
   * Loading state to disable form during submission
   */
  isLoading?: boolean;

  /**
   * Whether gender field is required (Form #2)
   * When true, renders Form #2 with username, password, and gender fields
   * When false, renders Form #1 with only username and password fields
   * @default false
   */
  isGenderRequired?: boolean;
};
