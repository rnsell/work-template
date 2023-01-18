import type { FC } from "react";
import { INavigation } from "../../models/types";
import { classNames } from "../../utils/helper";

interface Props {
  item: INavigation;
}

const NavigationLink: FC<Props> = ({ item }) => {
  return (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current
          ? "bg-indigo-700 text-white"
          : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
        "px-3 py-2 rounded-md text-sm font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </a>
  );
};

export default NavigationLink;
