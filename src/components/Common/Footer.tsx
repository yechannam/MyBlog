import styled from "@emotion/styled";
import { FunctionComponent } from "react";

const FooterWrapper = styled.footer`
	display: grid;
	place-items: center;
	margin-top: auto;
	padding: 50px 0;
	font-size: 15px;
	text-align: center;
	line-height: 1.5;

	@media (max-width: 768px) {
		font-size: 13px;
	}
`

const Footer: FunctionComponent = () => {
	return (
		<FooterWrapper>
			Thank you for visiting my blog,
			Have a good day :)
			<br /> 2023 Developer yecn, Powerd by Gatsby
		</FooterWrapper>
	)
}

export default Footer