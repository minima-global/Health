import * as React from 'react';
import { Link } from 'react-router-dom';
import Clipboard from 'react-clipboard.js';
import { useEffect, useState } from 'react';

type BlockProps = {
  title: string;
  value: string | number;
  link?: string | null;
  copy?: boolean;
};

const Status: React.FC<BlockProps> = ({ title, value, link = null, copy = false }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <div className="p-4 bg-grey rounded relative">
      {link && (
        <Link to={link}>
          <div
            className={`text-sm lg:text-base break break-words ${
              link ? 'cursor-pointer text-white underline' : 'text-core-grey-80'
            }`}
          >
            {value}
          </div>
        </Link>
      )}
      {!link && (
        <div>
          <div
            className={`border rounded p-4 border-core-grey-40 lg:text-base break-words ${link ? 'cursor-pointer text-white underline' : 'text-core-grey-80'}`}
          >
            <div className="text-white mb-1.5">{title}</div>
            <div className="border-b border-core-grey-40 my-3"></div>
            <pre className="break-words">
              {value}
            </pre>
          </div>
        </div>
      )}
      {copy && (
        <div>
          {!copied && (
            <div className="absolute top-8 right-8 z-10">
              <Clipboard data-clipboard-text={value} onClick={() => setCopied(true)}>
                <div className="flex items-center">
                  <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.5 20.9751C1.1 20.9751 0.75 20.8251 0.45 20.5251C0.15 20.2251 0 19.8751 0 19.4751V4.4001H1.5V19.4751H13.35V20.9751H1.5ZM4.5 17.9751C4.1 17.9751 3.75 17.8251 3.45 17.5251C3.15 17.2251 3 16.8751 3 16.4751V2.4751C3 2.0751 3.15 1.7251 3.45 1.4251C3.75 1.1251 4.1 0.975098 4.5 0.975098H15.5C15.9 0.975098 16.25 1.1251 16.55 1.4251C16.85 1.7251 17 2.0751 17 2.4751V16.4751C17 16.8751 16.85 17.2251 16.55 17.5251C16.25 17.8251 15.9 17.9751 15.5 17.9751H4.5ZM4.5 16.4751H15.5V2.4751H4.5V16.4751Z"
                      fill="#F4F4F5"
                    />
                  </svg>
                </div>
              </Clipboard>
            </div>
          )}
          {copied && (
            <div className="absolute top-8 right-8 z-10">
              <div className="flex items-center" onClick={() => null}>
                <div className="text-sm text-primary flex items-center gap-2">
                  Copied to clipboard
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.58075 14.2538L15.3038 7.53075L14.25 6.47693L8.58075 12.1462L5.73075 9.29615L4.67693 10.35L8.58075 14.2538ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749442 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749333 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Status;
