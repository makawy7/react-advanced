import { useEffect } from "react";

function Modal({ closeModal, modalContent }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
}
export default Modal;
