
const FooterCard = ({ children, name, data, link="#" }) => {
  return (
    <div className="flex items-center justify-center p-2 lg:min-w-[12em]">
      <a
        className="flex flex-col justify-center items-center gap-2"
        href={link}
        target="_blank"
      >
        {children}
        <div className="hidden lg:contents">
          <span className="text-gray-500">{name}</span>
          <p>{data}</p>
        </div>
      </a>
    </div>
  );
};

export default FooterCard;