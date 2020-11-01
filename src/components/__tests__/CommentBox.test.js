import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import CommentBox from '../CommentBox';

describe('comment Box', () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the form', () => {
    const { getByLabelText, getByText } = render(<CommentBox></CommentBox>);
    expect(getByLabelText('text-area')).toBeInTheDocument();
    expect(getByText(/enter a comment/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });

  it('should change the text on input', () => {
    const { getByLabelText } = render(<CommentBox></CommentBox>);
    const textArea = getByLabelText('text-area');
    fireEvent.change(textArea, {
      target: {
        value: 'a text input',
      },
    });
    expect(textArea.value).toBe('a text input');
  });

  it('should clean the text area on submit', () => {
    const { getByText, getByLabelText } = render(<CommentBox></CommentBox>);
    fireEvent.click(getByText(/submit/i));
    expect(getByLabelText('text-area').innerHTML).toBe('');
  });
});
