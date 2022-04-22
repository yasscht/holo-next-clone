const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
      <Icon className="w-8 group-hover:animate-bounce" />
      <span className="tracking-widest opacity-100 group-hover:opacity-100">
        {title}
      </span>
    </div>
  );
};

export default HeaderItem;
