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
      d="M5.17157 6.17157C4 7.34315 4 9.22876 4 13V17V18.5858C4 19.4767 5.07714 19.9229 5.70711 19.2929L7.85355 17.1464C7.92581 17.0742 7.96194 17.0381 8.00788 17.019C8.05383 17 8.10492 17 8.20711 17H14C15.8638 17 16.7956 17 17.5307 16.6955C18.5108 16.2895 19.2895 15.5108 19.6955 14.5307C20 13.7956 20 12.8638 20 11C20 9.13623 20 8.20435 19.6955 7.46927C19.2895 6.48915 18.5108 5.71046 17.5307 5.30448C16.7956 5 15.8638 5 14 5H12C8.22876 5 6.34315 5 5.17157 6.17157Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M8.5 9.5L15.5 9.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12.5L13.5 12.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
