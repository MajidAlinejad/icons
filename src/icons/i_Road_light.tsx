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
      d="M8.57385 19.3523L11.9553 12.5894C11.9737 12.5526 12.0263 12.5526 12.0447 12.5894L15.4261 19.3523C15.4483 19.3965 15.3996 19.4426 15.3566 19.4181L12.0248 17.5142C12.0094 17.5054 11.9906 17.5054 11.9752 17.5142L8.64338 19.4181C8.60043 19.4426 8.55173 19.3965 8.57385 19.3523Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M16 16.5H18.3C19.4201 16.5 19.9802 16.5 20.408 16.282C20.7843 16.0903 21.0903 15.7843 21.282 15.408C21.5 14.9802 21.5 14.4201 21.5 13.3V7.7C21.5 6.5799 21.5 6.01984 21.282 5.59202C21.0903 5.21569 20.7843 4.90973 20.408 4.71799C19.9802 4.5 19.4201 4.5 18.3 4.5H5.7C4.5799 4.5 4.01984 4.5 3.59202 4.71799C3.21569 4.90973 2.90973 5.21569 2.71799 5.59202C2.5 6.01984 2.5 6.57989 2.5 7.7V13.3C2.5 14.4201 2.5 14.9802 2.71799 15.408C2.90973 15.7843 3.21569 16.0903 3.59202 16.282C4.01984 16.5 4.57989 16.5 5.7 16.5H8"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M5.5 16.5L7.5 4.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M18.5 16.5L16.5 4.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M12 9.5V6.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
