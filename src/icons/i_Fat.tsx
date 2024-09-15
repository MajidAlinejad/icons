const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15 12L15.3903 11.5409C16.3112 10.4575 18.0791 11.2093 17.9376 12.6241V12.6241C17.79 14.0995 19.6904 14.8188 20.5568 13.6155L21 13"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 12.5L8.98404 12.5851C8.66236 14.3007 6.2136 14.3253 5.85759 12.6164L5.82217 12.4464C5.53532 11.0695 3.69777 10.7789 3 12V12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="9.5" cy="6.5" r="0.5" stroke="currentColor" />
    <circle cx="16.5" cy="8.5" r="0.5" stroke="currentColor" />
    <circle cx="13.5" cy="5.5" r="0.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
