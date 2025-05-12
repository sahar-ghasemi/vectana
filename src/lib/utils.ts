export function validateMobile(mobile: string): boolean {
  return /^09[0-9]{9}$/.test(mobile);
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
