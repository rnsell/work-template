import type { FC } from "react";
interface Props {
  children: React.ReactNode;
}

const NavigationLinks: FC<Props> = ({ children }) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">{children}</div>
    </div>
  );
};

export default NavigationLinks;
