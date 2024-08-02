import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: string;
  title: string;
}

const BlogModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  content,
  title,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 "
      onClick={onRequestClose}
    >
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-20 relative w-[500px]">
        <div className="flex justify-end">
          <AiOutlineCloseCircle onClick={onRequestClose} size={30} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="text-gray-700 mb-4">{content}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BlogModal;
