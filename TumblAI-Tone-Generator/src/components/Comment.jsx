// components/CommentComponent.jsx
import { useState } from 'react';
import axios from 'axios';

function CommentComponent() {
  const [tone, setTone] = useState('Friendly');
  const [comment, setComment] = useState('');

  const handleGenerateComment = () => {
    axios.post('https://api.example.com/generate', { tone })
      .then(response => setComment(response.data.comment))
      .catch(error => console.error(error));
  };

  const handlePostComment = () => {
    const reply = document.querySelector('.TRX6J')[0]; // Get reply button
    
    if (reply.ariaLabel === 'reply') {
        reply.click(); // Click on reply button
        const commentBox = document.querySelector('.N8H25')[0]; // Get Commentbox
        if (commentBox) {
        commentBox.value = comment;
        const postButton = document.querySelector('.post-button-selector'); // Replace with the actual selector
        postButton.click();
        }
    }
  };

  return (
    <div>
      <select value={tone} onChange={(e) => setTone(e.target.value)}>
        <option value="Friendly">Friendly</option>
        <option value="Funny">Funny</option>
        <option value="Disagree">Disagree</option>
        {/* Add more tones as needed */}
      </select>
      <textarea value={comment} readOnly />
      <button onClick={handleGenerateComment}>Generate Comment</button>
      <button onClick={handlePostComment}>Post Comment</button>
    </div>
  );
}

export default CommentComponent;
