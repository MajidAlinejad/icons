const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 8L5 16" stroke="currentColor" strokeLinejoin="round" />
    <path
      d="M5.22361 4.44721L6.71056 7.42111C6.84354 7.68707 6.65014 8 6.35279 8L3.64721 8C3.34986 8 3.15646 7.68707 3.28944 7.42111L4.77639 4.44721C4.86852 4.26295 5.13148 4.26295 5.22361 4.44721Z"
      fill="currentColor"
    />
    <path
      d="M5.22361 19.5528L6.71056 16.5789C6.84354 16.3129 6.65014 16 6.35279 16L3.64721 16C3.34986 16 3.15646 16.3129 3.28944 16.5789L4.77639 19.5528C4.86852 19.737 5.13148 19.737 5.22361 19.5528Z"
      fill="currentColor"
    />
    <path d="M11 8H19" stroke="currentColor" strokeLinecap="round" />
    <path d="M11 12H19" stroke="currentColor" strokeLinecap="round" />
    <path d="M11 16H19" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
