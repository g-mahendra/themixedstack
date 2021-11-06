import Image from "next/image";

const BlogImage = ({ url, shouldPreLoad }) => {
  return <Image property={shouldPreLoad} src={url} layout="responsive" width={1366} height={768} />;
};

export default BlogImage;
