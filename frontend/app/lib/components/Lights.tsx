'use client';

import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import { useMemo, useRef } from 'react';
import { PointLightHelper, SpotLight, PointLight, DirectionalLightHelper, DirectionalLight } from 'three';

export function Lights() {
  /* Spawn in general lighting */
  const sunlight = useMemo(() => new DirectionalLight(), []);
  const backlight = useMemo(() => new DirectionalLight(), []);
  sunlight.castShadow = true;
  sunlight.shadow.camera.far = 20;
  sunlight.shadow.mapSize.set(1024, 1024);
  sunlight.shadow.normalBias = 0.05;

  /* Spawn in street lights */
  const spotlight1 = useMemo(() => new SpotLight(), []);
  const spotlight2 = useMemo(() => new SpotLight(), []);
  const spotlight3 = useMemo(() => new SpotLight(), []);
  const spotlight4 = useMemo(() => new SpotLight(), []);
  const spotlight5 = useMemo(() => new SpotLight(), []);
  const spotlight6 = useMemo(() => new SpotLight(), []);
  const spotlight7 = useMemo(() => new SpotLight(), []);
  const spotlight8 = useMemo(() => new SpotLight(), []);
  const spotlight9 = useMemo(() => new SpotLight(), []);
  const spotlight10 = useMemo(() => new SpotLight(), []);
  const spotlight11 = useMemo(() => new SpotLight(), []);
  const spotlight12 = useMemo(() => new SpotLight(), []);
  const spotlight13 = useMemo(() => new SpotLight(), []);
  const spotlight14 = useMemo(() => new SpotLight(), []);
  const spotlight15 = useMemo(() => new SpotLight(), []);

  /* Debug lighting */
  const pointLightRef1 = useRef<PointLight>(null!);
  const pointLightRef2 = useRef<PointLight>(null!);
  const directionalLightRef1 = useRef<DirectionalLight>(null!);
  const directionalLightRef2 = useRef<DirectionalLight>(null!);
  const { showLightHelpers } = useControls({ showLightHelpers: false });
  useHelper(showLightHelpers && directionalLightRef1, DirectionalLightHelper, 1, 'red');
  useHelper(showLightHelpers && directionalLightRef2, DirectionalLightHelper, 1, 'cyan');
  useHelper(showLightHelpers && pointLightRef1, PointLightHelper, 1, 'yellow');
  useHelper(showLightHelpers && pointLightRef2, PointLightHelper, 1, 'yellow');

  return (
    <>
      castShadow receiveShadow shadow.mapSize.set(1024, 1024)
      <group>
        <primitive
          ref={directionalLightRef1}
          object={sunlight}
          position={[23, 20, 23]}
          intensity={2.5}
          color={'#5e5aac'}
          rotation={[-0.565, 0.645, 0.292]}
        />
        <primitive object={sunlight.target} position={[-23, 0, -23]} />
      </group>
      <group>
        <primitive
          ref={directionalLightRef2}
          object={backlight}
          position={[-23, 20, -23]}
          intensity={0.5}
          color={'#716aff'}
          rotation={[-0.565, 0.645, 0.292]}
        />
        <primitive object={backlight.target} position={[23, 0, 23]} />
      </group>
      <group>
        <primitive
          object={spotlight1}
          position={[-27.162, 15.301, 0.474]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight1.target} position={[-27.162, 0, 0.474]} />
      </group>
      <group>
        <primitive
          object={spotlight2}
          position={[-51.566, 15.301, -34.464]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight2.target} position={[-51.566, 0, -34.464]} />
      </group>
      <group>
        <primitive
          object={spotlight3}
          position={[-72.537, 15.301, -32.856]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight3.target} position={[-72.537, 0, -32.856]} />
      </group>
      <group>
        <primitive
          object={spotlight4}
          position={[-0.91, 15.301, -26.281]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight4.target} position={[-0.91, 0, -26.281]} />
      </group>
      <group>
        <primitive
          object={spotlight5}
          position={[71.541, 15.301, -26.349]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight5.target} position={[71.541, 0, -26.349]} />
      </group>
      <group>
        <primitive
          object={spotlight6}
          position={[35.187, 15.301, -34.265]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight6.target} position={[35.187, 0, -34.265]} />
      </group>
      <group>
        <primitive
          object={spotlight7}
          position={[-25.069, 15.301, -43.305]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight7.target} position={[-25.069, 0, -43.305]} />
      </group>
      <group>
        <primitive
          object={spotlight8}
          position={[-33.832, 15.301, -60.669]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight8.target} position={[-33.832, 0, -60.669]} />
      </group>
      <group>
        <primitive
          object={spotlight9}
          position={[-25.482, 15.301, -77.405]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight9.target} position={[-25.482, 0, -77.405]} />
      </group>
      <group>
        <primitive
          object={spotlight10}
          position={[-32.618, 15.301, -105.058]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight10.target} position={[-32.618, 0, -105.058]} />
      </group>
      <group>
        <primitive
          object={spotlight11}
          position={[-60.453, 15.301, 22.663]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight11.target} position={[-60.453, 0, 22.663]} />
      </group>
      <group>
        <primitive
          object={spotlight12}
          position={[-33.772, 15.301, 60.431]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight12.target} position={[-33.772, 0, 60.431]} />
      </group>
      <group>
        <primitive
          object={spotlight13}
          position={[59.427, 15.301, 33.712]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight13.target} position={[59.427, 0, 33.712]} />
      </group>
      <group>
        <primitive
          object={spotlight14}
          position={[37.339, 15.301, 0.402]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight14.target} position={[37.339, 0, 0.402]} />
      </group>
      <group>
        <primitive
          object={spotlight15}
          position={[0.996, 15.301, 36.531]}
          intensity={1}
          angle={1}
          penumbra={0.75}
          decay={2}
          color={'#ffc18b'}
          rotation={[-Math.PI / 2, 2, 2]}
          scale={[0.878, 0.502, 0.502]}
        />
        <primitive object={spotlight15.target} position={[0.996, 0, 36.531]} />
      </group>
      <pointLight
        ref={pointLightRef1}
        intensity={1}
        distance={50}
        decay={2}
        color='#ff0000'
        position={[-27.886, 10.142, -42.871]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        ref={pointLightRef2}
        intensity={1}
        distance={50}
        decay={2}
        color='#ff0000'
        position={[-23.059, 10.142, -42.871]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </>
  );
}
