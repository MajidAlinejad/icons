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
      d="M20 8L20.7071 8.70711L21.4142 8L20.7071 7.29289L20 8ZM13 18C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16L13 18ZM16.7071 12.7071L20.7071 8.70711L19.2929 7.29289L15.2929 11.2929L16.7071 12.7071ZM20.7071 7.29289L16.7071 3.29289L15.2929 4.70711L19.2929 8.70711L20.7071 7.29289ZM20 7L8.5 7L8.5 9L20 9L20 7ZM8.5 18L13 18L13 16L8.5 16L8.5 18ZM3 12.5C3 15.5376 5.46243 18 8.5 18L8.5 16C6.567 16 5 14.433 5 12.5L3 12.5ZM8.5 7C5.46244 7 3 9.46243 3 12.5L5 12.5C5 10.567 6.567 9 8.5 9L8.5 7Z"
      fill="currentColor"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(-1 0 0 1 17 15)"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
