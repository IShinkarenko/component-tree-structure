/**
 * Authentication hook providing signup and password reset functionality
 * using React Query mutations.
 *
 * Usage:
 * ```ts
 * const { signUp, resetPassword } = useAuth();
 *
 * // Sign up a new user
 * signUp({ email: "user@example.com", password: "pass123" });
 *
 * // Reset user password
 * resetPassword({ email: "user@example.com", password: "newpass123" });
 * ```
 */

interface AuthCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const { mutate: signUp } = useMutation<User, Error, AuthCredentials>({
    mutationFn: ({ email, password }) => signUp(email, password),
    onSuccess: (user) => {
      navigate('/');
    },
    onError: () => {
      enqueueSnackbar('Failed to sign up. Please try again.', {
        variant: 'error'
      });
    }
  });

  const { mutate: resetPassword } = useMutation<User, Error, AuthCredentials>({
    mutationFn: ({ email, password }) => signUp(email, password),
    onSuccess: (user) => {
      navigate('/');
    },
    onError: () => {
      enqueueSnackbar('Failed to reset password. Please try again.', {
        variant: 'error'
      });
    }
  });

  return { signUp, resetPassword, errors, };
};
