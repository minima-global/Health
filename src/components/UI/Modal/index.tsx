import { PropsWithChildren, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { modalAnimation } from '../../../animations';
import Button from '../Button';

type ModalProps = {
  display: boolean;
  frosted: boolean;
  closeAtBottom?: () => void;
};

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  frosted = false,
  closeAtBottom,
  display,
  children,
}) => {
  const transition: any = useTransition(display, modalAnimation as any);

  useEffect(() => {
    if (display) {
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
            <div className="mx-auto fixed top-0 left-0 w-full h-full z-[80] flex items-center justify-center text-black">
              <div className="relative z-[80] w-full max-w-md px-5">
                <animated.div
                  style={style}
                  className="modal mb-8 text-white core-black-contrast-2 box-shadow-lg rounded p-8 mx-auto relative overflow-hidden"
                >
                  {children}
                </animated.div>
              </div>
              {closeAtBottom && (
                <div className="absolute bottom-10 w-full px-8 z-[90]">
                  <Button variant="secondary" onClick={closeAtBottom}>
                    Close
                  </Button>
                </div>
              )}
              {frosted && <div className="fixed z-[70] backdrop-blur-2xl bg-black/50 top-0 left-0 w-full h-full"></div>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Modal;
