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
      d="M3.5 8.3C3.5 6.61984 3.5 5.77976 3.82698 5.13803C4.1146 4.57354 4.57354 4.1146 5.13803 3.82698C5.77976 3.5 6.61984 3.5 8.3 3.5H15.7C17.3802 3.5 18.2202 3.5 18.862 3.82698C19.4265 4.1146 19.8854 4.57354 20.173 5.13803C20.5 5.77976 20.5 6.61984 20.5 8.3V15.7C20.5 17.3802 20.5 18.2202 20.173 18.862C19.8854 19.4265 19.4265 19.8854 18.862 20.173C18.2202 20.5 17.3802 20.5 15.7 20.5H8.3C6.61984 20.5 5.77976 20.5 5.13803 20.173C4.57354 19.8854 4.1146 19.4265 3.82698 18.862C3.5 18.2202 3.5 17.3802 3.5 15.7V8.3Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M6.5 7.5L11.1213 12.1213C11.6839 12.6839 12 13.447 12 14.2426V16M6.5 7.5H8.5M6.5 7.5V9.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5 7.5L12.8787 12.1213C12.3161 12.6839 12 13.447 12 14.2426V16M17.5 7.5H15.5M17.5 7.5V9.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
