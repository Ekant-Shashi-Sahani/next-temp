import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: string;
  title: string;
}

const BlogModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, content, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-20 relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-gray-700 mb-4">{content}</div>
        <button
          onClick={onRequestClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default BlogModal;
