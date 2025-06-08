/**
 * The primary layout component for the main application interface. This layout
 * provides the overall structure for authenticated users including navigation,
 * header, sidebar, and main content areas.
 *
 * Features:
 * - Responsive navigation header with user menu
 * - Optional sidebar for navigation or quick actions
 * - Main content area with proper spacing and overflow handling
 * - Footer with application information
 * - Breadcrumb navigation support
 * - Mobile-responsive design with collapsible navigation
 */

/**
 * Props interface for the MainLayout component
 */
export interface MainLayoutProps {
  /**
   * Child components to render in the main content area
   */
  children: React.ReactNode;

  /**
   * Optional CSS class name for custom styling
   */
  className?: string;

  /**
   * Whether to show the sidebar
   * @default true
   */
  showSidebar?: boolean;

  /**
   * Whether sidebar is collapsible on mobile
   * @default true
   */
  collapsibleSidebar?: boolean;

  /**
   * Loading state for the entire layout
   * @default false
   */
  isLoading?: boolean;

  /**
   * Callback when sidebar toggle is clicked
   */
  onSidebarToggle?: (isOpen: boolean) => void;
}
