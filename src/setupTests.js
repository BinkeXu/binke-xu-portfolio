/**
 * Testing Setup Configuration
 * 
 * This file configures the testing environment for the portfolio website.
 * It sets up Jest DOM matchers that provide custom assertions for DOM testing.
 * 
 * jest-dom extends Jest with custom matchers for DOM elements, allowing you to:
 * - Test text content: expect(element).toHaveTextContent(/react/i)
 * - Test CSS classes: expect(element).toHaveClass('active')
 * - Test attributes: expect(element).toHaveAttribute('data-testid')
 * - Test visibility: expect(element).toBeVisible()
 * - Test form elements: expect(input).toBeRequired()
 * 
 * This setup enables comprehensive testing of React components and DOM interactions.
 * 
 * Learn more: https://github.com/testing-library/jest-dom
 */

// Import jest-dom to extend Jest with DOM-specific matchers
import '@testing-library/jest-dom';
