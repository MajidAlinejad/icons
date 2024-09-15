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
      d="M8.5 12.5L15.5 12.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M8.5 15.5L12.5 15.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M5.5 5.9C5.5 5.05992 5.5 4.63988 5.66349 4.31901C5.8073 4.03677 6.03677 3.8073 6.31901 3.66349C6.63988 3.5 7.05992 3.5 7.9 3.5H12.5059C12.8728 3.5 13.0562 3.5 13.2288 3.54145C13.3819 3.57819 13.5282 3.6388 13.6624 3.72104C13.8138 3.8138 13.9435 3.94352 14.2029 4.20294L17.7971 7.79706C18.0565 8.05648 18.1862 8.1862 18.279 8.33757C18.3612 8.47178 18.4218 8.6181 18.4586 8.77115C18.5 8.94378 18.5 9.12723 18.5 9.49411V18.1C18.5 18.9401 18.5 19.3601 18.3365 19.681C18.1927 19.9632 17.9632 20.1927 17.681 20.3365C17.3601 20.5 16.9401 20.5 16.1 20.5H7.9C7.05992 20.5 6.63988 20.5 6.31901 20.3365C6.03677 20.1927 5.8073 19.9632 5.66349 19.681C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z"
      stroke="currentColor"
    />
    <path
      d="M12.5 3.5V7.1C12.5 7.94008 12.5 8.36012 12.6635 8.68099C12.8073 8.96323 13.0368 9.1927 13.319 9.33651C13.6399 9.5 14.0599 9.5 14.9 9.5H18.5"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
