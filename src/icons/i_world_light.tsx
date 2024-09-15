const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="8" stroke="currentColor" />
    <path
      d="M18.2075 6.78485C17.4747 7.46088 16.5544 8.00912 15.5106 8.39144C14.4668 8.77376 13.3244 8.981 12.163 8.99875C11.0016 9.01651 9.84894 8.84434 8.7852 8.49423C7.72146 8.14412 6.77215 7.62447 6.00325 6.97139"
      stroke="currentColor"
    />
    <path
      d="M18.3222 17.3235C17.5826 16.608 16.6367 16.0274 15.5553 15.6251C14.474 15.2227 13.2853 15.0091 12.0783 15.0003C10.8713 14.9914 9.67723 15.1875 8.58561 15.5739C7.494 15.9603 6.53311 16.5269 5.77495 17.2314"
      stroke="currentColor"
    />
    <path d="M12 4V20" stroke="currentColor" />
    <path d="M20 12H4" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
