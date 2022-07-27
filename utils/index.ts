import { serialize } from "next-mdx-remote/serialize";
import { IArticle } from "../types";

export const formdatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return date;
};

export const makeCategory = (slug: string) => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};

export const capitalizeFirstLatter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export type TDirection = 1 | -1;

// debounce function
export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;

  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };

  return debounced;
};

// format markdown data
export const serializeMarkdown = async (item: IArticle) => {
  const body = await serialize(item.attributes.Body as string);
  return {
    ...item,
    attributes: {
      ...item.attributes,
      Body: body,
    },
  };
};
