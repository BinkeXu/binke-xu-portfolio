/**
 * Web Vitals Performance Monitoring
 * 
 * This module provides performance monitoring capabilities for the portfolio website
 * by measuring and reporting Core Web Vitals metrics.
 * 
 * Core Web Vitals are key metrics that measure user experience:
 * - CLS (Cumulative Layout Shift): Measures visual stability
 * - FID (First Input Delay): Measures interactivity
 * - FCP (First Contentful Paint): Measures loading performance
 * - LCP (Largest Contentful Paint): Measures perceived loading speed
 * - TTFB (Time to First Byte): Measures server response time
 * 
 * @param {Function} onPerfEntry - Callback function to handle performance metrics
 * @returns {void}
 */
const reportWebVitals = onPerfEntry => {
  // Check if a valid callback function is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals library for performance optimization
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Measure and report each Core Web Vital metric
      getCLS(onPerfEntry);  // Cumulative Layout Shift
      getFID(onPerfEntry);  // First Input Delay
      getFCP(onPerfEntry);  // First Contentful Paint
      getLCP(onPerfEntry);  // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;
