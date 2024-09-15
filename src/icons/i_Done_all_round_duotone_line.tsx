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
      d="M8.00012 13L12.2278 16.3822C12.6557 16.7245 13.2794 16.6587 13.6264 16.2345L22.0001 6.00005"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5654 12.3677L15.4644 6.37994C15.6743 6.12347 15.6365 5.74546 15.38 5.53562C15.1235 5.32579 14.7455 5.36359 14.5357 5.62005L9.64346 11.5994L10.5654 12.3677ZM8.03231 15.4636L7.11041 14.6954L6.14273 15.8781C6.007 16.044 5.76463 16.0734 5.59315 15.9448L2.36006 13.52C2.09496 13.3212 1.71888 13.3749 1.52006 13.64C1.32124 13.9051 1.37496 14.2812 1.64006 14.48L4.87315 16.9048C5.55906 17.4192 6.52855 17.3016 7.07148 16.638L8.03231 15.4636Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
  </svg>
);
export default SvgComponent;
