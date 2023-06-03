import { useContext } from 'react';
import { appContext } from '../../../AppContext';
import Back from '../../../components/UI/Back';
import Block from '../../../components/UI/Block';
import SlideScreen from '../../../components/UI/SlideScreen';

type FullStatusProps = {
  display: boolean;
  dismiss: () => void;
};

function ChainStatus({ display, dismiss }: FullStatusProps) {
  const { statusData } = useContext(appContext);
  const { maxContactData, maxContactStats } = useContext(appContext);

  return (
    <SlideScreen display={display}>
      <div className="h-full flex flex-col p-5 pt-16">
        {statusData && (
          <>
            <Back textContent="Back" onClick={dismiss} />
            <h1 className="text-2xl mb-6">Chain status</h1>
            <div className="flex-grow flex flex-col gap-3">
              {maxContactData && (
                <div className="rounded-md core-black-contrast overflow-hidden">
                  <h5 className="p-4 text-xl">Chain</h5>
                  <div className="flex flex-col gap-0.5">
                    <Block title="Status">
                      {maxContactStats.ok === maxContactStats.sameChain &&
                      maxContactStats.sameChain === maxContactData.contacts.length ? (
                        <div className="flex items-center justify-end text-status-green">
                          Good
                          <svg
                            className="ml-3"
                            width="20"
                            height="10"
                            viewBox="0 0 20 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.8078 9.53843H5.00012C3.74449 9.53843 2.67417 9.09599 1.78917 8.2111C0.90417 7.32622 0.46167 6.25604 0.46167 5.00055C0.46167 3.74507 0.90417 2.6747 1.78917 1.78945C2.67417 0.904203 3.74449 0.461578 5.00012 0.461578H8.8078V1.96153H5.00012C4.16037 1.96153 3.44402 2.258 2.85107 2.85095C2.25812 3.4439 1.96165 4.16025 1.96165 5C1.96165 5.83975 2.25812 6.5561 2.85107 7.14905C3.44402 7.742 4.16037 8.03848 5.00012 8.03848H8.8078V9.53843ZM6.25014 5.74998V4.25003H13.7501V5.74998H6.25014ZM11.1924 9.53843V8.03848H15.0001C15.8399 8.03848 16.5562 7.742 17.1492 7.14905C17.7421 6.5561 18.0386 5.83975 18.0386 5C18.0386 4.16025 17.7421 3.4439 17.1492 2.85095C16.5562 2.258 15.8399 1.96153 15.0001 1.96153H11.1924V0.461578H15.0001C16.2558 0.461578 17.3261 0.904021 18.2111 1.7889C19.0961 2.67379 19.5385 3.74397 19.5385 4.99945C19.5385 6.25494 19.0961 7.3253 18.2111 8.21055C17.3261 9.0958 16.2558 9.53843 15.0001 9.53843H11.1924Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex items-center justify-end text-status-red">
                          Bad
                          <svg
                            className="ml-3"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9037 14.1038L16.7691 12.9385C17.4422 12.7551 17.9855 12.3946 18.399 11.8567C18.8124 11.3189 19.0191 10.7 19.0191 10C19.0191 9.16025 18.7227 8.4439 18.1297 7.85095C17.5368 7.258 16.8204 6.96153 15.9807 6.96153H12.173V5.46158H15.9807C17.2358 5.46158 18.306 5.9042 19.1912 6.78945C20.0765 7.6747 20.5191 8.74489 20.5191 10C20.5191 10.8859 20.2813 11.6952 19.8056 12.4279C19.33 13.1606 18.696 13.7192 17.9037 14.1038ZM14.5807 10.75L13.0807 9.25003H14.7307V10.75H14.5807ZM19.1461 20.2538L0.746094 1.85383L1.79992 0.800003L20.1999 19.2L19.1461 20.2538ZM9.82682 14.5384H6.01914C4.76403 14.5384 3.69384 14.0958 2.80859 13.2106C1.92334 12.3253 1.48072 11.2551 1.48072 10C1.48072 8.88847 1.83874 7.91315 2.55477 7.07405C3.27079 6.23495 4.16918 5.72823 5.24994 5.55388H5.49997L6.90764 6.96153H6.01914C5.17941 6.96153 4.46307 7.258 3.87012 7.85095C3.27717 8.4439 2.98069 9.16025 2.98069 10C2.98069 10.8398 3.27717 11.5561 3.87012 12.1491C4.46307 12.742 5.17941 13.0385 6.01914 13.0385H9.82682V14.5384ZM7.26917 10.75V9.25003H9.21149L10.6865 10.75H7.26917Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      )}
                    </Block>
                    <div className="text-sm p-4">
                      <div className="text-core-grey-80">
                        One or more of your contacts are on a different chain. Please check you are on the right chain.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="rounded p-4 core-black-contrast-2 mb-5">
                <div className="mb-4">Help</div>
                <div className="text-sm text-core-grey-40">
                  <p className="mb-4">If your node is not in sync with the latest block, follow the steps below:</p>
                  <p className="mb-4">
                    If you have just restarted your node, please allow 10-15 minutes for your node to sync to the latest
                    block.
                  </p>
                  <p className="mb-4">If your node remains out of sync, please attempt the following steps:</p>
                  <ol className="list-decimal mx-4">
                    <li className="mb-1">Check your internet connection</li>
                    <li className="mb-1">Check that the Minima app battery setting is set to "not optimised" (if using Android)</li>{' '}
                    <li className="mb-1">
                      Restart your node - in the majority of cases your node will successfully sync to the latest block.
                    </li>
                    <li className="mb-1">
                      To restart your node, select Shutdown node from Utilities. Please allow 10-15 minutes for your
                      node to sync after a restart.
                    </li>
                    <li className="mb-1">
                      Restore a recent backup - your node will sync from the last block in the backup to the latest
                      block Backup & Chain re-sync - if you have not previously taken a backup, take a backup now and
                      then do a Chain re-sync from an Archive node.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </SlideScreen>
  );
}

export default ChainStatus;