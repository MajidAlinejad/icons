const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M11.3739 12.0161L5.29325 8.9758C4.86838 8.76337 4.6 8.32912 4.6 7.8541C4.6 7.16148 5.16148 6.6 5.8541 6.6H18.1459C18.8385 6.6 19.4 7.16148 19.4 7.8541C19.4 8.32912 19.1316 8.76337 18.7067 8.9758L12.6261 12.0161C12.232 12.2132 11.768 12.2132 11.3739 12.0161Z"
      fill="#7E869E"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);
export default SvgComponent;
