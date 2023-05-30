import * as React from 'react';
import { createContext, useEffect, useRef, useState } from 'react';
import { status, maxima, maxContacts } from './lib';
import { MaxContactsResponse, MaximaResponse, StatusResponse } from './types';

export const appContext = createContext<{
  statusData: StatusResponse | null;
  maxContactsData: MaxContactsResponse | null;
}>({ statusData: null, maxContactsData: null });

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const loaded = useRef(false);
  const [statusData, setStatusData] = useState<StatusResponse | null>(null);
  const [, setMaximaData] = useState<MaximaResponse | null>(null);
  const [maxContactsData, setMaxContactsData] = useState<MaxContactsResponse | null>(null);

  // init mds
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      (window as any).MDS.init((evt: any) => {
        if (evt.event === 'inited' || evt.event === 'NEWBLOCK') {
          status().then((statusResponse) => {
            setStatusData(statusResponse);
          });

          maxima().then((maximaResponse) => {
            maxContacts().then((maxContactsResponse) => {
              setMaximaData(maximaResponse);
              setMaxContactsData(maxContactsResponse);
            });
          });
        }
      });
    }
  }, [loaded]);

  const value = {
    statusData,
    maxContactsData,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppProvider;
