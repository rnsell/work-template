import type { FC } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { IUser } from "../../../models/types";

interface Props {
  user: IUser;
}

const NavigationMobileProfile: FC<Props> = ({ user }) => {
  return (
    <div className="flex items-center px-5">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-white">{user.name}</div>
        <div className="text-sm font-medium text-indigo-300">{user.email}</div>
      </div>
      <button
        type="button"
        className="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default NavigationMobileProfile;
