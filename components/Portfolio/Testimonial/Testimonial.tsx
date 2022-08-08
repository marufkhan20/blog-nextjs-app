import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-primary-bg">
      <SectionContainer>
        <SectionTitle
          title="What people says"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        recusandae earum vel obcaecati similique ducimus exercitationem?"
        />

        <div className="mt-24 text-center">
          <div className="w-full lg:w-2/4 mx-auto">
            <p className="font-medium text-2xl text-gray-500 mb-11">
              ``Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              accusantium fugit. Aspernatur culpa hic autem tempora ullam
              tempore error dicta maxime atque aut minus ratione dolorum cumque
              voluptatum quod, corrupti nobis itaque commodi porro repellat
              beatae eos et? Cupiditate, consectetur?``
            </p>
            <div className="flex items-center justify-center gap-5 mb-3">
              <img
                className="w-12 h-12 rounded-full "
                src="/user.png"
                alt="user image"
              />
              <h3 className="font-bold text-3xl">Joe Elia</h3>
            </div>
            <span className="font-medium text-lg text-gray-500">
              User Interface Design at PCL Lab
            </span>
          </div>
        </div>

        {/* TODO: Added curosel Later */}
      </SectionContainer>
    </div>
  );
};

export default Testimonial;
