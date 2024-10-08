const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <path d="M12 8V4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 20V16" stroke="currentColor" strokeWidth="2" />
    <path
      d="M9.17157 9.1712L6.34314 6.34277"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M17.6568 17.6566L14.8284 14.8281"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M16 12L20 12" stroke="currentColor" strokeWidth="2" />
    <path d="M4 12L8 12" stroke="currentColor" strokeWidth="2" />
    <path
      d="M14.8284 9.1712L17.6569 6.34277"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M6.3432 17.6566L9.17163 14.8281"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
