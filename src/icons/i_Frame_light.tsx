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
      d="M8 3V4C8 5.88562 8 6.82843 7.41421 7.41421C6.82843 8 5.88562 8 4 8H3"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M16 3V4C16 5.88562 16 6.82843 16.5858 7.41421C17.1716 8 18.1144 8 20 8H21"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M8 21V20C8 18.1144 8 17.1716 7.41421 16.5858C6.82843 16 5.88562 16 4 16H3"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M16 21V20C16 18.1144 16 17.1716 16.5858 16.5858C17.1716 16 18.1144 16 20 16H21"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
