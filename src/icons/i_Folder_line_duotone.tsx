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
      d="M3 7H19C20.1046 7 21 7.89543 21 9H3V7Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M3 10H21V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H7.8C6.11984 19 5.27976 19 4.63803 18.673C4.07354 18.3854 3.6146 17.9265 3.32698 17.362C3 16.7202 3 15.8802 3 14.2V10Z"
      fill="currentColor"
    />
    <path
      d="M3 7C3 6.06812 3 5.60218 3.15224 5.23463C3.35523 4.74458 3.74458 4.35523 4.23463 4.15224C4.60218 4 5.06812 4 6 4H8.34315C9.16065 4 9.5694 4 9.93694 4.15224C10.3045 4.30448 10.5935 4.59351 11.1716 5.17157L13 7H3Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
  </svg>
);
export default SvgComponent;
