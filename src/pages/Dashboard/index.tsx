import Block from "../../components/Block";
import { useContext } from "react";
import { appContext } from "../../AppContext";

function Dashboard() {
  const { data } = useContext(appContext);

  return (
    <div className="app">
      <div className="h-screen">
        <div className="sticky top-0 title-bar text-white p-4 z-10">
          Health
        </div>
        <div className="p-5">
          {/*<h5 className="text-white text-lg mb-4"> details</h5>*/}
          <div className="flex flex-col gap-2">
            <Block title="Version" value={data.version} />
            <Block title="Uptime" value={data.uptime} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
