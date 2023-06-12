import * as React from 'react';
import { createContext, Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { status, maxima, maxContacts, getBlock } from './lib';
import { BlockResponse, MaxContactsResponse, MaximaResponse, StatusResponse } from './types';
import isBefore from 'date-fns/isBefore';
import subMinutes from 'date-fns/subMinutes';
import useBadgeNotification from './hooks/useBadgeNotification';
import Block from './components/UI/Block';

export const appContext = createContext<{
  loaded: RefObject<boolean>;
  block: BlockResponse | null;
  statusData: StatusResponse | null;
  maxContactData: MaxContactsResponse | null;
  maxContactStats: { ok: number; sameChain: number };
  badgeNotification: string | null;
  setBadgeNotification: Dispatch<SetStateAction<string | null>>;
}>({
  loaded: {
    current: false,
  },
  block: null,
  statusData: null,
  maxContactData: null,
  maxContactStats: { ok: 0, sameChain: 0 },
  badgeNotification: '',
  setBadgeNotification: () => null,
});

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const loaded = useRef(false);
  const [statusData, setStatusData] = useState<StatusResponse | null>(null);
  const [, setMaximaData] = useState<MaximaResponse | null>(null);
  const [block, setBlock] = useState<BlockResponse | null>(null);
  const [maxContactData, setMaxContactData] = useState<MaxContactsResponse | null>(null);
  const [maxContactStats, setMaxContactState] = useState({ ok: 0, sameChain: 0 });
  const badgeNotification = useBadgeNotification();

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

        if (evt.event === 'inited') {
          getBlock().then((blockResponse) => {
            setBlock(blockResponse);
          });
        }

        if (evt.event === 'NEWBLOCK') {
          setBlock({
            block: evt.data.header.block,
            timemilli: evt.data.header.timemilli,
            date: evt.data.header.date,
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
    loaded,
    block,
    statusData,
    maxContactData,
    maxContactStats,
    ...badgeNotification,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppProvider;
