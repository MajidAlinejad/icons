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
      d="M19 16V8H5V16C5 17.8856 5 18.8284 5.58579 19.4142C6.17157 20 7.11438 20 9 20H15C16.8856 20 17.8284 20 18.4142 19.4142C19 18.8284 19 17.8856 19 16Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M17.3636 4H6.63636C5.10168 4 4.33434 4 3.80144 4.39892C3.64876 4.51321 3.51321 4.64876 3.39892 4.80144C3 5.33434 3 6.10168 3 7.63636C3 7.78983 3 7.86657 3.03989 7.91986C3.05132 7.93512 3.06488 7.94868 3.08014 7.96011C3.13343 8 3.21017 8 3.36364 8H5H19H20.6364C20.7898 8 20.8666 8 20.9199 7.96011C20.9351 7.94868 20.9487 7.93512 20.9601 7.91986C21 7.86657 21 7.78983 21 7.63636C21 6.10168 21 5.33434 20.6011 4.80144C20.4868 4.64876 20.3512 4.51321 20.1986 4.39892C19.6657 4 18.8983 4 17.3636 4Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M10 16H14"
      stroke="#7E869E"
      stroke-opacity="0.25"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
