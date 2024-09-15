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
      d="M9 7L6.13868 5.09245C6.0547 5.03647 5.9453 5.03647 5.86132 5.09245L3.25373 6.83084C3.12247 6.91835 3.10408 7.10408 3.21563 7.21563L5.79289 9.79289C5.9255 9.9255 6 10.1054 6 10.2929V10.2929C6 10.6834 6.31658 11 6.70711 11H17.2929C17.6834 11 18 10.6834 18 10.2929V10.2929C18 10.1054 18.0745 9.9255 18.2071 9.79289L20.7844 7.21563C20.8959 7.10408 20.8775 6.91835 20.7463 6.83084L18.1387 5.09245C18.0547 5.03647 17.9453 5.03647 17.8613 5.09245L15 7"
      stroke="#7E869E"
      stroke-opacity="0.25"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M6 10L7.82843 8.17157C8.40649 7.59351 8.69552 7.30448 9.06306 7.15224C9.4306 7 9.83935 7 10.6569 7H13.3431C14.1606 7 14.5694 7 14.9369 7.15224C15.3045 7.30448 15.5935 7.59351 16.1716 8.17157L18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);
export default SvgComponent;
