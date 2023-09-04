import { Autofocus, Bloom, EffectComposer } from '@react-three/postprocessing';

export const ScenePostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom />
      <Autofocus focalLength={0.2} bokehScale={15} target={[0, 0, 0]} />
    </EffectComposer>
  );
};
