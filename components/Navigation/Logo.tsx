import type { FC } from "react";

interface Props {}

const NavigationLogo: FC<Props> = () => {
  return (
    <div className="flex-shrink-0">
      <img
        className="h-8 w-8"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
        alt="Your Company"
      />
    </div>
  );
};

export default NavigationLogo;
