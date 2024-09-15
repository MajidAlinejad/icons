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
      d="M3.95638 14.7835C4.45435 11.5467 4.70334 9.92828 5.82715 8.96414C6.95096 8 8.58843 8 11.8634 8H12.1366C15.4116 8 17.049 8 18.1728 8.96414C19.2967 9.92828 19.5456 11.5467 20.0436 14.7835L20.6455 18.6959C20.8103 19.7668 20.8927 20.3023 20.5934 20.6511C20.2941 21 19.7523 21 18.6688 21H5.33122C4.24771 21 3.70595 21 3.40665 20.6511C3.10734 20.3023 3.18972 19.7668 3.35448 18.6959L3.95638 14.7835Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M8.5 11L8.5 7.5C8.5 5.567 10.067 4 12 4V4C13.933 4 15.5 5.567 15.5 7.5L15.5 11"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
