import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import classNames from "classnames";

import { NAV_ITEMS } from "@/lib/constants";

import SiteLogo from "@/components/siteLogo";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
	const headerRef = useRef();
	const router = useRouter();

	useEffect(() => {
		ScrollTrigger.create({
			trigger: "main",
			start: "top top-=50",
			end: "bottom top-=500",
			onUpdate: self => {
				if (self.progress > 0) {
					return headerRef.current?.classList.add("scrolled");
				}
				headerRef.current?.classList.remove("scrolled");
			},
		});
	}, [router.asPath]);

	return (
		<header ref={headerRef} className="global-header">
			<div className="global-header__inner">
				<div className="global-header__row global-header__row--1">
					<Link href="/" passHref>
						<a>
							<SiteLogo width="8.5rem" height="8.5rem" />
						</a>
					</Link>
				</div>

				<nav className="global-header__row global-header__row--2">
					<ul>
						{NAV_ITEMS.map(({ href, label }, idx) => (
							<li key={idx}>
								<Link href={href} passHref>
									<a
										className={classNames("", {
											active: router.pathname === href,
										})}
									>
										{label}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
