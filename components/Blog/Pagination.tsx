import { useRouter } from "next/router";
import qs from "qs";
import { TDirection } from "../../utils";

interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = "/blog" }: IPropType) => {
  const router = useRouter();

  const isNextDisabled = (): Boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): Boolean => {
    return page <= 1;
  };

  const handlePaginate = (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }

    if (direction === -1 && isPrevDisabled()) {
      return;
    }

    const queryString = qs.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };

  return (
    <div className="flex justify-center mt-24 gap-5">
      <button
        onClick={() => handlePaginate(-1)}
        className={`bg-primary text-white py-2 px-4 rounded w-24 font-semibold hover:bg-primary-dark transition-all ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`bg-primary text-white py-2 px-4 rounded w-24 font-semibold hover:bg-primary-dark transition-all ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
