import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  /** */
  children?: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted && typeof window !== undefined
    ? createPortal(children, document.querySelector("#portals") as HTMLElement)
    : null;
};

export default Portal;
