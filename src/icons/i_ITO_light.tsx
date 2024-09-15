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
      d="M5.5 7C5.5 6.17157 6.17157 5.5 7 5.5H15C16.933 5.5 18.5 7.067 18.5 9V17C18.5 17.8284 17.8284 18.5 17 18.5H7C6.17157 18.5 5.5 17.8284 5.5 17V7Z"
      stroke="currentColor"
    />
    <path d="M9 6V2" stroke="currentColor" />
    <path d="M9 22V18" stroke="currentColor" />
    <path d="M15 22V18" stroke="currentColor" />
    <path d="M22 15L18 15" stroke="currentColor" />
    <path d="M6 15L2 15" stroke="currentColor" />
    <path d="M6 9L2 9" stroke="currentColor" />
    <path
      d="M15 3V3C16.8638 3 17.7956 3 18.5307 3.30448C19.5108 3.71046 20.2895 4.48915 20.6955 5.46927C21 6.20435 21 7.13623 21 9V9"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
