// src/declarations.d.ts
declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any; // Use 'any' as a fallback type
  export default content;
}
