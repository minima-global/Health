import Block from '../../components/Block';
import { useContext, useState } from 'react';
import { appContext } from '../../AppContext';
import TitleBar from '../../components/TitleBar'
import Status from '../../components/Status'

function FullStatus() {
  const { statusData } = useContext(appContext);

  return (
    <div className="app">
      <div className="h-screen">
        <TitleBar />
        <div className="p-5">
          {statusData && (
            <>
              <div className="flex flex-col gap-2">
                <Status title="Minima Status" value={JSON.stringify(statusData, null, 2)} copy />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FullStatus;
