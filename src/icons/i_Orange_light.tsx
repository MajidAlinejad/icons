const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="14"
      r="7.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M14.6464 5.64645C14.2573 6.0356 13.6331 6.26258 12.9178 6.3818C12.4253 6.46389 11.9292 6.48897 11.5034 6.49663C11.511 6.07082 11.5361 5.57473 11.6182 5.08219C11.7374 4.36687 11.9644 3.74271 12.3535 3.35356C12.7427 2.96441 13.3669 2.73743 14.0822 2.6182C14.5747 2.53611 15.0708 2.51103 15.4966 2.50337C15.489 2.92917 15.4639 3.42527 15.3818 3.9178C15.2626 4.63312 15.0356 5.25729 14.6464 5.64645Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <circle cx="9" cy="15" r="1" fill="currentColor" />
    <circle cx="14.5" cy="15.5" r="1.5" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
