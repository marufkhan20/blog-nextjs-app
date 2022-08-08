import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const Portfolio = () => {
  return (
    <div id="journey">
      <SectionContainer>
        {/* section title */}
        <h4 className="flex items-center justify-center font-bold text-4xl text-port-primary mb-8">
          Hey,,,It&apos;s Maruf{" "}
          <img src="/icons/hand.png" className="w-9 ml-2" alt="hand icon" />
        </h4>
        <SectionTitle
          title="MERN Stack Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        recusandae earum vel obcaecati similique ducimus exercitationem?"
        />

        <div className="grid lg:grid-cols-3 gap-8 w-2/3 mx-auto items-center justify-center border-t-2 border-b-2 py-10 mt-24 text-center">
          <div>
            <h3 className="text-6xl font-bold underline underline-offset-4 mb-5">
              08+
            </h3>
            <p className="text-xl text-gray-500">Years Experience</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold underline underline-offset-4 mb-5">
              21+
            </h3>
            <p className="text-xl text-gray-500">Features & Awards</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold underline underline-offset-4 mb-5">
              97%
            </h3>
            <p className="text-xl text-gray-500">Clients Rating</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Portfolio;
