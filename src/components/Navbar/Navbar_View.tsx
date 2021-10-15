/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import { providers } from "ethers";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Button } from "..";

type Props = {
  openWalletModal(): void;
  account: string | undefined;
  disconnectWallet(): void;
};

const NavBarView: React.FC<Props> = Props => {
  return (
    <Disclosure as="nav" className="bg-white w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16 shadow-lg">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <label className="text-lg font-extrabold font-sans"></label>
                </div>
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center gap-4">
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4 text-black">
                      {Props.account ? (
                        <Button onClick={Props.disconnectWallet}>
                          Disconnect
                        </Button>
                      ) : (
                        <Button onClick={Props.openWalletModal}>
                          CONNECT WALLET
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default NavBarView;
