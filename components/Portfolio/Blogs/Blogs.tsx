import { IArticle } from "../../../types";
import Button from "../Button";
import SectionContainer from "../SectionContainer";
import BlogCard from "./BlogCard";

interface IPropType {
  articles: IArticle[];
}

const Blogs = ({ articles }: IPropType) => {
  console.log("image", articles[0].attributes.Image.data.attributes.url);
  return (
    <div
      id="blogs"
      className="bg-gradient-to-r from-port-primary to-port-primary-second"
    >
      <SectionContainer>
        {/* section title */}
        <div className="flex items-center justify-between text-white flex-col md:flex-row px-5 lg:px-0">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 md:mb-0">
            Take a look at <br /> my recent blogs
          </h2>
          <p className="font-medium text-lg md:w-1/3 text-gray-300 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nemo architecto nostrum, saepe hic dolorem doloribus
            voluptatibus cumque rem. Fugit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {articles ? (
            articles.map((article) => (
              <BlogCard
                key={article.id}
                title={article.attributes.Title}
                description={
                  article.attributes.shortDescription.slice(0, 70) + " ..."
                }
                url={`http://localhost:3000/blog/article/${article.attributes.Slug}`}
                image={`http://localhost:1337${article.attributes.Image.data.attributes.url}`}
              />
            ))
          ) : (
            <h1>Blog Not Found!!</h1>
          )}
        </div>

        <div className="flex justify-center mt-24">
          <Button link="/blog" title="Read All Blogs" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Blogs;
