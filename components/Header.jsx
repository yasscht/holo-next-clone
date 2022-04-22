import Image from "next/image";
import HeaderItem from "./kit/HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  const HeaderItems = [
    { title: "HOME", Icon: HomeIcon },
    { title: "TRENDING", Icon: LightningBoltIcon },
    { title: "VERIFIED", Icon: BadgeCheckIcon },
    { title: "COLLECTIONS", Icon: CollectionIcon },
    { title: "SEARCH", Icon: SearchIcon },
    { title: "ACCOUNT", Icon: UserIcon },
  ];
  return (
    <div className="flex items-center  flex-col sm:flex-row justify-between pr-4">
      <div className="flex items-center justify-evenly flex-grow max-w-2xl p-6">
        {HeaderItems.map(({ title, Icon }) => (
          <HeaderItem title={title} Icon={Icon} />
        ))}
      </div>
      <div>
        <Image src="https://links.papareact.com/ua6" width={200} height={100} />
      </div>
    </div>
  );
};

export default Header;
