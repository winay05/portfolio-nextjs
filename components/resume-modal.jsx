import Modal from "./common/Modal/modal";

const ResumeModal = () => {
  return (
    <Modal>
      <iframe
        src="https://drive.google.com/file/d/1ruegUNTF5Qiiw2OSfsUZBT_ZzFyEh5_O/preview"
        width="800"
        allow="autoplay"
        style={{
          height: "100%",
          transform: "scale(1.1)",
          margin: "10px",
        }}
      ></iframe>
    </Modal>
  );
};

export default ResumeModal;
