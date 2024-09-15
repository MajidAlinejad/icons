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
      d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 15L5.8055 12.1945C6.68783 11.3122 8.1538 11.4443 8.86408 12.4703L10.7664 15.218C11.4311 16.1781 12.7735 16.3669 13.6773 15.6275L16.0991 13.646C16.8944 12.9954 18.0533 13.0532 18.7798 13.7798L21 16"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="16" cy="8" r="2" fill="currentColor" />
  </svg>
);
export default SvgComponent;
