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
      d="M9 16L16 9C17.3807 7.61929 17.3807 5.38071 16 4C14.6193 2.61929 12.3807 2.61929 11 4L4 11C2.61929 12.3807 2.61929 14.6193 4 16C5.38071 17.3807 7.61929 17.3807 9 16Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 12.5V12.5C10.2532 11.5371 8.46291 9.74679 7.5 7.5V7.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="17.5"
      cy="17.5"
      r="3.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 16L16 19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
