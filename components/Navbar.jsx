import request from "../utils/request";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative ">
      <div
        className="flex items-center scrollbar-hide justify-between space-x-10 overflow-auto
          max-w-5xl sm:max-w-full whitespace-nowrap p-7 text-base font-semibold "
      >
        {Object.entries(request).map(([key, { title, url }]) => (
          <h3
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-500"
          >
            {title}
          </h3>
        ))}
      </div>

      <div className="absolute sm:hidden top-0 right-0 bg-gradient-to-l from-[#06202A] h-14 w-1/12" />
    </nav>
  );
};

export default Navbar;
