import styled from "styled-components";

const ModalContainer = styled.section`
  position: relative;
  display: none !important;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  &.open {
    display: flex !important;
  }
  .back-btn-wrapper {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;

    .back-btn {
      position: relative;
      display: inline-block;
      background: red;
      height: 5px;
      width: 20px;
      ::before {
        position: absolute;
        content: "";
        border-radius: 3px;
        border: 5px solid red;
        border-top: none;
        border-left: none;
        height: 10px;
        width: 10px;
        transform: rotate(135deg);
        top: -5px;
      }
    }
  }
`;
export const closeModal = () => {
  const modal = document.getElementById("modal-container");
  if (modal) {
    modal.classList.remove("open");
  }
};
export const openModal = () => {
  const modal = document.getElementById("modal-container");
  if (modal) {
    modal.classList.add("open");
  }
};
const Modal = ({ children }) => {
  return (
    <ModalContainer onClick={closeModal} id="modal-container" className="">
      {children}
      <span onClick={closeModal} className="back-btn-wrapper">
        <span
          role="button"
          aria-label="modal-back-btn"
          className="back-btn"
        ></span>
      </span>
    </ModalContainer>
  );
};

export default Modal;
