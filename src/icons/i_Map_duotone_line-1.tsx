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
      d="M4.5 7.5L8.5 5.5V15.5L5.5 17H4.5V7.5Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M19.5 15.5L15.5 17.5V7.5L18.5 6H19.5V15.5Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M19.5 15.2219V6.22812C19.5 5.89359 19.148 5.67602 18.8488 5.82562L15.6566 7.42172C15.5559 7.47207 15.4399 7.48284 15.3317 7.45191L8.66831 5.54809C8.56005 5.51716 8.44414 5.52793 8.34344 5.57828L4.74875 7.37562C4.5963 7.45185 4.5 7.60767 4.5 7.77812V16.7719C4.5 17.1064 4.85204 17.324 5.15125 17.1744L8.34344 15.5783C8.44414 15.5279 8.56005 15.5172 8.66831 15.5481L15.3317 17.4519C15.4399 17.4828 15.5559 17.4721 15.6566 17.4217L19.2512 15.6244C19.4037 15.5482 19.5 15.3923 19.5 15.2219Z"
      stroke="currentColor"
    />
    <path d="M15.5 17.5V7.5" stroke="currentColor" />
    <path d="M8.5 15.5V5.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
