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
      d="M12.875 5V5C9.22524 5 7.40037 5 6.24184 6.10301C6.19443 6.14814 6.14814 6.19443 6.10301 6.24184C5 7.40037 5 9.22524 5 12.875V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19H11.125C14.7748 19 16.5996 19 17.7582 17.897C17.8056 17.8519 17.8519 17.8056 17.897 17.7582C19 16.5996 19 14.7748 19 11.125V11.125"
      stroke="currentColor"
    />
    <path
      d="M9 10L15 10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 14H12"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 8L19 2M16 5H22"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
