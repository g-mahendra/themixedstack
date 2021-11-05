import Image from "next/image"

const PostHeader = ({ title, date }) => {
  return (
    <div className="space-y-4 mb-5">
      <h1 className="md:text-5xl text-3xl font-bold">{title}</h1>
      <div className="flex flex-row items-center md:justify-end">
        <div className="dark:text-gray-300 text-gray-600 flex flex-row space-x-5">
          <Image className="rounded-full" src="/icons/g-mahendra.svg" height={30} width={50} />
          <div>
            <a href="https://github.com/g-mahendra" target="_blank" className="cursor-pointer">
              <p className="hover:text-teal">g-mahendra</p>
            </a>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
