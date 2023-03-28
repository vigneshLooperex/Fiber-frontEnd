import * as React from "react";
import { SVGProps } from "react";
const SmallCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={84}
        height={172}
        viewBox="0 0 84 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M84 86C84 133.496 45.4965 172 -2 172C-49.4965 172 -88 133.496 -88 86C-88 38.5035 -49.4965 0 -2 0C45.4965 0 84 38.5035 84 86Z"
            fill="url(#paint0_radial_41_35)"
        />
        <defs>
            <radialGradient
                id="paint0_radial_41_35"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-22.9478 29.7466) rotate(-145.193) scale(104.74)"
            >
                <stop stopColor="#0E1EBB" stopOpacity={0} />
                <stop offset={1} stopColor="#0D1EBD" stopOpacity={0.81} />
            </radialGradient>
        </defs>
    </svg>
);
export default SmallCircle;
