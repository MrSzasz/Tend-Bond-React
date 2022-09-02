
const FooterCard = ({ children, name, data }) => {
  return (
    <div className="flex items-center justify-center min-w-[12em]">
      <a
        className="flex flex-col justify-center items-center gap-2"
        href="google.com"
      >
        {children}
        <div>
          <span className="text-gray-500">{name}</span>
          <p>{data}</p>
        </div>
      </a>
    </div>
  );
};

export default FooterCard;