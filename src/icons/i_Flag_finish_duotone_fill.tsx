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
      d="M6 6V12C6 12.5523 6.44772 13 7 13H9.58579C9.851 13 10.1054 13.1054 10.2929 13.2929L11.7071 14.7071C11.8946 14.8946 12.149 15 12.4142 15H17C17.5523 15 18 14.5523 18 14V8C18 7.44772 17.5523 7 17 7H12.4142C12.149 7 11.8946 6.89464 11.7071 6.70711L10.2929 5.29289C10.1054 5.10536 9.851 5 9.58579 5H7C6.44772 5 6 5.44772 6 6Z"
      fill="#2A4157"
      fill-opacity="0.24"
    />
    <path d="M6.5 4.5V19.5" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
