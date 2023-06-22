import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FC, ReactNode } from 'react';

import styles from './ThreeScene.module.scss';

interface Props {
  children: ReactNode;
}

export const ThreeScene: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Canvas shadows>
        <OrbitControls />
        {children}
      </Canvas>
    </div>
  );
};
