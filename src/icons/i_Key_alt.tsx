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
      d="M3 7C3 5.59987 3 4.8998 3.27248 4.36502C3.51217 3.89462 3.89462 3.51217 4.36502 3.27248C4.8998 3 5.59987 3 7 3H17C18.4001 3 19.1002 3 19.635 3.27248C20.1054 3.51217 20.4878 3.89462 20.7275 4.36502C21 4.8998 21 5.59987 21 7V17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21H7C5.59987 21 4.8998 21 4.36502 20.7275C3.89462 20.4878 3.51217 20.1054 3.27248 19.635C3 19.1002 3 18.4001 3 17V7Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <circle cx="8" cy="12" r="2" stroke="currentColor" stroke-width="2" />
    <path
      d="M10 12H14M17 14V12.15C17 12.0672 16.9328 12 16.85 12H14M14 12V14"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
