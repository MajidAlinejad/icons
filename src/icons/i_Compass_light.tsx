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
      d="M8.9183 10.9068C8.65971 9.96408 8.56056 9.06849 8.52286 8.52312C9.06827 8.56071 9.96397 8.65968 10.9067 8.91816C11.9205 9.19609 12.9382 9.64495 13.6465 10.3534C14.3548 11.0618 14.8037 12.0795 15.0818 13.0932C15.3403 14.0359 15.4395 14.9314 15.4772 15.4768C14.9317 15.4391 14.036 15.34 13.0932 15.0815C12.0795 14.8034 11.0618 14.3546 10.3535 13.6463C9.64525 12.938 9.19635 11.9204 8.9183 10.9068Z"
      stroke="currentColor"
    />
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
