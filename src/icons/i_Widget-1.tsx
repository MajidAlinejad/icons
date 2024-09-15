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
      d="M2 12C2 10.1308 2 9.19615 2.40192 8.5C2.66523 8.04394 3.04394 7.66523 3.5 7.40192C4.19615 7 5.13077 7 7 7H17C18.8692 7 19.8038 7 20.5 7.40192C20.9561 7.66523 21.3348 8.04394 21.5981 8.5C22 9.19615 22 10.1308 22 12C22 13.8692 22 14.8038 21.5981 15.5C21.3348 15.9561 20.9561 16.3348 20.5 16.5981C19.8038 17 18.8692 17 17 17H7C5.13077 17 4.19615 17 3.5 16.5981C3.04394 16.3348 2.66523 15.9561 2.40192 15.5C2 14.8038 2 13.8692 2 12Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M19 4C19 2.89543 18.1046 2 17 2H7C5.89543 2 5 2.89543 5 4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M19 20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="5.5"
      y="10.5"
      width="5"
      height="1"
      rx="0.5"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
