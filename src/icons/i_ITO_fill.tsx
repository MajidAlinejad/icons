const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" />
    <path d="M9 6V2" stroke="currentColor" strokeWidth="2" />
    <path d="M9 22V18" stroke="currentColor" strokeWidth="2" />
    <path d="M15 22V18" stroke="currentColor" strokeWidth="2" />
    <path d="M22 15L18 15" stroke="currentColor" strokeWidth="2" />
    <path d="M6 15L2 15" stroke="currentColor" strokeWidth="2" />
    <path d="M6 9L2 9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15 3V3C16.8638 3 17.7956 3 18.5307 3.30448C19.5108 3.71046 20.2895 4.48915 20.6955 5.46927C21 6.20435 21 7.13623 21 9V9"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
