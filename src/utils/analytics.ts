// Google Analytics configuration
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initializeGA = () => {
  // Add Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=G-BLBZ29FQ9R`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-BLBZ29FQ9R');
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-BLBZ29FQ9R', {
      page_path: path
    });
  }
}; 