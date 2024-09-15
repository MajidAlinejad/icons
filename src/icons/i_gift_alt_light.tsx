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
      d="M2.5 11C2.5 10.1716 3.17157 9.5 4 9.5H20C20.8284 9.5 21.5 10.1716 21.5 11V11C21.5 11.8284 20.8284 12.5 20 12.5H4C3.17157 12.5 2.5 11.8284 2.5 11V11Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M4.5 12.5V19.7C4.5 19.98 4.5 20.12 4.5545 20.227C4.60243 20.3211 4.67892 20.3976 4.773 20.4455C4.87996 20.5 5.01997 20.5 5.3 20.5H18.7C18.98 20.5 19.12 20.5 19.227 20.4455C19.3211 20.3976 19.3976 20.3211 19.4455 20.227C19.5 20.12 19.5 19.98 19.5 19.7V12.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M13.5 7V9.5H9.5C7.84315 9.5 6.5 8.15685 6.5 6.5C6.5 4.84315 7.84315 3.5 9.5 3.5H10C11.933 3.5 13.5 5.067 13.5 7Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M13.5 7V9.5H16C17.3807 9.5 18.5 8.38071 18.5 7C18.5 5.61929 17.3807 4.5 16 4.5C14.6193 4.5 13.5 5.61929 13.5 7Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M13.5 12.5V20.5" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
