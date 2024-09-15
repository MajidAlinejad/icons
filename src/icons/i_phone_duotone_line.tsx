const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" />
    <path
      d="M9 3V3C9 3.46499 9 3.69748 9.05111 3.88823C9.18981 4.40587 9.59413 4.81019 10.1118 4.94889C10.3025 5 10.535 5 11 5H13C13.465 5 13.6975 5 13.8882 4.94889C14.4059 4.81019 14.8102 4.40587 14.9489 3.88823C15 3.69748 15 3.46499 15 3V3"
      stroke="#2A4157"
      stroke-opacity="0.24"
    />
    <circle cx="12" cy="18" r="1" fill="#2A4157" fill-opacity="0.24" />
    <circle cx="12" cy="18" r="0.5" stroke="#2A4157" stroke-opacity="0.24" />
  </svg>
);
export default SvgComponent;
