import { useContext } from 'react';
import Block from '../../components/Block';
import { appContext } from '../../AppContext';
import TitleBar from '../../components/TitleBar'

function Home() {
  const { statusData, maxContactsData } = useContext(appContext);

  return (
    <div className="app">
      <div className="h-screen">
        <TitleBar />
        <div className="p-5">
          {statusData && (
            <>
              <h5 className="text-white text-lg mb-4">Minima</h5>
              <div className="flex flex-col gap-2">
                <Block title="Time" value={statusData.chain.time} />
                <Block title="Block" value={statusData.chain.block} />
                <Block title="Version" value={statusData.version} />
                <Block title="RAM" value={statusData.memory.ram} />
                <Block title="Disk space" value={statusData.memory.disk} />
                <Block title="Uptime" value={statusData.uptime} />
              </div>
            </>
          )}

          {maxContactsData && (
            <>
              <h5 className="text-white text-lg my-4">Maxima</h5>
              <div className="flex flex-col gap-2">
                <Block title="Contacts" value={maxContactsData.contacts.length} />
              </div>
            </>
          )}

          {statusData && (
            <>
              <h5 className="text-white text-lg my-4">Network</h5>
              <div className="flex flex-col gap-2">
                <Block title="Connections" value={statusData.network.connected} />
                <Block title="From" value={statusData.network.traffic.from} />
                <Block title="Total read" value={statusData.network.traffic.totalread} />
                <Block title="Total write" value={statusData.network.traffic.totalwrite} />
                <Block title="Read" value={statusData.network.traffic.read} />
                <Block title="Write" value={statusData.network.traffic.write} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
