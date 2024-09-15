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
      d="M4.53652 19H15.4635C16.1107 19 16.49 18.2715 16.1189 17.7412L10.6554 9.93627C10.3369 9.48129 9.66309 9.48129 9.34461 9.93627L3.88114 17.7412C3.50998 18.2715 3.88931 19 4.53652 19Z"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M11 19H19.5566C20.185 19 20.568 18.3088 20.235 17.776L16.6784 12.0854C16.3651 11.5841 15.6349 11.5841 15.3216 12.0854L13.8888 14.378"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <circle cx="18.5" cy="6.5" r="2.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
