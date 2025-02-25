// Google Analytics configuration
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-BLBZ29FQ9R', {
      page_path: path
    });
  }
}; 