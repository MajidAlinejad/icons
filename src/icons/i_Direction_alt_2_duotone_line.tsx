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
      d="M16 18.5H18.3C19.4201 18.5 19.9802 18.5 20.408 18.282C20.7843 18.0903 21.0903 17.7843 21.282 17.408C21.5 16.9802 21.5 16.4201 21.5 15.3V8.7C21.5 7.57989 21.5 7.01984 21.282 6.59202C21.0903 6.21569 20.7843 5.90973 20.408 5.71799C19.9802 5.5 19.4201 5.5 18.3 5.5H5.7C4.5799 5.5 4.01984 5.5 3.59202 5.71799C3.21569 5.90973 2.90973 6.21569 2.71799 6.59202C2.5 7.01984 2.5 7.57989 2.5 8.7V15.3C2.5 16.4201 2.5 16.9802 2.71799 17.408C2.90973 17.7843 3.21569 18.0903 3.59202 18.282C4.01984 18.5 4.57989 18.5 5.7 18.5H8"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeLinecap="round"
    />
    <path
      d="M6.5 9.5L11.1213 14.1213C11.6839 14.6839 12 15.447 12 16.2426V18M6.5 9.5H8.5M6.5 9.5V11.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 9.5L12.8787 14.1213C12.3161 14.6839 12 15.447 12 16.2426V20M17.5 9.5H15.5M17.5 9.5V11.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
