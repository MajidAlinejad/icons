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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5 15.5L5.40989 13.5901C6.75553 12.2445 7.42836 11.5716 8.1572 11.5101C8.52413 11.4792 8.89249 11.5501 9.22167 11.7151C9.87554 12.0429 10.2504 12.9175 11 14.6667L11.0534 14.7913C11.3795 15.5522 11.5425 15.9326 11.811 16.0988C12.0197 16.2279 12.2685 16.2758 12.5102 16.2334C12.8212 16.1788 13.1138 15.8862 13.6992 15.3008L13.8123 15.1877C14.5336 14.4664 14.8943 14.1057 15.3032 13.9537C15.7527 13.7867 16.2473 13.7867 16.6968 13.9537C17.1057 14.1057 17.4664 14.4664 18.1877 15.1877L18.9393 15.9393C19.4762 16.4762 20.1641 16.827 20.9032 16.9505C20.7778 18.2778 20.4898 19.1667 19.8284 19.8281C18.6569 20.9997 16.7712 20.9997 13 20.9997H11C7.22876 20.9997 5.34315 20.9997 4.17157 19.8281C3 18.6566 3 16.7709 3 12.9997V10.9997C3 8.16036 3 6.38988 3.5 5.18826V15.5Z"
      fill="currentColor"
    />
    <path
      d="M12 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V12"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M21 3V2H22V3H21ZM16.6247 7.78087C16.1934 8.12588 15.5641 8.05596 15.2191 7.62469C14.8741 7.19343 14.944 6.56414 15.3753 6.21913L16.6247 7.78087ZM20 8V3H22V8H20ZM21 4H16V2H21V4ZM21.6247 3.78087L16.6247 7.78087L15.3753 6.21913L20.3753 2.21913L21.6247 3.78087Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
