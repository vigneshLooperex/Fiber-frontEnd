import * as React from "react";
import { SVGProps } from "react";
const BigCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={147}
        height={294}
        viewBox="0 0 147 294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle
            cx={147}
            cy={147}
            r={146}
            transform="rotate(-60 147 147)"
            fill="url(#paint0_radial_38_35)"
        />
        <defs>
            <radialGradient
                id="paint0_radial_38_35"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(231 147) rotate(-180) scale(217)"
            >
                <stop stopColor="#0E1EBB" stopOpacity={0} />
                <stop offset={1} stopColor="#0D1EBD" stopOpacity={0.81} />
            </radialGradient>
        </defs>
    </svg>

);
export default BigCircle;
