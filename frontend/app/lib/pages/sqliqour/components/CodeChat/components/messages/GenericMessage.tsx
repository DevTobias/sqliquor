import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import { useMeasure } from '$lib/hooks/useMeasure';
import { classNames } from '$lib/utils/classNames';
import { debounce } from '$lib/utils/debounce';

import styles from './GenericMessage.module.scss';

interface Props {
  className?: string;
  position: 'left' | 'right';
}

export const GenericMessage: FC<PropsWithChildren<Props>> = ({ children, position, className = '' }) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const wrapperDiv = useRef<HTMLDivElement>(null!);

  const [whiteSpaceNormal, setWhiteSpaceNormal] = useState(false);

  const setFullWidth = debounce(() => setWhiteSpaceNormal(true), 100);

  useEffect(() => {
    if (wrapperDiv.current.clientWidth < width) setFullWidth();
  }, [width, wrapperDiv.current?.clientWidth, setFullWidth]);

  return (
    <div className={styles.container} style={{ justifyContent: position === 'left' ? 'flex-start' : 'flex-end' }}>
      <div
        className={classNames(styles.message, className)}
        style={{ height: height > 0 ? height + 30 : 'auto', width: width > 0 ? width + 30 : 'auto' }}
        ref={wrapperDiv}
      >
        <div ref={ref} style={{ width: 'fit-content', whiteSpace: whiteSpaceNormal ? 'normal' : 'nowrap' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
