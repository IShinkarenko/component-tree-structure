/**
 * Base data structure
 */
export interface User {
  /** Unique user identifier */
  id: string;
  /** User's chosen username */
  username: string;
  /** User's email address */
  email: string;
  /** Account creation timestamp */
  createdAt: string;
  /** Last login timestamp */
  lastLoginAt?: string;
  /** Account verification status */
  isVerified: boolean;
  /** User's role/permission level */
  role: "user" | "admin" | "moderator";
}

/**
 * Authentication tokens
 */
export interface AuthTokens {
  /** JWT access token */
  accessToken: string;
  /** JWT refresh token */
  refreshToken: string;
  /** Token expiration time */
  expiresAt: string;
  /** Token type */
  tokenType: "Bearer";
}
