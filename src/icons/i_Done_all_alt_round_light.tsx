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
      d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.191 15.3931L11.9153 16.7726C12.5572 17.2861 13.4928 17.1873 14.0133 16.5511L22.387 6.31662C22.5618 6.1029 22.5303 5.78788 22.3166 5.61302C22.1029 5.43816 21.7879 5.46966 21.613 5.68338L13.2393 15.9179C13.0658 16.1299 12.754 16.1629 12.54 15.9917L10.8243 14.6191L10.191 15.3931Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
