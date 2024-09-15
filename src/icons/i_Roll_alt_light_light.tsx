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
      d="M4 15.5C4.42399 15.5 4.68474 15.1684 4.81968 14.9401C4.9744 14.6783 5.0964 14.3328 5.19218 13.9497C5.38566 13.1758 5.5 12.1331 5.5 11C5.5 9.86686 5.38566 8.82421 5.19218 8.05031C5.0964 7.6672 4.9744 7.32169 4.81968 7.05992C4.68474 6.83163 4.42399 6.5 4 6.5C3.57601 6.5 3.31526 6.83163 3.18032 7.05992C3.0256 7.32169 2.9036 7.6672 2.80782 8.05031C2.61434 8.82421 2.5 9.86686 2.5 11C2.5 12.1331 2.61434 13.1758 2.80782 13.9497C2.9036 14.3328 3.0256 14.6783 3.18032 14.9401C3.31526 15.1684 3.57601 15.5 4 15.5Z"
      stroke="currentColor"
    />
    <path
      d="M20 15.5C20.4127 15.5 20.6723 15.1832 20.8108 14.9539C20.9675 14.6942 21.0928 14.3472 21.1922 13.9497C21.3925 13.1483 21.5 12.0878 21.5 11C21.5 9.91223 21.3925 8.8517 21.1922 8.0503C21.0928 7.65275 20.9675 7.30583 20.8108 7.04612C20.6723 6.81677 20.4127 6.5 20 6.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M20 6.5C20 6.5 16.5 7.5 12 7.5C7.5 7.5 4 6.5 4 6.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M4 15.5C4 15.5 6.5044 14.7845 10 14.5639M20 15.5C20 15.5 17.4956 14.7845 14 14.5639"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M10.5 7.5V11M13.5 7.5V11"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <circle cx="12" cy="13" r="2.5" stroke="currentColor" />
    <path
      d="M10 14.5L7.5 16.5L9 17L10 18.5L12 15.5L14 18.5L15 17L16.5 16.5L14 14.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
