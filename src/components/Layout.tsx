import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__borderLine" />
      <div className="layout__container">{children}</div>
    </div>
  );
};

export default Layout;
