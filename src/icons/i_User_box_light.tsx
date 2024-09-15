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
      d="M17.9334 21.2571C17.7171 20.0575 16.9849 18.9644 15.8732 18.1813C14.7615 17.3983 13.346 16.9787 11.8906 17.0008C10.4352 17.0229 9.0391 17.4852 7.96236 18.3015C6.88562 19.1178 6.20171 20.2325 6.03804 21.4378"
      stroke="currentColor"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
