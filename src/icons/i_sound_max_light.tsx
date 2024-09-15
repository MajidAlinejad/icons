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
      d="M3.15838 13.9306C2.44537 12.7423 2.44537 11.2577 3.15838 10.0694V10.0694C3.37596 9.70674 3.73641 9.45272 4.1511 9.36978L5.84413 9.03117C5.94499 9.011 6.03591 8.95691 6.10176 8.87788L8.17085 6.39498C9.3534 4.97592 9.94468 4.26638 10.4723 4.45742C11 4.64846 11 5.57207 11 7.41928L11 16.5807C11 18.4279 11 19.3515 10.4723 19.5426C9.94468 19.7336 9.3534 19.0241 8.17085 17.605L6.10176 15.1221C6.03591 15.0431 5.94499 14.989 5.84413 14.9688L4.1511 14.6302C3.73641 14.5473 3.37596 14.2933 3.15838 13.9306V13.9306Z"
      stroke="currentColor"
    />
    <path
      d="M15.5355 8.46447C16.4684 9.39732 16.9948 10.6611 17 11.9803C17.0052 13.2996 16.4888 14.5674 15.5633 15.5076"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M19.6569 6.34314C21.1494 7.83572 21.9916 9.85769 21.9999 11.9685C22.0083 14.0793 21.182 16.1078 19.7012 17.6121"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
