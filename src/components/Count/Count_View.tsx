import React from "react";
type Props = {};
const Count: React.FC<Props> = props => {
  return (
    <>
      <div className="mt-5 bg-white text-black p-8 rounded-3xl shadow-xl">
        <div className="text-left font-bold text-xl text-primary-p5">Animals</div>
        <div className="text-left my-6 font-sans text-sm text-gray-600">
          Count
        </div>
      </div>
    </>
  );
};
export default Count;
