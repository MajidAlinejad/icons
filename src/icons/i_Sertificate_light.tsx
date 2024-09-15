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
      d="M18.5 9.5V8.7C18.5 7.57989 18.5 7.01984 18.282 6.59202C18.0903 6.21569 17.7843 5.90973 17.408 5.71799C16.9802 5.5 16.4201 5.5 15.3 5.5H7.7C6.57989 5.5 6.01984 5.5 5.59202 5.71799C5.21569 5.90973 4.90973 6.21569 4.71799 6.59202C4.5 7.01984 4.5 7.57989 4.5 8.7V12.3C4.5 13.4201 4.5 13.9802 4.71799 14.408C4.90973 14.7843 5.21569 15.0903 5.59202 15.282C6.01984 15.5 6.57989 15.5 7.7 15.5H13.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M7.5 12.5H11.5" stroke="currentColor" stroke-linecap="round" />
    <path d="M7.5 8.5H14.5" stroke="currentColor" stroke-linecap="round" />
    <circle cx="17.5" cy="13.5" r="2" stroke="currentColor" />
    <path
      d="M19.5 18.5C19.5 18.5 19 17.5 17.5 17.5C16 17.5 15.5 18.5 15.5 18.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
