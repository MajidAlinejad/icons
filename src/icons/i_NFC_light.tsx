const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 8L11 16" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M17.7224 20.5C19.2145 17.9157 20 14.9841 20 12C20 9.01588 19.2145 6.08433 17.7224 3.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M14.3923 18C15.4455 16.1758 16 14.1064 16 12C16 9.89356 15.4455 7.82423 14.3923 6"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M10.9282 16C11.6303 14.7838 12 13.4043 12 12C12 10.5957 11.6303 9.21615 10.9282 8"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M6.0718 16C5.36965 14.7838 5 13.4043 5 12C5 10.5957 5.36965 9.21615 6.0718 8"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
