import React, { useState } from 'react';

export default function CommentBox() {
  const [textArea, setTextArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextArea('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>enter a comment</h1>
        <label style={{ display: 'none' }} htmlFor="text-area">
          text-area
        </label>
        <textarea
          id="text-area"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    </div>
  );
}
