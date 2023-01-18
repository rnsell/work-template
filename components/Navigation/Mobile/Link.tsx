import type { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { classNames } from "../../../utils/helper";
import { INavigation } from "../../../models/types";
interface Props {
  item: {
    name: string;
    href: string;
    current?: boolean;
  };
}

const MobileLink: FC<Props> = ({ item }) => {
  return (
    <Disclosure.Button
      key={item.name}
      as="a"
      href={item.href}
      className={classNames(
        item.current
          ? "bg-indigo-700 text-white"
          : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
        "block px-3 py-2 rounded-md text-base font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </Disclosure.Button>
  );
};

export default MobileLink;
