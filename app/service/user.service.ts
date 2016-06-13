export function isLoggedIn() {
  return !!storage.getAuthToken();
}
