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
      d="M4.43141 14.9116C4.91901 11.9859 5.16281 10.5231 6.13201 9.60143C6.24307 9.49581 6.36011 9.39667 6.48254 9.30448C7.55103 8.5 9.03402 8.5 12 8.5V8.5C14.966 8.5 16.449 8.5 17.5175 9.30448C17.6399 9.39667 17.7569 9.49581 17.868 9.60143C18.8372 10.5231 19.081 11.9859 19.5686 14.9116L20.1119 18.1712C20.292 19.2522 20.3821 19.7927 20.0826 20.1464C19.783 20.5 19.235 20.5 18.1391 20.5H5.86092C4.76498 20.5 4.21701 20.5 3.91744 20.1464C3.61788 19.7927 3.70796 19.2522 3.88813 18.1712L4.43141 14.9116Z"
      stroke="#7E869E"
      strokeOpacity="0.25"
    />
    <path
      d="M8.5 11L8.5 7.5C8.5 5.567 10.067 4 12 4V4C13.933 4 15.5 5.567 15.5 7.5L15.5 11"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
