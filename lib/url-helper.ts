export default function createLoginUrl(redirectTo?: string): string {
  if (redirectTo) {
    return `/api/auth/signin/auth0?redirectTo=${encodeURIComponent(redirectTo)}`;
  }
  return `/api/auth/signin/auth0`;
}
