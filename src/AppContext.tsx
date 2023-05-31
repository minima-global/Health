import * as React from 'react';
import { createContext, useEffect, useRef, useState } from 'react';
import { status, maxima, maxContacts } from './lib';
import { MaxContactsResponse, MaximaResponse, StatusResponse } from './types';
import isBefore from 'date-fns/isBefore';
import subMinutes from 'date-fns/subMinutes';

export const appContext = createContext<{
  statusData: StatusResponse | null;
  maxContactData: MaxContactsResponse | null;
  maxContactStats: { ok: number; sameChain: number };
}>({ statusData: null, maxContactData: null, maxContactStats: { ok: 0, sameChain: 0 } });

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const loaded = useRef(false);
  const [statusData, setStatusData] = useState<StatusResponse | null>(null);
  const [, setMaximaData] = useState<MaximaResponse | null>(null);
  const [maxContactData, setMaxContactData] = useState<MaxContactsResponse | null>(null);
  const [maxContactStats, setMaxContactState] = useState({ ok: 0, sameChain: 0 });

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
              setMaxContactData(maxContactsResponse);
            });
          });
        }
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (maxContactData) {
      const thirtyMinutesAgo = subMinutes(new Date(), 30);

      setMaxContactState({
        ok: maxContactData.contacts.map((i) => isBefore(thirtyMinutesAgo, new Date(i.lastseen))).length,
        sameChain: maxContactData.contacts.filter((i) => i.samechain).length,
      });
    }
  }, [maxContactData]);

  const value = {
    statusData,
    maxContactData,
    maxContactStats,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppProvider;
