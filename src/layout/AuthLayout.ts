/**AuthLayout Component
 *
 * A specialized layout component designed for authentication pages such as
 * login, signup, password reset, and other auth-related flows. This layout
 * provides consistent styling and structure for authentication forms.
 *
 * Features:
 * - Centered form container with responsive design
 * - Authentication-specific branding and styling
 * - Optional background patterns or images
 * - Accessibility features for form navigation
 *
 */


/**
 * Props interface for the AuthLayout component
 */
export interface AuthLayoutProps {
  /**
   * Child components to render within the auth layout
   * Typically authentication forms like SignUpForm
   */
  children: React.ReactNode;

  /**
   * Title displayed at the top of the auth container
   * @example "Sign Up" | "Login" | "Reset Password"
   */
  title?: string;

  /**
   * Optional CSS class name for custom styling
   */
  className?: string;

  /**
   * Whether to show the application logo
   * @default true
   */
  showLogo?: boolean;

  /**
   * Loading state to show spinner/overlay
   * @default false
   */
  isLoading?: boolean;

  /**
   * Background variant for different auth pages
   * @default "default"
   */
  backgroundVariant?: 'default' | 'gradient' | 'pattern' | 'image';

  /**
   * Maximum width of the auth container
   * @default "400px"
   */
  maxWidth?: string;

  /**
   * Footer content (links, terms, etc.)
   */
  footer?: React.ReactNode;
}
