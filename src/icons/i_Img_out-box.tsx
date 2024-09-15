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
      d="M21 3V2H22V3H21ZM16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289L16.7071 8.70711ZM20 8V3H22V8H20ZM21 4H16V2H21V4ZM21.7071 3.70711L16.7071 8.70711L15.2929 7.29289L20.2929 2.29289L21.7071 3.70711Z"
      fill="currentColor"
    />
    <path
      d="M12 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V12"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M7.5 10.5L10.7966 15.2616C11.4501 16.2055 12.7625 16.4067 13.6688 15.7018L15.2721 14.4548C15.9944 13.8931 17.0056 13.8931 17.7279 14.4548L21 16.9998"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
