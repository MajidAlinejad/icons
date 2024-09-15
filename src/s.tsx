const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={48} height={1} {...props}>
    <title>{"Rectangle 5"}</title>
    <path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
  </svg>
);
export default SvgComponent;
