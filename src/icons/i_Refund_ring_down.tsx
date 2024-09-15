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
      d="M15 20L14.2929 20.7071L15 21.4142L15.7071 20.7071L15 20ZM5 13C5 13.5523 5.44772 14 6 14C6.55229 14 7 13.5523 7 13L5 13ZM10.2929 16.7071L14.2929 20.7071L15.7071 19.2929L11.7071 15.2929L10.2929 16.7071ZM15.7071 20.7071L19.7071 16.7071L18.2929 15.2929L14.2929 19.2929L15.7071 20.7071ZM16 20L16 8.5L14 8.5L14 20L16 20ZM5 8.5L5 13L7 13L7 8.5L5 8.5ZM10.5 3C7.46243 3 5 5.46243 5 8.5L7 8.5C7 6.567 8.567 5 10.5 5L10.5 3ZM16 8.5C16 5.46244 13.5376 3 10.5 3L10.5 5C12.433 5 14 6.567 14 8.5L16 8.5Z"
      fill="currentColor"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8 17)"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
