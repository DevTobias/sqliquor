import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Button from '$lib/components/Button';
import { Icon } from '$lib/components/Icon';
import { classNames } from '$lib/utils/classNames';

import styles from './Popup.module.scss';

interface Props {
  children: ReactNode;
  visible: boolean;
  setVisible?: (value: boolean) => void;
}

export const Popup: FC<Props> = ({ children, visible, setVisible }) => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.popup, visible && styles.visible)}>
        {setVisible && (
          <Button className={styles.close} variant='ghost' onClick={() => setVisible(false)}>
            <Icon icon='exit' />
          </Button>
        )}
        {children}
      </div>
      <Toaster />
    </div>
  );
};
