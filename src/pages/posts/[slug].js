import { Fragment } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ErrorPage from "next/error";

import { getPostBySlug, listAllPosts } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";
import PostArticle from "@components/postArticle";
import BlogProgress from "@components/blogProgress";
import Heading from "@components/heading";

const RecentPosts = dynamic(() => import("@components/sections/recentPosts"));

const Post = ({ post, relatedPosts }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Heading level={1}>Loading...</Heading>;
	}

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Fragment>
			<BlogProgress />

			{/* Post */}
			<PostArticle post={post} />

			{/* Related Posts */}
			<RecentPosts posts={relatedPosts} headerText="Similar Articles" />
		</Fragment>
	);
};

export default Post;

export async function getStaticProps({ params }) {
	// Get the content and meta of current post
	const post = getPostBySlug({
		slug: params.slug,
		fields: [
			"title",
			"date",
			"slug",
			"author",
			"content",
			"ogImage",
			"coverImage",
			"tags",
			"type",
			"excerpt",
			"readTime",
		],
		postType: "posts",
	});
	const content = await markdownToHtml(post.content || "");

	// List at most 3 related posts
	const relatedPosts = listAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	})
		.filter(
			otherPost =>
				otherPost.slug !== post.slug && otherPost.tags.find(tag => otherPost.tags.includes(tag)),
		)
		.slice(0, 3);

	return {
		props: {
			post: { ...post, content },
			relatedPosts,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	// List all posts' slugs
	const posts = listAllPosts({ fields: ["slug"], postType: "posts" });

	return {
		paths: posts.map(post => {
			return {
				params: { slug: post.slug },
			};
		}),
		fallback: false,
	};
}
