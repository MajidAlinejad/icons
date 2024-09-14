// svgr.d.ts
declare module "*.svg" {
  import { ComponentPropsWithRef } from "react";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export default (props: ComponentPropsWithRef<"svg">) => JSX.Element;
}
