import * as React from "react";
import { createContext, useEffect, useRef, useState } from "react";
import { status } from "./lib";

export const appContext = createContext({} as any);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const loaded = useRef(false);
  const [data, setData] = useState({});

  // init mds
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      (window as any).MDS.init((evt: any) => {
        if (evt.event === "inited"
          || evt.event === "NEWBLOCK") {
          status().then((response) => {
            setData(response);
          });
        }
      });
    }
  }, [loaded]);

  const value = {
    data,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppProvider;
