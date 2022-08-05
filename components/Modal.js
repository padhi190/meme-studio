import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

function Modal({ show, onClose = () => {}, children, title = '' }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => setIsBrowser(true), []);

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-10 bg-gray-900 ">
      {/* Modal Header */}
      <div className="relative h-[600px] w-[500px] md:w-[800px] bg-white px-3 py-8 rounded-lg md:px-6 md:py-12 ">
        <a href="#" onClick={handleClose} className='absolute top-4 right-4 text-xl'>
          <FaTimes />
        </a>
        <div>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    ReactDOM.render(modalContent, document.getElementById('modal-root'));
  }

}

export default Modal;
