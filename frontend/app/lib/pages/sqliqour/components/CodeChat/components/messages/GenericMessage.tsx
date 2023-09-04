import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import { useMeasure } from '$lib/hooks/useMeasure';
import { classNames } from '$lib/utils/classNames';
import { debounce } from '$lib/utils/debounce';

import styles from './GenericMessage.module.scss';

interface Props {
  position: 'left' | 'right';
  className?: string;
  onClick?: VoidFunction;
  selected?: boolean;
}

export const GenericMessage: FC<PropsWithChildren<Props>> = ({ children, position, className = '', onClick, selected = false }) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const wrapperDiv = useRef<HTMLDivElement>(null!);

  const [whiteSpaceNormal, setWhiteSpaceNormal] = useState(false);

  const setFullWidth = debounce(() => setWhiteSpaceNormal(true), 100);

  useEffect(() => {
    if (wrapperDiv.current.clientWidth < width) setFullWidth();
  }, [width, wrapperDiv.current?.clientWidth, setFullWidth]);

  return (
    <div
      className={classNames(styles.container, onClick && styles.clickable)}
      style={{ justifyContent: position === 'left' ? 'flex-start' : 'flex-end' }}
      onClick={onClick}
    >
      <div
        className={classNames(styles.message, selected && styles.selected, className)}
        style={{ height: height > 0 ? height : 'auto', width: width > 0 ? width + 30 : 'auto' }}
        ref={wrapperDiv}
      >
        <div ref={ref} style={{ width: 'fit-content', whiteSpace: whiteSpaceNormal ? 'normal' : 'nowrap' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
