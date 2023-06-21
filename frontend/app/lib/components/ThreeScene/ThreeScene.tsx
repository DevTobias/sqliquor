import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import styles from './ThreeScene.module.css';

export const ThreeScene = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles['game-container']}>
      <Canvas shadows>
        <OrbitControls />
        {children}
      </Canvas>
    </div>
  );
};
