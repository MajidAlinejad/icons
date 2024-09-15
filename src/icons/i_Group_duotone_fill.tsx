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
      d="M11.0126 16.5002C11.1557 13.6757 12.5251 11 15.5 11C18.4749 11 19.8443 13.6757 19.9874 16.5002C20.0014 16.7759 19.7761 17 19.5 17H11.5C11.2239 17 10.9986 16.7759 11.0126 16.5002Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path
      d="M4.0126 16.5002C4.15567 13.6757 5.52513 11 8.5 11C11.4749 11 12.8443 13.6757 12.9874 16.5002C13.0014 16.7759 12.7761 17 12.5 17H4.5C4.22386 17 3.99863 16.7759 4.0126 16.5002Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <circle cx="15.5" cy="7.5" r="2.5" fill="#2A4157" fillOpacity="0.24" />
    <circle
      cx="2.5"
      cy="2.5"
      r="2.5"
      transform="matrix(-1 0 0 1 11 5)"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path
      d="M7.01399 17.5002C7.17295 14.6757 8.69457 12 12 12C15.3054 12 16.827 14.6757 16.986 17.5002C17.0015 17.7759 16.7761 18 16.5 18H7.5C7.22386 18 6.99848 17.7759 7.01399 17.5002Z"
      fill="currentColor"
    />
    <circle cx="12" cy="8" r="3" fill="currentColor" />
  </svg>
);
export default SvgComponent;
