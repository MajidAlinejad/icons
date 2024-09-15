const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 11L14 15L10 19" stroke="currentColor" stroke-width="2" />
    <path
      d="M9.67063 6.15333C7.56156 6.4359 5.72985 7.09219 4.51677 7.99993C3.3037 8.90768 2.792 10.005 3.077 11.0874C3.362 12.1698 4.42426 13.1634 6.06589 13.8833C7.70751 14.6031 9.81652 15 12 15"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M19.7942 12.75C20.3852 12.2382 20.7687 11.6733 20.923 11.0874C21.0773 10.5015 20.9992 9.90613 20.6933 9.33531C20.3874 8.7645 19.8597 8.2294 19.1402 7.76057C18.4207 7.29174 17.5236 6.89836 16.5 6.60289"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
