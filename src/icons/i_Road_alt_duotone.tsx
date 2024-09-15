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
      d="M4 18L7 4"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 18L17 4"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 11L12 9"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 6L12 4"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9.15763 19.54L11.2761 15.0382C11.5072 14.5472 11.6227 14.3017 11.7814 14.2246C11.9194 14.1575 12.0806 14.1575 12.2186 14.2246C12.3773 14.3017 12.4928 14.5472 12.7239 15.0382L14.8424 19.54C15.1894 20.2774 15.3628 20.6461 15.2969 20.8379C15.24 21.0035 15.1006 21.1273 14.9294 21.1642C14.7311 21.2069 14.3856 20.991 13.6945 20.5591L12.424 19.765L12.424 19.765C12.2702 19.6689 12.1933 19.6208 12.1108 19.6021C12.0379 19.5855 11.9621 19.5855 11.8892 19.6021C11.8067 19.6208 11.7298 19.6689 11.576 19.765L11.576 19.765L10.3055 20.5591C9.61444 20.991 9.26892 21.2069 9.07064 21.1642C8.89941 21.1273 8.75997 21.0035 8.70306 20.8379C8.63715 20.6461 8.81064 20.2774 9.15763 19.54Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
