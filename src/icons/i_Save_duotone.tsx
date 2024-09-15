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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.87868 3.87868C3 4.75736 3 6.17157 3 9V15C3 17.8284 3 19.2426 3.87868 20.1213C4.52055 20.7632 5.44818 20.9362 7.0041 20.9828C7 20.687 7 20.3607 7 20V19C7 17.1144 7 16.1716 7.58579 15.5858C8.17157 15 9.11438 15 11 15H12C13.8856 15 14.8284 15 15.4142 15.5858C16 16.1716 16 17.1144 16 19V20C16 20.367 16 20.6984 15.9957 20.9983C18.1735 20.9863 19.3524 20.8902 20.1213 20.1213C21 19.2426 21 17.8284 21 15V7.82843C21 7.41968 21 7.2153 20.9239 7.03153C20.8478 6.84776 20.7032 6.70325 20.4142 6.41423L20.4142 6.41421L17.5858 3.58579C17.2968 3.29676 17.1522 3.15224 16.9685 3.07612C16.7847 3 16.5803 3 16.1716 3H9C6.17157 3 4.75736 3 3.87868 3.87868Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M16 21V19C16 17.1144 16 16.1716 15.4142 15.5858C14.8284 15 13.8856 15 12 15H11C9.11438 15 8.17157 15 7.58579 15.5858C7 16.1716 7 17.1144 7 19V21"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <path
      d="M7 8H12"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H16.1716C16.5803 3 16.7847 3 16.9685 3.07612C17.1522 3.15224 17.2968 3.29676 17.5858 3.58579L20.4142 6.41421C20.7032 6.70324 20.8478 6.84776 20.9239 7.03153C21 7.2153 21 7.41968 21 7.82843V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V9Z"
      stroke="currentColor"
      stroke-width="1.2"
    />
  </svg>
);
export default SvgComponent;
