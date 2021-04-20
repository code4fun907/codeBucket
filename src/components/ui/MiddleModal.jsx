import Modal from "react-modal";

const MiddleModal = ({ children, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
    >
      {children}
    </Modal>
  );
};

export default MiddleModal;
