import React from "react";

const Modal = ({ checked }) => {
  return (
    <div>
      <div className="container">
        <h1>Modal Pure CSS</h1>
        <label htmlFor="target-modal" className="btn">
          Open Modal
        </label>

        <footer>
          <ol>
            <li>
              <a
                href="https://fonts.google.com/specimen/Hahmlet"
                target="_blank"
              >
                font Hahmlet
              </a>
            </li>
            <li>
              <a href="https://codepen.io/robsonklein23" target="_blank">
                desenv @robsonklein
              </a>
            </li>
          </ol>
        </footer>
      </div>

      <input type="checkbox" id="target-modal" checked={checked} />
      <div className="modal">
        <div className="modal-inner">
          <label htmlFor="target-modal" className="close-modal"></label>
          <h2>Hi!</h2>
          <h3>
            I`m a <b>modal</b> <br /> with <b>pure CSS!</b>
          </h3>
        </div>
        <label htmlFor="target-modal" className="overlay-modal"></label>
      </div>
    </div>
  );
};

export default Modal;
