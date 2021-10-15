import React from "react";
type Props = {};
const About: React.FC<Props> = props => {
  return (
    <>
      <div className="mt-5 bg-white text-black p-8 rounded-3xl shadow-xl">
        <div className="text-left font-bold text-xl text-primary-p5">About</div>
        <div className="text-left my-6 font-sans text-sm text-gray-600">
        Digital Dogs is an integrated digital registry of pedigree dogs for Breeders, Dog Associations, Microchip Registries and Government Bodies. 

Built on Blockchain technology, the registry provides provable ownership, lineage and certificate of pedigree for more secure, transparent, robust and affordable dog registration.
        </div>
      </div>
    </>
  );
};
export default About;
