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
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.88124 15.7559C8.37391 16.1826 9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12 17C12.7858 17 13.5699 16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188 15.7559"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="9"
      cy="10"
      r="1.25"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <circle
      cx="15"
      cy="10"
      r="1.25"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
