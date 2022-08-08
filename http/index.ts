import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// Categories
export const fetchCategories = async () => api.get("/api/categories");

// articles
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

// fetch single article by article slug
export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

// headers
export const fetchHeaders = async (queryString?: string) =>
  api.get(`/api/headers?${queryString}`);

// social
export const fetchSocials = async (queryString?: string) =>
  api.get(`/api/socials?${queryString}`);
