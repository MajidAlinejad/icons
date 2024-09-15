const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="8" r="5" fill="currentColor" />
    <path
      d="M19 10L19 16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M22 13L16 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M17.1421 20.3825C17.6038 20.278 17.8806 19.7981 17.676 19.3713C17.1242 18.2203 16.2173 17.2088 15.0419 16.4465C13.5955 15.5085 11.8232 15 10 15C8.17681 15 6.40455 15.5085 4.95811 16.4465C3.78266 17.2088 2.87577 18.2202 2.32396 19.3713C2.11935 19.7981 2.39623 20.278 2.85786 20.3825C7.55976 21.4474 12.4402 21.4474 17.1421 20.3825Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
