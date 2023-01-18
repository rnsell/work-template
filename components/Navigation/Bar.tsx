import type { FC } from "react";
import { Disclosure } from "@headlessui/react";
import NavigationLogo from "./Logo";
import NavigationLinks from "./Links";
import NavigationContainer from "./Container";
import { INavigation, IUser, IUserNavigation } from "../../models/types";
import NavigationLink from "./Link";
import NavigationProfile from "./Profile";
import NavigationHamburger from "./Hamburger";
import NavigationMobilePanel from "./Mobile/Panel";

interface Props {
  user: IUser;
  navigation: INavigation[];
  userNavigation: IUserNavigation[];
}

const NavigationBar: FC<Props> = ({ user, navigation, userNavigation }) => {
  return (
    <Disclosure as="nav" className="bg-indigo-600">
      {({ open }) => (
        <>
          <NavigationContainer>
            <div className="flex items-center">
              <NavigationLogo />
              <NavigationLinks>
                {navigation.map((item) => (
                  <NavigationLink key={item.name} item={item} />
                ))}
              </NavigationLinks>
            </div>
            <NavigationProfile user={user} userNavigation={userNavigation} />
            <NavigationHamburger isOpen={open} />
          </NavigationContainer>

          <NavigationMobilePanel
            user={user}
            userNavigation={userNavigation}
            navigation={navigation}
          />
        </>
      )}
    </Disclosure>
  );
};

export default NavigationBar;
