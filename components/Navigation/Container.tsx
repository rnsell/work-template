import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const NavigationContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">{children}</div>
    </div>
  );
};

export default NavigationContainer;
