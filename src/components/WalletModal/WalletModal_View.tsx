import { Modal } from "..";
import { Button } from "..";

type Props = {
  show: boolean;
  onClose: () => void;
  connectMetamask(): void;
  connectWalletConnect(): void;
};

const WalletModal: React.FC<Props> = props => {
  return (
    <Modal title="CONNECT WALLET" show={props.show} onClose={props.onClose}>
      <div className="px-4 m-10 text-center text-black flex justify-center">
        <div className="">
          <img
            className="w-40 h-40 "
            src="images/metamask-logo.svg"
            alt="MetaMask"
          />
          <Button onClick={props.connectMetamask}>CONNECT METAMASK</Button>
        </div>
        <div className="w-20"></div>
        <div>
          <img
            className="w-40 h-40"
            src="images/walletconnect-logo.svg"
            alt="MetaMask"
          />
          <Button onClick={props.connectWalletConnect}>WALLET CONNECT</Button>
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;
