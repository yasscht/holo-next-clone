import request from "../utils/request";

const Navbar = () => {
  return (
    <nav className="flex items-center scrollbar-hide justify-between space-x-10 overflow-auto max-w-5xl sm:max-w-full whitespace-nowrap p-7 text-base font-semibold ">
      {Object.entries(request).map(([key, { title, url }]) => (
        <h3
          key={key}
          className="cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-500"
        >
          {title}
        </h3>
      ))}
    </nav>
  );
};

export default Navbar;
