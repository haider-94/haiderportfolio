import { groq } from "next-sanity";
import { client } from "./client";

const SANITY_SERVER =
  "https://nq1vjp0w.api.sanity.io/v2023-08-13/data/query/portfolio-db?query=";

const sanity_fetch = (query: string) => {
  // console.log("fetching sanity", SANITY_SERVER + query);
  return fetch(SANITY_SERVER + encodeURIComponent(query), {
    next: { tags: ["sanity"] },
  })
    .then((res) => res.json())
    .then((res) => res.result);
};

export function getPosts() {
  return client.fetch(groq`*[_type == "post"]{
    title,
    "slug": slug.current,
    _createdAt,
    _id,
    _updatedAt,
  }`);
}

export function getOnePost(slug: string) {
  return sanity_fetch(`*[_type == "post" && slug.current == "${slug}"][0]`);
}

export function getProjects(): any {
  return sanity_fetch(`*[_type == "project"]{
    title,
    "slug": slug.current,
    description,
    websiteUrl,
    githubUrl,
    dateRange,
    tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },
    content,
  } | order(dateRange.start desc)`);
}

export async function getProject(slug: string) {
  const res =
    await sanity_fetch(`*[_type == "project" && slug.current == "${slug}"]{
    title,
    "slug": slug.current,
    description,
    websiteUrl,
    githubUrl,
    dateRange,
    tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },
    content,
  } | order(dateRange.start desc)`);
  return res.length === 0 ? null : res[0];
}

export function getExperiences(): any {
  return sanity_fetch(`*[_type == "experience"]{
    title,
    "slug": slug.current,
    organization,
    description,
    content,
    dateRange,
    } | order(dateRange.start desc)`);
}

export function getQoutes(): any {
  return sanity_fetch(`*[_type == "qoute"]{
    qoute,
    "slug": slug.current,
    author[]-> { name, "slug": slug.current },
  }`);
}

export async function getHomePageData(): Promise<{
  projects: any;
  experiences: any;
  qoute: any;
}> {
  const res =
    await sanity_fetch(`*[((_type == "project" || _type == "experience") && showOnHomePage) || _type == "qoute"]{
  _type, organization,
  title,
  "slug": slug.current,
  description,
  content,
  websiteUrl,
  githubUrl,
  dateRange,
  tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },

  qoute,
  authors[]-> { name, "slug": slug.current },
} | order(dateRange.start desc)
`);
  const projects = res.filter((x: any) => x._type == "project");
  const experiences = res.filter((x: any) => x._type == "experience");
  const qoutes = res.filter((x: any) => x._type == "qoute");
  return {
    projects,
    experiences,
    qoute: qoutes[Math.floor(Math.random() * qoutes.length)],
  };
}

export async function getTechItems() {
  const data = await sanity_fetch(`*[_type == "tag" && categories != null]{
    name, icon, "slug": slug.current, iconFileName, iconScale,
    categories[] -> { title, "slug": slug.current },
  }`);
  // categorize tags by categories
  const categories: { [key: string]: any } = {};
  data.forEach((tag: any) => {
    if (!tag.categories) return;
    tag.categories.forEach((category: any) => {
      if (!categories[category.slug]) categories[category.slug] = [];
      categories[category.slug].push(tag);
    });
  });
  return data;
}
