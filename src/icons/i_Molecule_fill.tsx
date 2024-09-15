const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <circle cx="18" cy="19" r="1" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="5" r="3" fill="currentColor" />
    <circle cx="5.5" cy="5.5" r="2.5" fill="currentColor" />
    <circle cx="5.5" cy="18.5" r="3.5" fill="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.24262 7.8284L6.70712 5.29289L5.29291 6.70711L7.82841 9.24261C8.19996 8.68163 8.68164 8.19995 9.24262 7.8284ZM16.1716 9.24261C15.8001 8.68163 15.3184 8.19995 14.7574 7.8284L16.2929 6.29289L17.7071 7.70711L16.1716 9.24261ZM14.5573 16.2974C15.1375 15.9514 15.6417 15.4912 16.039 14.9479L18.7809 18.3753L17.2191 19.6247L14.5573 16.2974ZM7.82841 14.7574C8.19996 15.3184 8.68164 15.8001 9.24262 16.1716L7.70712 17.7071L6.29291 16.2929L7.82841 14.7574Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
