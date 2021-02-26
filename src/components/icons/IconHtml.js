import * as React from "react";

function SvgIconHtml(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			style={{
				msTransform: "rotate(360deg)",
				WebkitTransform: "rotate(360deg)",
			}}
			viewBox="0 0 32 32"
			transform="rotate(360)"
			{...props}
		>
			<path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30 5.902 27.201z" />
			<path fill="#f1662a" d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z" />
			<path
				fill="#ebebeb"
				d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16v-3.091zM16 21.434l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z"
			/>
			<path
				fill="#fff"
				d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-7.185zM15.989 7.151v3.091h7.466l.062-.694.141-1.567.074-.83h-7.743z"
			/>
		</svg>
	);
}

export default SvgIconHtml;
