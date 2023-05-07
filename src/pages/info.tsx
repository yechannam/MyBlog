import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"


const TextStyle = css`
	font-size: 18px;
	font-weight: 700;
	color: gray;
`

const globalStyle = css`
	* {
		margin: 0;
		padding: 10;
		box-sizing: border-box;
		font-size: 20px;
	}
`

const Text1 = styled.div`
	font-size: 20px;
	font-weight: 900;
	color: blue;
`

type InfoPageProps = {
	data: {
		site :{
			siteMetadata :{
				title : string
				description: string
				author: string
			}
		}
	}
}

const InfoPage: FunctionComponent<InfoPageProps>=
function ({
	data: {
		site:{
			siteMetadata: {
				title, description, author
			},
		},
	},
}) {
	return (
		<div>
			<Global styles={globalStyle} />
			<div css={TextStyle}>{title}</div> 
			<Text1>{description}</Text1> 
			{author}

			{/* <Link to="/">go home</Link> */}
		</div>
	)
}

export default InfoPage

export const metadataQuery = graphql`
	{
		site {
			siteMetadata{
				title
				description
				author
			}
		}
	}
`