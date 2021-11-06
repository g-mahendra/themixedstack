import Link from "next/link";

const BlogNavigation = ({ name, to }) => {
  return (
    <div className="cursor-pointer">
      <Link href={to}>
        <p className="p-2 bg-gray-700 border-l-4 border-r-4 border-teal rounded-r-full w-max">
          {name}
        </p>
      </Link>
    </div>
  );
};

export default BlogNavigation;
