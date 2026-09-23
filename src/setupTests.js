/**
 * Testing Setup Configuration
 * 
 * This file configures the testing environment for the portfolio website.
 * It sets up Jest DOM matchers that provide custom assertions for DOM testing
 * and mocks browser APIs not present in jsdom (e.g. IntersectionObserver).
 */

import '@testing-library/jest-dom';

// Global IntersectionObserver mock for headless test environment
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};
