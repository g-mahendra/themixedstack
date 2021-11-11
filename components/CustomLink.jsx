const CustomLink = ({ to, text }) => {
  return (
    <a href={`${to}`} rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  );
};

export default CustomLink;
