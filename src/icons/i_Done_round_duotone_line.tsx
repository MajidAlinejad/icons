const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="14" r="7" fill="#7E869E" fillOpacity="0.25" />
    <path
      d="M6 13L9.21391 15.4104C9.65027 15.7377 10.2684 15.6549 10.6033 15.2244L17 7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
