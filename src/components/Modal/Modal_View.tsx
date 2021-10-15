import { useRef } from "react";
import { ModalBase } from "../";

type Props = {
  show: boolean;
  onClose: () => void;
  title: string;
};

const Modal: React.FC<Props> = props => {
  const closeButtonRef = useRef(null);
  return (
    <ModalBase show={props.show} onClose={props.onClose}>
      <div className="flex justify-between py-2 px-3">
        <div>
          <span className="text-xl font-medium text-gray-300">
            {props.title}
          </span>
        </div>
        <div>
          <button
            className="text-sm font-medium text-gray-300 hover:text-secondary-cyan cursor-pointer focus:outline-none"
            onClick={props.onClose}
            ref={closeButtonRef}
          >
            <span className="font-bold text-lg">X</span>
          </button>
        </div>
      </div>
      <div className="pt-3 pb-4 px-3">{props.children}</div>
    </ModalBase>
  );
};

export default Modal;
