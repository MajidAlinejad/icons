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
      d="M5.23852 14.8117C5.63734 16.3002 6.51616 17.6154 7.73867 18.5535C8.96118 19.4915 10.4591 20 12 20C13.5409 20 15.0388 19.4915 16.2613 18.5535C17.4838 17.6154 18.3627 16.3002 18.7615 14.8117"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 4L11.3753 3.21913L12 2.71937L12.6247 3.21913L12 4ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13L13 13ZM6.37531 7.21913L11.3753 3.21913L12.6247 4.78087L7.6247 8.78087L6.37531 7.21913ZM12.6247 3.21913L17.6247 7.21913L16.3753 8.78087L11.3753 4.78087L12.6247 3.21913ZM13 4L13 13L11 13L11 4L13 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
