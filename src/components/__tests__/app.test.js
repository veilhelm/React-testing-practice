import React from 'react';
import App from '../app';
import { render, cleanup } from '@testing-library/react';

jest.mock('../CommentBox');
jest.mock('../CommentList');

describe('App main view', () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it('should show the comment box', () => {
    const { getByTestId } = render(<App></App>);
    expect(getByTestId(/Comment-Box/i)).toBeInTheDocument();
  });
  it('should show the list box', () => {
    const { getByTestId } = render(<App></App>);
    expect(getByTestId(/Comment-list/i)).toBeInTheDocument();
  });
});
