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
      d="M5 8L10 16"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M18.7224 20.5C20.2145 17.9157 21 14.9841 21 12C21 9.01588 20.2145 6.08433 18.7224 3.5"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M14.3923 18C15.4455 16.1758 16 14.1064 16 12C16 9.89356 15.4455 7.82423 14.3923 6"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M9.9282 16C10.6303 14.7838 11 13.4043 11 12C11 10.5957 10.6303 9.21615 9.9282 8"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M5.0718 16C4.36965 14.7838 4 13.4043 4 12C4 10.5957 4.36965 9.21615 5.0718 8"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
