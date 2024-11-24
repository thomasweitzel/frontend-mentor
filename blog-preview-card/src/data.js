import illustrationImage from "../assets/images/illustration-article.svg";
import avatarImage from "../assets/images/image-avatar.webp";

const info = {
  category: "Learning",
  published: new Date("2023-12-21"),
  title: "HTML & CSS foundations",
  text: "These languages are the backbone of every website, defining structure, content, and presentation",
  image: illustrationImage,
  imageAlt: "An abstract image showing some lines and shapes",
  avatar: avatarImage,
  name: "Greg Hooper",
};

console.log(info.published)

export default info;
