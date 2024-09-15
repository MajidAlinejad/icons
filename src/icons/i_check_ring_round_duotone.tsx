const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8" fill="#7E869E" fill-opacity="0.25" />
    <path
      d="M9.5 12L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L15.5 10"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <path
      d="M19.5 12C19.5 13.4834 19.0601 14.9334 18.236 16.1668C17.4119 17.4001 16.2406 18.3614 14.8701 18.9291C13.4997 19.4968 11.9917 19.6453 10.5368 19.3559C9.08197 19.0665 7.74559 18.3522 6.6967 17.3033C5.64781 16.2544 4.9335 14.918 4.64411 13.4632C4.35472 12.0083 4.50325 10.5003 5.0709 9.12987C5.63856 7.75943 6.59985 6.58809 7.83322 5.76398C9.06659 4.93987 10.5166 4.5 12 4.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
