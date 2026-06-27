export default function ProbabilityGauge({ probability }) {

    const radius = 80;

    const stroke = 14;

    const normalizedRadius = radius - stroke / 2;

    const circumference = normalizedRadius * 2 * Math.PI;

    const progress = Math.min(probability, 100);

    const strokeDashoffset =

        circumference - (progress / 100) * circumference;

    let color = "#ef4444";

    let glow = "#ef4444";

    if (progress >= 70) {

        color = "#22c55e";

        glow = "#22c55e";

    }

    else if (progress >= 40) {

        color = "#84cc16";

        glow = "#84cc16";

    }

    return (

        <div className="flex justify-center">

            <svg

                height={radius * 2}

                width={radius * 2}

            >

                <defs>

                    <filter id="glow">

                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />

                        <feMerge>

                            <feMergeNode in="coloredBlur" />

                            <feMergeNode in="SourceGraphic" />

                        </feMerge>

                    </filter>

                </defs>

                {/* Background Circle */}

                <circle

                    stroke="#1f2937"

                    fill="transparent"

                    strokeWidth={stroke}

                    r={normalizedRadius}

                    cx={radius}

                    cy={radius}

                />

                {/* Progress Circle */}

                <circle

                    stroke={color}

                    fill="transparent"

                    strokeWidth={stroke}

                    strokeLinecap="round"

                    strokeDasharray={`${circumference} ${circumference}`}

                    strokeDashoffset={strokeDashoffset}

                    filter="url(#glow)"

                    style={{

                        transition:

                            "stroke-dashoffset 1.3s ease"

                    }}

                    r={normalizedRadius}

                    cx={radius}

                    cy={radius}

                    transform={`rotate(-90 ${radius} ${radius})`}

                />

                {/* Percentage */}

                <text

                    x="50%"

                    y="46%"

                    dominantBaseline="middle"

                    textAnchor="middle"

                    className="fill-white font-black text-3xl"

                >

                    {progress.toFixed(1)}%

                </text>

                {/* Label */}

                <text

                    x="50%"

                    y="64%"

                    dominantBaseline="middle"

                    textAnchor="middle"

                    className="fill-zinc-400 text-sm"

                >

                    Pump Score

                </text>

            </svg>

        </div>

    );

}