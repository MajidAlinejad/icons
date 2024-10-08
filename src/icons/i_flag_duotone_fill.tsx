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
      d="M17.7078 7.5301L8.03965 4.01442C8.01342 4.00488 7.98572 4 7.95781 4C7.42883 4 7 4.42883 7 4.95781V11.0422C7 11.5712 7.42883 12 7.95781 12C7.98572 12 8.01342 11.9951 8.03965 11.9856L17.7078 8.4699C18.2482 8.27337 18.5185 8.17511 18.5185 8C18.5185 7.82489 18.2482 7.72663 17.7078 7.5301Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <rect x="7" y="3" width="1" height="17" rx="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
