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
    }

    document.body.style.overflow = display ? 'hidden' : 'unset';
  }, [display]);

  return (
    <div>
      {transition((style, display) => (
        <div>
          {display && (
            <div className="bg-black mx-auto fixed w-full h-full z-[10] text-black">
              {display && (
                <div className="relative z-[10] h-full w-full">
                  <animated.div
                    style={style}
                    className="modal h-full text-white box-shadow-lg mx-auto relative overflow-y-scroll custom-scrollbar"
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
