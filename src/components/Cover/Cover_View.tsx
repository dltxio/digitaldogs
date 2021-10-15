import React from "react";
import { Button } from "../";

type Props = {};

const Cover: React.FC<Props> = props => {
  return (
    <>
      <div className="grid ">
        <div className=" col-span-3 flex justify-center">
          <img
            className="flex justify-center col-span-4 h-25"
            src="images/digitaldogs-logo.png"
            alt="Digital Dogs"
          />
        </div>
        <div>
          <div className="grid grid-cols-2 text-2xl font-medium flex">
            <div>
              <img
                className=" content-center items-center"
                src="images/digital-dogs-text.svg"
                alt="Digital Dogs"
              />
            </div>
         
          <div className="">
            <div className="text-black flex justify-end text-primary-p3">
              Real world NFTs
            </div>
            <div className="text-black flex justify-end text-primary-p4">Provable lineage</div>
            <div className="text-black flex justify-end text-primary-p2">On the blockchain</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
