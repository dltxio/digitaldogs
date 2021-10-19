import React from "react";
type Props = {};
const Count: React.FC<Props> = props => {
  return (
    <>
      <div className="mt-5 nm-flat-white text-black p-8 rounded-2xl">
        <div className="text-center font-bold text-xl text-primary-p5 p-4 rounded-xl">
          📈 Animals
        </div>
        <div className="text-left my-6 font-sans text-gray-600 text-3xl font-bold py-6">
          1000
        </div>
      </div>
    </>
  );
};
export default Count;
