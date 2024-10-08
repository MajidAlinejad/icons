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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 10C2.67157 10 2 10.6716 2 11.5C2 12.3284 2.67157 13 3.5 13H20.5C21.3284 13 22 12.3284 22 11.5C22 10.6716 21.3284 10 20.5 10H3.5ZM4 20V14H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M13.5 7V9.5H9.5C7.84315 9.5 6.5 8.15685 6.5 6.5C6.5 4.84315 7.84315 3.5 9.5 3.5H10C11.933 3.5 13.5 5.067 13.5 7Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M13.5 7V9.5H16C17.3807 9.5 18.5 8.38071 18.5 7C18.5 5.61929 17.3807 4.5 16 4.5C14.6193 4.5 13.5 5.61929 13.5 7Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M13.5 9V20" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
