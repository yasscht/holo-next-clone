import Image from "next/image";
import HeaderItem from "./kit/HeaderItem";
import {
  BadgeCheckIcon,
  CollectionItem,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <div>
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <div>
        <Image src="https://links.papareact.com/ua6" width={200} height={100} />
      </div>
    </div>
  );
};

export default Header;
