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
      d="M5.34717 10.3339C5.41971 9.46346 5.45598 9.02824 5.74302 8.76412C6.03007 8.5 6.4668 8.5 7.34027 8.5H16.6597C17.5332 8.5 17.9699 8.5 18.257 8.76412C18.544 9.02824 18.5803 9.46346 18.6528 10.3339L18.8772 13.0259C19.1202 15.9422 19.2417 17.4004 18.6308 18.4758C18.3302 19.0049 17.9129 19.4584 17.4106 19.8019C16.3896 20.5 14.9264 20.5 12 20.5V20.5C9.07359 20.5 7.61038 20.5 6.58943 19.8019C6.08711 19.4584 5.66979 19.0049 5.36922 18.4758C4.7583 17.4004 4.87982 15.9422 5.12284 13.0259L5.34717 10.3339Z"
      stroke="#7E869E"
      stroke-opacity="0.25"
    />
    <path
      d="M8.5 7L8.5 6.5C8.5 4.567 10.067 3 12 3V3C13.933 3 15.5 4.567 15.5 6.5L15.5 7"
      stroke="currentColor"
    />
    <path d="M8.5 12.5V11" stroke="currentColor" strokeLinecap="round" />
    <path d="M15.5 12.5V11" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
