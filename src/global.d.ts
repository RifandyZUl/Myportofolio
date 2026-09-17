declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}
