import * as React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { slideAnimation } from '../../../animations';
import { useEffect } from 'react';

type SlideScreenProps = {
  display: boolean;
};

export const SlideScreen: React.FC<React.PropsWithChildren<SlideScreenProps>> = ({ display, children }) => {
  const transition: any = useTransition(display, slideAnimation as any);

  useEffect(() => {
    if (display) {
      window.scrollTo(0, 0);
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [display])

  return (
    <div>
      {transition((style, display) => (
        <div>
          {display && (
            <div className="bg-black mx-auto fixed w-full h-full z-[60] text-black">
              {display && (
                <div className="relative z-[60] h-full w-full">
                  <animated.div
                    style={style}
                    className="modal h-full text-white box-shadow-lg mx-auto relative overflow-hidden"
                  >
                    {children}
                  </animated.div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SlideScreen;
