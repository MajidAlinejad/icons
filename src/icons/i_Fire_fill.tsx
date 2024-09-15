const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 12.5002C19 15.0932 17.3649 17.3315 15 18.3747V14.6458C15.6224 13.9407 16 13.0144 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 13.0144 8.37764 13.9407 9 14.6458V18.3747C6.63505 17.3315 5 15.0932 5 12.5002C5 6.83672 11.2369 3.40067 11.9364 3.03307C11.9782 3.01111 12.0218 3.01111 12.0636 3.03307C12.7631 3.40067 19 6.83672 19 12.5002Z"
      fill="currentColor"
    />
    <path d="M12 21V12" stroke="currentColor" stroke-width="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
export default SvgComponent;
