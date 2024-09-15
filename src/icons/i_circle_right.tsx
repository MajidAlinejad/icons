const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 11L14 15L10 19" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.7942 12.75C20.7848 11.8921 21.1816 10.8948 20.923 9.91263C20.6644 8.9305 19.7649 8.01848 18.364 7.31802C16.963 6.61756 15.139 6.1678 13.1747 6.0385C11.2105 5.9092 9.21578 6.10758 7.5 6.60289C5.78422 7.09819 4.44326 7.86273 3.68508 8.77792C2.92691 9.69312 2.79389 10.7078 3.30667 11.6647C3.81944 12.6215 4.94935 13.467 6.52115 14.0701C8.09295 14.6731 10.0188 15 12 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
