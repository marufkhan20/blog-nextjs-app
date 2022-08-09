import Image from "next/image";
import { IArticle } from "../../types";
import { formdatDate } from "../../utils";

interface IPropType {
  article: IArticle;
}

const AuthorDetails = ({ article }: IPropType) => {
  return (
    <div className="flex items-center my-4">
      <div className="rounded-lg overflow-hidden flex justify-center items-start mr-2">
        <Image
          src={`https://md-maruf-admin.herokuapp.com${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
          height={40}
          width={40}
          alt="author"
        />
      </div>
      <span className="text-sm font-bold text-gray-600">
        {article.attributes.author.data.attributes.firstname}{" "}
        {article.attributes.author.data.attributes.lastname} on &nbsp;
        <span className="text-gray-400">
          {formdatDate(article.attributes.createdAt)}
        </span>
      </span>
    </div>
  );
};

export default AuthorDetails;
