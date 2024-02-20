// eslint-disable-next-line no-unused-vars
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UrlContainer from "../UrlContainer";


// Test the urlContainer component
describe('UrlContainer', () => {
  it('URL link Shortener to be in the document', () => {
    render(<UrlContainer />);
    const urlContainerElement = screen.getByText('URL Link Shortener');
    expect(urlContainerElement).toBeInTheDocument()
  })  
})
