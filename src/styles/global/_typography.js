import { css } from "styled-components";

export default css`
	${
		"" /* h1 {
		&.hero {
			font-size: 6.25rem;
		}
		font-size: 4rem;
		font-weight: 800;
		text-shadow: 2px 2px var(--color-highlight);
		margin-top: 1rem;
		margin-bottom: 1rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	}

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		text-shadow: 1px 1px var(--color-highlight);
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	}

	h3 {
		font-size: 2rem;
		font-weight: 500;
		text-shadow: 1px 1px var(--color-highlight);
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	}

	h4 {
		font-weight: 500;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	}

	h5 {
		font-size: 1.4rem;
		font-weight: 500;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	}

	h6 {
		font-size: 1.2rem;
		font-weight: 500;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	} */
	}

	p {
		margin-top: 1rem;
		margin-bottom: 1rem;
		&::selection {
			background-color: var(--color-highlight-alt);
		}
	}

	a,
	span,
	div,
	em,
	strong,
	code,
	input {
		&::selection {
			background-color: var(--color-highlight-alt);
			color: var(--color-text);
		}
	}

	ul {
		list-style: disc;
		padding-left: 2rem;
		margin-top: 2rem;
		margin-bottom: 2rem;

		li {
			margin-top: 0.8rem;
			margin-bottom: 0.8rem;

			&::selection {
				background-color: var(--color-highlight-alt);
				color: var(--color-text);
			}
		}
	}

	ol {
		li {
			&::selection {
				background-color: var(--color-highlight-alt);
				color: var(--color-text);
			}
		}
	}

	em {
		font-style: italic;
	}

	strong {
		font-weight: 600;
	}

	code {
		font-family: "Source Code Pro", monospace;
	}
`;
