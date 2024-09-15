const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <path
      d="M17 12C17 14.6113 16.3629 16.9271 15.3851 18.5566C14.3955 20.206 13.1676 21 12 21C10.8324 21 9.60451 20.206 8.61485 18.5566C7.63714 16.9271 7 14.6113 7 12C7 9.38866 7.63714 7.07295 8.61485 5.44343C9.60451 3.794 10.8324 3 12 3C13.1676 3 14.3955 3.794 15.3851 5.44343C16.3629 7.07295 17 9.38866 17 12Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M12 17C9.38866 17 7.07295 16.3629 5.44343 15.3851C3.794 14.3955 3 13.1676 3 12C3 10.8324 3.794 9.60451 5.44343 8.61485C7.07295 7.63714 9.38866 7 12 7C14.6113 7 16.9271 7.63714 18.5566 8.61485C20.206 9.60451 21 10.8324 21 12C21 13.1676 20.206 14.3955 18.5566 15.3851C16.9271 16.3629 14.6113 17 12 17Z"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
