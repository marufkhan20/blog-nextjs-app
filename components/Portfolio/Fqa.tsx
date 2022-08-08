import SectionContainer from "./SectionContainer";

const Fqa = () => {
  return (
    <div>
      <SectionContainer>
        <h2 className="text-4xl lg:text-6xl font-bold">
          Take a look at <br /> my recent writting blogs
        </h2>

        <div className="mt-32 w-full lg:w-4/5">
          <div className="border-b-2 pb-5 border-gray-900 mb-20">
            <div className="flex items-center justify-between cursor-pointer mb-10">
              <h3 className="font-bold text-3xl lg:text-4xl">
                What is your hourly rate?
              </h3>
              <span className="text-4xl border-2 rounded-full flex items-center justify-center w-14 h-14">
                +
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-500 text-lg w-full lg:w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                sit voluptates nesciunt debitis odio temporibus. Laborum sit
                voluptates nesciunt debitis odio temporibus.
              </p>
            </div>
          </div>
          <div className="border-b-2 pb-5 border-gray-900 mb-20">
            <div className="flex items-center justify-between cursor-pointer mb-10">
              <h3 className="font-bold text-3xl lg:text-4xl">
                What is your hourly rate?
              </h3>
              <span className="text-4xl border-2 rounded-full flex items-center justify-center w-14 h-14">
                +
              </span>
            </div>
          </div>
          <div className="border-b-2 pb-5 border-gray-900 mb-20">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="font-bold text-3xl lg:text-4xl">
                What is your hourly rate?
              </h3>
              <span className="text-4xl border-2 rounded-full flex items-center justify-center w-14 h-14">
                +
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Fqa;
