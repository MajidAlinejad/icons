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
      d="M19.5479 7.26648C20.2473 6.41159 20.1213 5.15154 19.2664 4.45208C18.4116 3.75263 17.1515 3.87863 16.4521 4.73352L8.66615 14.2496L6.19997 12.4C5.31631 11.7373 4.06271 11.9163 3.39997 12.8C2.73723 13.6837 2.91631 14.9373 3.79997 15.6L7.03306 18.0248C8.31913 18.9894 10.1369 18.7687 11.1549 17.5245L19.5479 7.26648Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
