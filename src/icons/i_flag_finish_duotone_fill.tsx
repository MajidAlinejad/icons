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
      d="M6 6V12C6 12.5523 6.44772 13 7 13H10.5858C10.851 13 11.1054 13.1054 11.2929 13.2929L12.7071 14.7071C12.8946 14.8946 13.149 15 13.4142 15H19.5C19.706 15 19.8236 14.7648 19.7 14.6L17 11L19.7 7.4C19.8236 7.23519 19.706 7 19.5 7H13.4142C13.149 7 12.8946 6.89464 12.7071 6.70711L11.2929 5.29289C11.1054 5.10536 10.851 5 10.5858 5H7C6.44772 5 6 5.44772 6 6Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path d="M6.5 4.5V19.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
