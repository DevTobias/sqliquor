'use client';

import { FC, ReactNode, useRef, useState } from 'react';

import Button from '$lib/components/Button';
import { Icon } from '$lib/components/Icon';
import { useClickAway } from '$lib/hooks/useClickAway';
import { classNames } from '$lib/utils/classNames';

import styles from './Dropdown.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Dropdown: FC<Props> = ({ children, className = '' }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  useClickAway(dropdownRef, () => setOpen(false));

  return (
    <div className={classNames(styles['dropdown-wrapper'], className)} ref={dropdownRef}>
      <Button variant='glass' className={styles.btn} onClick={() => setOpen(!open)}>
        <Icon icon='user' />
      </Button>

      <div className={classNames(styles.dropdown, open && styles.open)}>{children}</div>
    </div>
  );
};
