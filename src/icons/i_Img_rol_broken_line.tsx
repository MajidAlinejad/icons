const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.5 8.5V5" stroke="currentColor" strokeLinecap="round" />
    <path d="M17.5 8.5V5" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M2.5 17V15.5M2.5 7V12.5M21.5 7V9.5M21.5 17V12.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M17.5074 4.96298C19.1476 5.27007 20.3747 5.70633 21.0117 6.20882C21.6488 6.71132 21.6628 7.25408 21.0518 7.75881C20.4409 8.26354 19.2364 8.70415 17.6123 9.0171C15.9882 9.33004 14.0283 9.49914 12.0154 9.5C10.0024 9.50085 8.0405 9.33343 6.41253 9.02187C4.78457 8.71031 3.57474 8.27073 2.95756 7.76652C2.34037 7.26231 2.34774 6.71955 2.97859 6.21651C3.60943 5.71347 4.83116 5.27617 6.46753 4.96768"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M21.5 17C21.5 17.663 20.4991 18.2989 18.7175 18.7678C16.9359 19.2366 14.5196 19.5 12 19.5C9.48044 19.5 7.06408 19.2366 5.28249 18.7678C3.50089 18.2989 2.5 17.663 2.5 17"
      stroke="currentColor"
    />
    <path
      d="M4.5 16L7.34822 12.8353C8.19896 11.89 9.70429 11.9684 10.4523 12.9969L12.2634 15.4872C12.6408 16.006 13.4022 16.0403 13.8247 15.5575L14.9793 14.238C15.7815 13.3212 17.2101 13.3284 18.0029 14.2534L19.5 16"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
