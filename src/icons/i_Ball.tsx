const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" />
    <path
      d="M5.00324 9.68682C6.00581 9.91486 6.95077 10.3466 7.77945 10.9552C8.60812 11.5639 9.30281 12.3364 9.82035 13.2248C10.3379 14.1132 10.6672 15.0986 10.7879 16.1197C10.9086 17.1407 10.8181 18.1757 10.5219 19.1603"
      stroke="currentColor"
    />
    <path
      d="M13.4951 4.78403C13.1913 5.7663 13.0927 6.80054 13.2055 7.82251C13.3182 8.84448 13.6399 9.83235 14.1505 10.7248C14.6612 11.6172 15.3498 12.3951 16.1737 13.0101C16.9977 13.6252 17.9393 14.0642 18.94 14.3001"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
