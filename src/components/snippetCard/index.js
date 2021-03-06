import Link from "next/link";

import { Blob1, Blob2, Blob3, Blob4, Blob5, Blob6 } from "@components/blobs";

import {
	StyledSnippetCard,
	StyledShape,
	StyledSnippetBody,
	StyledSnippetInfo,
	SnippetHeading,
} from "./styles";
import Image from "@components/Image";

const shapes = [
	<Blob1 key={1} />,
	<Blob2 key={2} />,
	<Blob3 key={3} />,
	<Blob4 key={4} />,
	<Blob5 key={5} />,
	<Blob6 key={6} />,
];

const SnippetCard = ({ post }) => {
	return (
		<StyledSnippetCard data-gsap="reveal-bottom">
			<StyledShape>{shapes[Math.floor(Math.random() * shapes.length)]}</StyledShape>

			<Link href={`/snippets/${post.slug}`} passHref>
				<StyledSnippetBody>
					<Image aspectRatio={1 / 1} src={post.coverImage} alt={`Image for ${post.title}`} />

					<StyledSnippetInfo>
						<SnippetHeading level={3}>{post.title}</SnippetHeading>
					</StyledSnippetInfo>
				</StyledSnippetBody>
			</Link>
		</StyledSnippetCard>
	);
};

export default SnippetCard;
