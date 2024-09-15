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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.93853 6.60896C9.90914 6.20693 10.9494 6 12 6C13.0506 6 14.0909 6.20693 15.0615 6.60897C16.0321 7.011 16.914 7.60028 17.6569 8.34315C18.3997 9.08602 18.989 9.96793 19.391 10.9385C19.7931 11.9091 20 12.9494 20 14V14.5C20 14.7761 19.7761 15 19.5 15H4.5C4.22386 15 4 14.7761 4 14.5V14C4 12.9494 4.20693 11.9091 4.60896 10.9385C5.011 9.96793 5.60028 9.08601 6.34315 8.34314C7.08602 7.60028 7.96793 7.011 8.93853 6.60896ZM3 14C3 12.8181 3.23279 11.6478 3.68508 10.5558C4.13738 9.46392 4.80031 8.47176 5.63604 7.63604C6.47177 6.80031 7.46392 6.13738 8.55585 5.68508C9.64778 5.23279 10.8181 5 12 5C13.1819 5 14.3522 5.23279 15.4442 5.68509C16.5361 6.13738 17.5282 6.80031 18.364 7.63604C19.1997 8.47177 19.8626 9.46392 20.3149 10.5559C20.7672 11.6478 21 12.8181 21 14V14.5C21 15.3284 20.3284 16 19.5 16H4.5C3.67157 16 3 15.3284 3 14.5V14Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M16.5 15.5L7.5 15.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
