import * as ReactDOMClient from 'react-dom/client';
import CommentComponent from '../components/Comment.jsx';

// content.js
document.addEventListener('DOMContentLoaded', () => {
    const commentBox = document.querySelector('.N8H25'); // Replace with the actual selector
    if (commentBox) {
        console.log("Comment box found");
        injectUI(commentBox);
    } else {
        console.log("Comment box not found")
    }

  });
  
  function injectUI(commentBox) {
    const reactRoot = document.createElement('div');
    reactRoot.id = 'react-root';
    commentBox.parentNode.insertBefore(reactRoot, commentBox.nextSibling);
  
    // Render the React component
    const root = ReactDOMClient.createRoot(reactRoot);
    root.render(<CommentComponent />);
  }
  