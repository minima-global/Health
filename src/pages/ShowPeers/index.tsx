import { useEffect, useState } from 'react';
import TitleBar from '../../components/TitleBar';
import Status from '../../components/Status';
import { getPeers } from '../../lib'

function SharePeers() {
  const [peers, setPeers] = useState(false);

  useEffect(() => {
      getPeers().then((response) => {
          setPeers(response['peers-list']);
      })
  }, []);

  return (
    <div className="app">
      <div className="h-screen">
        <TitleBar />
        <div className="p-5">
          {peers && (
            <>
              <div className="flex flex-col gap-2">
                <Status title="Share Peers" value={JSON.stringify(peers, null, 2).slice(1, -1)} copy />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SharePeers;
