import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Category
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

// Category Attribute
export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

// Article
export interface IArticle {
  id: number;
  attributes: IArticleAttribute;
}

// Image Data
interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

// Author
interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

// Article Attribute
export interface IArticleAttribute {
  Title: string;
  Body: string | MDXRemoteSerializeResult;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  shortDescription: string;
}

// Pagination
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Resource Meta
export interface IResourceMeta {
  pagination: IPagination;
}

// Collection Response
export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

// Query Options
export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}
