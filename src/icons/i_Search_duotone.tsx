const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM10.0866 7.3806C10.6932 7.12933 11.3434 7 12 7C12.2761 7 12.5 6.77614 12.5 6.5C12.5 6.22386 12.2761 6 12 6C11.2121 6 10.4319 6.15519 9.7039 6.45672C8.97595 6.75825 8.31451 7.20021 7.75736 7.75736C7.20021 8.31451 6.75825 8.97595 6.45672 9.7039C6.15519 10.4319 6 11.2121 6 12C6 12.2761 6.22386 12.5 6.5 12.5C6.77614 12.5 7 12.2761 7 12C7 11.3434 7.12933 10.6932 7.3806 10.0866C7.63188 9.47996 8.00017 8.92876 8.46447 8.46447C8.92876 8.00017 9.47995 7.63188 10.0866 7.3806Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path d="M20.5 20.5L17 17" stroke="currentColor" stroke-linecap="round" />
    <circle cx="11" cy="11" r="8.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
