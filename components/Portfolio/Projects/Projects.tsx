import Button from "../Button";
import SectionContainer from "../SectionContainer";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-port-primary to-port-primary-second"
    >
      <SectionContainer>
        {/* section title */}
        <div className="flex items-center justify-between text-white flex-col md:flex-row px-5 lg:px-0">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 md:mb-0">
            Take a look at <br /> my recent projects
          </h2>
          <p className="font-medium text-lg md:w-1/3 text-gray-300 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nemo architecto nostrum, saepe hic dolorem doloribus
            voluptatibus cumque rem. Fugit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          <ProjectCard
            title="Wally Website"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, magnam?"
            url="http://localhost:3000"
            image="project1"
          />

          <ProjectCard
            title="Banking App"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, magnam?"
            url="http://localhost:3000"
            image="project2"
          />

          <ProjectCard
            title="Web App"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, magnam?"
            url="http://localhost:3000"
            image="project3"
          />

          <ProjectCard
            title="Oculus App"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, magnam?"
            url="http://localhost:3000"
            image="project4"
          />
        </div>

        <div className="flex justify-center mt-24">
          <Button title="All Projects" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Projects;
