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
      d="M19.5 9.5H8.5M19.5 13.5H8.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 18V5C19.5 3.61929 18.3807 2.5 17 2.5V2.5C15.6193 2.5 14.5 3.61929 14.5 5V6.5M8.5 18V5C8.5 3.61929 7.38071 2.5 6 2.5V2.5C4.61929 2.5 3.5 3.61929 3.5 5V6.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 18L4.30933 19.0965C4.99533 20.0259 6.39408 19.9982 7.0427 19.0423L7.07143 19C7.72212 18.0411 9.13503 18.0411 9.78571 19V19C10.4364 19.9589 11.8493 19.9589 12.5 19V19C13.1507 18.0411 14.5636 18.0411 15.2143 19V19C15.865 19.9589 17.2779 19.9589 17.9286 19L17.9573 18.9577C18.6059 18.0018 20.0047 17.9741 20.6907 18.9035L21.5 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
