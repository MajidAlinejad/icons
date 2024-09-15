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
      d="M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13V13C19.0341 13 18.8011 13 18.6173 13.0761C18.3723 13.1776 18.1776 13.3723 18.0761 13.6173C18 13.8011 18 14.0341 18 14.5V18C18 18.9428 18 19.4142 17.7071 19.7071C17.4142 20 16.9428 20 16 20H8C7.05719 20 6.58579 20 6.29289 19.7071C6 19.4142 6 18.9428 6 18V14.5C6 14.0341 6 13.8011 5.92388 13.6173C5.82239 13.3723 5.62771 13.1776 5.38268 13.0761C5.19891 13 4.96594 13 4.5 13V13C4.03406 13 3.80109 13 3.61732 12.9239C3.37229 12.8224 3.17761 12.6277 3.07612 12.3827C3 12.1989 3 11.9659 3 11.5V10Z"
      stroke="currentColor"
    />
    <path d="M5 13H19" stroke="currentColor" strokeLinecap="round" />
    <path d="M12 7L12 20" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M12 7L11.1214 6.12144C10.0551 5.05514 8.75521 4.25174 7.3246 3.77487V3.77487C6.18099 3.39366 5 4.24487 5 5.45035V5.63246C5 6.44914 5.52259 7.1742 6.29737 7.43246L8 8"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M12 7L12.8786 6.12144C13.9449 5.05514 15.2448 4.25174 16.6754 3.77487V3.77487C17.819 3.39366 19 4.24487 19 5.45035V5.63246C19 6.44914 18.4774 7.1742 17.7026 7.43246L16 8"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
