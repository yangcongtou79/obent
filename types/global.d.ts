declare global {
  interface Window {
    fbq?: (event: string, name: string, params?: Record<string, unknown>) => void;
    _fbq?: unknown;
  }
}
export {};
