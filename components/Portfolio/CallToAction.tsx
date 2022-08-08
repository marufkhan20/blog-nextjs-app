import Button from "./Button";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const CallToAction = () => {
  return (
    <div id="contact" className="bg-primary-bg w-full md:w-4/5 mx-auto">
      <SectionContainer>
        <div className="flex justify-center mb-8">
          <img src="/icons/emoji.png" className="w-24" alt="emoji icons" />
        </div>
        <SectionTitle
          title="Got a Project? Let's talk"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        recusandae earum vel obcaecati similique ducimus exercitationem?"
        />

        <div className="text-center mt-16">
          <Button title="Book a call" type="gradient" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default CallToAction;
