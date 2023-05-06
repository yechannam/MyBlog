import Template from "components/Common/Template";
import PostContent from "components/Post/PostContent";
import PostHead from "components/Post/PostHead";
import { graphql } from "gatsby";
import { FunctionComponent } from "react";
import { PostListItemType, PostPageItemType } from "types/PostItem.types";

type postTemplateProps = {
	data: {
		allMarkdownRemark: {
			edges: PostPageItemType[]	
		}
	}	
}

const PostTemplate: FunctionComponent<postTemplateProps> = function({
	data: {
		allMarkdownRemark: { edges }
	},
}) {
	const {
		node: {
			html,
			frontmatter: {
				title,
				summary,
				date,
				categories,
				thumbnail: {
					childImageSharp: {gatsbyImageData},
				},
			},
		},
	} = edges[0]
	
	return (
		<Template>
			<PostHead
				title={title}
				date={date}
				categories={categories}
				thumbnail={gatsbyImageData}
			/>
			<PostContent html={html} />
		</Template>
	)
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
	query queryMarkdownDataBySlug($slug: String) {
		allMarkdownRemark(filter: { fields: { slug : { eq: $slug }}}) {
			edges {
				node {
					html
					frontmatter {
						title
						summary
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`