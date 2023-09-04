export const config = {
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  cmsUrl: process.env.NEXT_PUBLIC_CMS_URL,

  assets: {
    environmentGLB: '/models/environment.glb',
    barGLB: '/models/bar.glb',
    sampleCharactersGLB: '/models/sample_characters.glb',
  },
};
