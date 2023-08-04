import { createTagAppendToBody } from '@/utils';
import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  name?: string;
  type?: 'class' | 'id';
  tagName?: string;
  unmountOnExit?: boolean;
};

export const Portal = ({
  children,
  name,
  type = 'class',
  tagName = 'div',
  unmountOnExit = false,
}: PropsWithChildren<PortalProps>) => {
  const wrapperElement = name ? createTagAppendToBody({ name, type, tagName }) : document.body;

  useEffect(() => {
    return () => {
      // 컴포넌트 Unmount할 때 실행 됨
      if (unmountOnExit && wrapperElement.parentNode) {
        wrapperElement.parentNode.removeChild(wrapperElement);
        // console.log('Unmounted!');
      }
    };
  }, [unmountOnExit]);

  if (!(wrapperElement && children)) {
    return null;
  }

  return <>{createPortal(children, wrapperElement)}</>;
};
