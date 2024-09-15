const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="17" cy="6" r="2" fill="currentColor" />
    <path
      d="M5.22641 11.1447L3.71963 12.4003C3.36576 12.6952 3.18882 12.8426 3.09441 13.0442C3 13.2458 3 13.4761 3 13.9367V16C3 17.8856 3 18.8284 3.58579 19.4142C4.17157 20 5.11438 20 7 20H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V15.8284C20 15.4197 20 15.2153 19.9239 15.0315C19.8478 14.8478 19.7032 14.7032 19.4142 14.4142L19.4142 14.4142L18.3008 13.3008C17.4728 12.4728 17.0588 12.0588 16.5777 11.9137C16.2009 11.8 15.7991 11.8 15.4223 11.9137C14.9412 12.0588 14.5272 12.4728 13.6992 13.3008C13.1138 13.8862 12.8212 14.1788 12.5102 14.2334C12.2685 14.2758 12.0197 14.2279 11.811 14.0988C11.5425 13.9326 11.3795 13.5522 11.0534 12.7913L10.935 12.515C10.1361 10.6509 9.73666 9.71888 8.98531 9.40712C8.79066 9.32635 8.58447 9.27686 8.37436 9.26047C7.56336 9.1972 6.78438 9.84635 5.22641 11.1447Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
