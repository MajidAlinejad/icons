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
      d="M15.5453 4.5194L18.3939 5.74025C18.7616 5.89783 19 6.25937 19 6.6594V12.9123C19 14.85 18.0642 16.6684 16.4874 17.7947L12.5812 20.5848C12.2335 20.8332 11.7665 20.8332 11.4188 20.5848L7.51257 17.7947C5.93579 16.6684 5 14.85 5 12.9123V6.6594C5 6.25937 5.2384 5.89783 5.60608 5.74025L8.45473 4.5194C10.7187 3.54914 13.2813 3.54914 15.5453 4.5194Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <circle cx="12" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="9.5" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="14.5" cy="10.5" r="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
