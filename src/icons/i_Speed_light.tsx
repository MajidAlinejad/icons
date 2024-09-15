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
      d="M3.5 14C3.5 12.8838 3.71986 11.7785 4.14702 10.7472C4.57419 9.71592 5.2003 8.77889 5.98959 7.98959C6.77889 7.20029 7.71593 6.57419 8.74719 6.14702C9.77846 5.71986 10.8838 5.5 12 5.5C13.1162 5.5 14.2215 5.71986 15.2528 6.14703C16.2841 6.57419 17.2211 7.2003 18.0104 7.9896C18.7997 8.77889 19.4258 9.71593 19.853 10.7472C20.2801 11.7785 20.5 12.8838 20.5 14"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 15C9.5 14.6717 9.56466 14.3466 9.6903 14.0433C9.81594 13.74 10.0001 13.4644 10.2322 13.2322C10.4644 13.0001 10.74 12.8159 11.0433 12.6903C11.3466 12.5647 11.6717 12.5 12 12.5C12.3283 12.5 12.6534 12.5647 12.9567 12.6903C13.26 12.8159 13.5356 13.0001 13.7678 13.2322C13.9999 13.4644 14.1841 13.74 14.3097 14.0433C14.4353 14.3466 14.5 14.6717 14.5 15"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 12.5L15.5 9.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 14V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5V14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
