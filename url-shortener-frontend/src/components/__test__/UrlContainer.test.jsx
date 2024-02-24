// eslint-disable-next-line no-unused-vars
import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UrlContainer from "../UrlContainer";


// Test the urlContainer component
describe('UrlContainer', () => {
  test('Url Link Shortener text to be in the document', () => {
    render(<UrlContainer />);
    const urlContainerElement = screen.getByText(/URL Link Shortener/i);
    expect(urlContainerElement).toBeInTheDocument()
  });

  test('Url Link Shortener text to be in the document', () => {
    render(<UrlContainer />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent('Get Link')
  })
})
