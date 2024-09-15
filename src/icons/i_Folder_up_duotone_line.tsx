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
      d="M10 12.5L11.8939 10.6061C11.9525 10.5475 12.0475 10.5475 12.1061 10.6061L14 12.5"
      stroke="currentColor"
    />
    <path d="M12 15V10.5" stroke="currentColor" />
    <path
      d="M4.5 6.9C4.5 6.05992 4.5 5.63988 4.66349 5.31901C4.8073 5.03677 5.03677 4.8073 5.31901 4.66349C5.63988 4.5 6.05992 4.5 6.9 4.5H9.47237C9.84808 4.5 10.0359 4.5 10.2065 4.55179C10.3574 4.59763 10.4978 4.6728 10.6197 4.77298C10.7574 4.88614 10.8616 5.04245 11.07 5.35507L11.93 6.64533C12.1384 6.95795 12.2426 7.11426 12.3803 7.22742C12.5022 7.3276 12.6426 7.40277 12.7935 7.44861C12.9641 7.5004 13.1519 7.5004 13.5276 7.5004H17.1C17.9401 7.5004 18.3601 7.5004 18.681 7.66389C18.9632 7.8077 19.1927 8.03717 19.3365 8.31942C19.5 8.64028 19.5 9.06032 19.5 9.9004V16.1004C19.5 16.9405 19.5 17.3605 19.3365 17.6814C19.1927 17.9636 18.9632 18.1931 18.681 18.3369C18.3601 18.5004 17.9401 18.5004 17.1 18.5004H6.9C6.05992 18.5004 5.63988 18.5004 5.31901 18.3369C5.03677 18.1931 4.8073 17.9636 4.66349 17.6814C4.5 17.3605 4.5 16.9405 4.5 16.1004V6.9Z"
      stroke="#7E869E"
      strokeOpacity="0.25"
    />
  </svg>
);
export default SvgComponent;
