import Link from "next/link";
import { IArticle } from "../../types";
import AuthorDetails from "./AuthorDetails";

interface IPropType {
  article: IArticle;
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl font-bold hover:decoration-2 hover:underline hover:cursor-pointer text-gray-600 hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>

      <AuthorDetails article={article} />

      <div className="text-gray-500 font-medium">
        {article.attributes.shortDescription.slice(0, 250)}{" "}
        {article.attributes.shortDescription.length > 250 ? " ..." : ""}
      </div>
    </div>
  );
};

export default BlogCard;
