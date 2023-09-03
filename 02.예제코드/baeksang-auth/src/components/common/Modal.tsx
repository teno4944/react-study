import { Portal } from '@/components';
import { PropsWithChildren, useCallback, useRef, useState } from 'react';

export type ModalProps = {
  isOpen?: boolean;
};

export const Modal = ({ children, isOpen = false }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <Portal name="modal-container" unmountOnExit>
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black/90">
          {children}
        </div>
      </Portal>
    </>
  );
};
