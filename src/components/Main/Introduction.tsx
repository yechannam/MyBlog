import styled from "@emotion/styled";
import ProfileImage from "./ProfileImage";
import { FunctionComponent } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

type IntroductionProps = {
	profileImage: IGatsbyImageData
}

const Background = styled.div`
	width: 100%;
	background-image: linear-gradient(60deg, #87CEEB 0%, #F08080 100%);
	filter: saturate(2);
	opacity: 0.8;
	color: #ffffff;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 400px;
	margin: 0;

	@media (max-width: 768px) {
		width: 100%;
		height: 300px;
		padding: 0 20px;
	}
`

const SubTitle = styled.div`
	font-size: 30px;
	font-weight: 400;

	@media (max-width: 768px) {
		font-size: 15px;
	}
`

const Title = styled.div`
	margin-top: 5px;
	font-size: 35px;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 25px;
	}
`

const Introduction: FunctionComponent<IntroductionProps> = ({profileImage}) => {
	return (
		<Background>
			<Wrapper>
				<ProfileImage profileImage={profileImage} />
				<div>
					<SubTitle>yecn's</SubTitle>
					<br />
					<Title>TECH BLOG</Title>
				</div>
			</Wrapper>
		</Background>
	)
}

export default Introduction