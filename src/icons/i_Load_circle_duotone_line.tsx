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
      stroke="#2A4157"
      stroke-opacity="0.24"
      strokeWidth="1.2"
    />
    <path
      d="M12 13L11.6252 13.4685L12 13.7684L12.3748 13.4685L12 13ZM12.6 4C12.6 3.66863 12.3314 3.4 12 3.4C11.6686 3.4 11.4 3.66863 11.4 4L12.6 4ZM6.62518 9.46852L11.6252 13.4685L12.3748 12.5315L7.37482 8.53148L6.62518 9.46852ZM12.3748 13.4685L17.3748 9.46852L16.6252 8.53148L11.6252 12.5315L12.3748 13.4685ZM12.6 13L12.6 4L11.4 4L11.4 13L12.6 13Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
