const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 20.1384V3.86159C19 3.47768 18.5853 3.23699 18.2519 3.42747L15.9961 4.71649C15.6887 4.89217 15.3113 4.89217 15.0039 4.71649L12.7938 3.45361C12.3019 3.17253 11.6981 3.17253 11.2062 3.45361L8.99614 4.71649C8.68871 4.89217 8.31129 4.89217 8.00386 4.71649L5.74807 3.42747C5.41474 3.23699 5 3.47768 5 3.86159V20.1384C5 20.5223 5.41474 20.763 5.74807 20.5725L8.00386 19.2835C8.31129 19.1078 8.68871 19.1078 8.99614 19.2835L11.2062 20.5464C11.6981 20.8275 12.3019 20.8275 12.7938 20.5464L15.0039 19.2835C15.3113 19.1078 15.6887 19.1078 15.9961 19.2835L18.2519 20.5725C18.5853 20.763 19 20.5223 19 20.1384Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M10 9H14"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M10 15H14"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M10 12H14"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
