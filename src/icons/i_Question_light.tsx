const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" />
    <path
      d="M12 16V15.1432C12 14.429 12.357 13.762 12.9512 13.3659L13.5497 12.9669C14.4558 12.3628 15 11.3459 15 10.2569V10C15 8.34315 13.6569 7 12 7V7C10.3431 7 9 8.34315 9 10V10"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
