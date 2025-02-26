import * as React from 'react';
import { useState } from 'react';
import Modal from '../UI/Modal';

type TitleBlockProps = {
  title: string;
  info?: {
    title: string;
    textContent: string;
  };
};

const TitleBlock: React.FC<React.PropsWithChildren<TitleBlockProps>> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const displayInfo = () => setShowInfo(true);
  const hideInfo = () => setShowInfo(false);

  return (
    <>
      <Modal display={showInfo} frosted closeAtBottom={hideInfo}>
        <div className="text-center">
          <h1 className="text-lg pb-6">{info?.title}</h1>
          <p className="text-core-grey-40 text-base mb-3">{info?.textContent}</p>
        </div>
      </Modal>
      <h5 className="px-4 py-3 rounded-md core-black-contrast text-lg flex items-center">
        {title}
        {info && (
          <svg
            onClick={displayInfo}
            className="mx-2 cursor-pointer"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0001 11C7.2225 11 7.4113 10.9221 7.5665 10.7664C7.72223 10.6112 7.8001 10.4224 7.8001 10.2C7.8001 9.9776 7.72223 9.7888 7.5665 9.6336C7.4113 9.47787 7.2225 9.4 7.0001 9.4C6.7777 9.4 6.5889 9.47787 6.4337 9.6336C6.27796 9.7888 6.2001 9.9776 6.2001 10.2C6.2001 10.4224 6.27796 10.6112 6.4337 10.7664C6.5889 10.9221 6.7777 11 7.0001 11ZM6.4001 8.4496H7.6169C7.6169 8.03893 7.6529 7.74747 7.7249 7.5752C7.79743 7.40293 7.97236 7.18347 8.2497 6.9168C8.63903 6.5392 8.90863 6.21706 9.0585 5.9504C9.20836 5.68373 9.2833 5.38907 9.2833 5.0664C9.2833 4.45573 9.07503 3.95867 8.6585 3.5752C8.24196 3.19173 7.7113 3 7.0665 3C6.5001 3 6.00863 3.14986 5.5921 3.4496C5.17503 3.74987 4.8833 4.15547 4.7169 4.6664L5.8001 5.1168C5.90036 4.80533 6.05876 4.56373 6.2753 4.392C6.49183 4.21973 6.74463 4.1336 7.0337 4.1336C7.34463 4.1336 7.6001 4.2224 7.8001 4.4C8.0001 4.5776 8.1001 4.81093 8.1001 5.1C8.1001 5.35547 8.01396 5.5832 7.8417 5.7832C7.66943 5.9832 7.4777 6.1776 7.2665 6.3664C6.8777 6.72213 6.6361 7.01387 6.5417 7.2416C6.4473 7.46933 6.4001 7.872 6.4001 8.4496ZM7.0001 13.4C6.12223 13.4 5.2945 13.2333 4.5169 12.9C3.7393 12.5667 3.05876 12.1083 2.4753 11.5248C1.89183 10.9413 1.43343 10.2608 1.1001 9.4832C0.766764 8.7056 0.600098 7.87787 0.600098 7C0.600098 6.11093 0.766764 5.28027 1.1001 4.508C1.43343 3.73627 1.89183 3.05867 2.4753 2.4752C3.05876 1.89173 3.7393 1.43333 4.5169 1.1C5.2945 0.766665 6.12223 0.599998 7.0001 0.599998C7.88916 0.599998 8.71983 0.766665 9.4921 1.1C10.2638 1.43333 10.9414 1.89173 11.5249 2.4752C12.1084 3.05867 12.5668 3.73627 12.9001 4.508C13.2334 5.28027 13.4001 6.11093 13.4001 7C13.4001 7.87787 13.2334 8.7056 12.9001 9.4832C12.5668 10.2608 12.1084 10.9413 11.5249 11.5248C10.9414 12.1083 10.2638 12.5667 9.4921 12.9C8.71983 13.2333 7.88916 13.4 7.0001 13.4Z"
              fill="#91919D"
            />
          </svg>
        )}
      </h5>
    </>
  );
};

export default TitleBlock;
