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
      d="M7 16L7.16929 17.8621C7.32635 19.5898 7.40488 20.4537 7.97775 20.9768C8.55062 21.5 9.41804 21.5 11.1529 21.5H12.8471C14.582 21.5 15.4494 21.5 16.0222 20.9768C16.5951 20.4537 16.6737 19.5898 16.8307 17.8621L17 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3.5C14.5 2.5 15.5 2 16.5 2"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="5"
      r="2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 4.34143C8.27611 4.95074 6.91381 6.3255 6.32148 8.05733C4.43551 8.37959 3 10.0222 3 12C3 14.2092 4.79086 16 7 16C7.82474 16 8.59117 15.7504 9.2279 15.3226C10.0571 15.7554 11 16 12 16C13 16 13.9429 15.7554 14.7721 15.3226C15.4088 15.7504 16.1753 16 17 16C19.2091 16 21 14.2092 21 12C21 10.0222 19.5645 8.37959 17.6785 8.05734C17.0862 6.3255 15.7239 4.95074 14 4.34143V5.41608C15.2775 5.97419 16.2774 7.05073 16.7323 8.38096C16.8508 8.7274 17.1492 8.98138 17.5101 9.04305C18.9238 9.28462 20 10.5176 20 12C20 13.6569 18.6569 15 17 15C16.38 15 15.8068 14.813 15.3298 14.4926C15.0257 14.2883 14.6342 14.2666 14.3094 14.4361C13.6197 14.7961 12.8351 15 12 15C11.1649 15 10.3803 14.7961 9.69056 14.4361C9.36578 14.2666 8.97431 14.2883 8.67022 14.4926C8.19322 14.813 7.61996 15 7 15C5.34315 15 4 13.6569 4 12C4 10.5176 5.07616 9.28461 6.48991 9.04305C6.85082 8.98138 7.14918 8.72739 7.26767 8.38095C7.72264 7.05073 8.72248 5.97419 10 5.41608V4.34143Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
