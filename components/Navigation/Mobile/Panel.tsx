import type { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { INavigation, IUser, IUserNavigation } from "../../../models/types";
import NavigationMobileLink from "./Link";
import NavigationMobileProfile from "./Profile";

interface Props {
  navigation: INavigation[];
  user: IUser;
  userNavigation: IUserNavigation[];
}

const NavigationMobilePanel: FC<Props> = ({
  navigation,
  user,
  userNavigation,
}) => {
  return (
    <Disclosure.Panel className="md:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        {navigation.map((item) => (
          <NavigationMobileLink key={item.name} item={item} />
        ))}
      </div>
      <div className="border-t border-indigo-700 pt-4 pb-3">
        <NavigationMobileProfile user={user} />
        <div className="mt-3 space-y-1 px-2">
          {userNavigation.map((item) => (
            <NavigationMobileLink key={item.name} item={item} />
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default NavigationMobilePanel;
