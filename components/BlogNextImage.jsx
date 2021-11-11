import Image from "next/image";

const BlogNextImage = ({ url, shouldPreLoad, alt }) => {
  return (
    <Image
      alt={alt}
      property={shouldPreLoad}
      src={url}
      width={1366}
      height={768}
    />
  );
};

export default BlogNextImage;
