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
      <Canvas shadows orthographic camera={{ zoom: 20, position: [150, 125, 150] }} style={{ background: '#0f0b26' }}>
        <OrbitControls
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 3}
          minZoom={20}
          maxZoom={50}
          dampingFactor={0.025}
        />
        {children}
      </Canvas>
    </div>
  );
};
