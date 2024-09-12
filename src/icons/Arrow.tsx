import { IconProps } from "../utils/types";

const Arrow: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    const svgSize = `${size}px`;

    return (
        <svg
            className={className}
            height={svgSize}
            width={svgSize}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    fillRule="evenodd"
                    d="M5.29289,3.70711 C4.90237,3.31658 4.90237,2.68342 5.29289,2.29289 C5.68342,1.90237 6.31658,1.90237 6.70711,2.29289 L12.0976,7.68342 C12.4882,8.07395 12.4882,8.70711 12.0976,9.09763 L6.70711,14.4882 C6.31658,14.8787 5.68342,14.8787 5.29289,14.4882 C4.90237,14.0976 4.90237,13.4645 5.29289,13.0739 L9.58579,8.78099 L5.29289,4.48816 Z"
                />
            </g>
        </svg>
    );
};

export default Arrow;
