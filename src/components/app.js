import React, { useState } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Modal from './Modal/index';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <CommentBox></CommentBox>
      <CommentList></CommentList>
      <button onClick={() => setOpenModal((state) => !state)}>
        open modal
      </button>
      <Modal
        isOpen={openModal}
        // onShadowClick={() => setOpenModal(false)}
        // onClose={() => console.log('modal is closed')}
        // onOpen={() => console.log('modal is open')}
        // className="customodal"
        // cardStyles={{ background: 'white' }}
        // animation={false}
      >
        <div>
          <h1>this is a modal title</h1>
          <p>lorem ipsum example</p>
        </div>
      </Modal>
    </div>
  );
}
