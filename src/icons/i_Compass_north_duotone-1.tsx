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
      d="M7.55772 20.3781L11.9548 11.0954C11.9729 11.0573 12.0271 11.0573 12.0452 11.0954L16.4423 20.3781C16.4621 20.4201 16.4192 20.4641 16.3768 20.4452L12.0203 18.509C12.0074 18.5033 11.9926 18.5033 11.9797 18.509L7.62322 20.4452C7.58083 20.4641 7.53787 20.4201 7.55772 20.3781Z"
      fill="#7E869E"
      fill-opacity="0.25"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M12 11.5V18.5" stroke="currentColor" />
    <path
      d="M10.5 8.5V3.68052C10.5 3.6298 10.5668 3.61131 10.5929 3.65479L13.4071 8.34521C13.4332 8.38869 13.5 8.3702 13.5 8.31948V3.5"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
