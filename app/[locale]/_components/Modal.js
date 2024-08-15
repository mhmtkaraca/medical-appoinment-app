
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <button onClick={onClose} className="text-3xl text-red-500">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-2 rounded-lg shadow-lg relative">
          &times;
          {children}
        </div>
      </div>
    </button>
  );
};

export default Modal;
