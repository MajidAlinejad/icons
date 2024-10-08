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
      d="M8.00012 13L12.2278 16.3822C12.6557 16.7245 13.2794 16.6587 13.6264 16.2345L22.0001 6.00005"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1893 12.2368L15.774 6.63324C16.1237 6.20579 16.0607 5.57577 15.6333 5.22604C15.2059 4.87631 14.5758 4.93932 14.2261 5.36676L9.65279 10.9564L11.1893 12.2368ZM8.02298 16.1067L6.48647 14.8263L5.83315 15.6248L2.60006 13.2C2.15823 12.8686 1.53143 12.9582 1.20006 13.4C0.868688 13.8418 0.958231 14.4686 1.40006 14.8L4.63315 17.2248C5.49053 17.8679 6.7024 17.7208 7.38106 16.8913L8.02298 16.1067Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
