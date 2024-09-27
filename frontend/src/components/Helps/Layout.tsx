import { ReactNode } from "react";

interface PropsWithChildren {
    children: ReactNode;
    itemsCenter: boolean;
    justifyCenter: boolean;
}

const Layout = ({ children, itemsCenter, justifyCenter }: PropsWithChildren) => {
    const className = `flex h-[100%] max-w-[1440px] ${itemsCenter ? "items-center" : ""} ${justifyCenter ? "justify-center": ""}`;
    return <div className={className}>{children}</div>;
};

export default Layout;
