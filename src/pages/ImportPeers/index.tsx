import { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import ConfirmModal from '../../components/ConfirmModal';

function ImportPeers() {
  const [peers, setPeers] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="app">
      <ConfirmModal
        display={showConfirm}
        close={() => setShowConfirm(false)}
        message="This feature is currently not enabled"
      />
      <div className="h-screen">
        <TitleBar />
        <div className="p-5">
          <div className="p-4 bg-grey rounded relative">
            <textarea
              value={peers}
              onChange={(evt) => setPeers(evt.target.value)}
              placeholder="Enter the peers json"
              className="textarea custom-scrollbar p-3 -mb-1 w-full h-full outline-none"
              autoCorrect="none"
            />
          </div>
          <div className="my-4 flex justify-end">
            <button
              type="button"
              onClick={() => setShowConfirm(true)}
              className="px-4 py-2 rounded font-bold text-black bg-white text-white"
            >
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportPeers;
