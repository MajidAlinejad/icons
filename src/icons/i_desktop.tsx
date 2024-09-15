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
      d="M4 8C4 7.02892 4.00212 6.40121 4.06431 5.9387C4.12262 5.50496 4.21677 5.36902 4.29289 5.29289C4.36902 5.21677 4.50496 5.12262 4.9387 5.06431C5.40121 5.00212 6.02892 5 7 5H17C17.9711 5 18.5988 5.00212 19.0613 5.06431C19.495 5.12262 19.631 5.21677 19.7071 5.29289C19.7832 5.36902 19.8774 5.50496 19.9357 5.9387C19.9979 6.40121 20 7.02892 20 8V16H4V8Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M3.66667 16C2.74619 16 2 16.7462 2 17.6667C2 18.9553 3.04467 20 4.33333 20H19.6667C20.9553 20 22 18.9553 22 17.6667C22 16.7462 21.2538 16 20.3333 16H3.66667Z"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
