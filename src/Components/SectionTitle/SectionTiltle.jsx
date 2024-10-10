

const SectionTiltle = ({heading, subHeading}) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-4">
        <p className="text-yellow-500 mb-2">---{subHeading}---</p>
        <h3 className="text-3xl uppercase border-y-4 ph-4">{heading}</h3>
    </div>
  );
};

export default SectionTiltle;