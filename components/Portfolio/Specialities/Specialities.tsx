import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import SpecialitiesCard from "./SpecialitiesCard";

/* eslint-disable @next/next/no-img-element */
const Specialities = () => {
  return (
    <div id="specialities">
      <SectionContainer>
        <SectionTitle
          title="Specialities"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        recusandae earum vel obcaecati similique ducimus exercitationem?"
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          <SpecialitiesCard
            title="UI/UX Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis culpa illum animi. Ex iste modi libero blanditiis nulla consectetur!"
            image="light"
          />

          <SpecialitiesCard
            title="UI/UX Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis culpa illum animi. Ex iste modi libero blanditiis nulla consectetur!"
            image="pen"
          />

          <SpecialitiesCard
            title="Interactive Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis culpa illum animi. Ex iste modi libero blanditiis nulla consectetur!"
            image="mobile"
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Specialities;
