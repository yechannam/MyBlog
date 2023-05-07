import styled from "@emotion/styled"
import GlobalStyle from "components/Common/GlobalStyle"
import { Link } from "gatsby"
import { FunctionComponent } from "react"

const NotFoundPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`

const NotFoundText = styled.div`
	font-size: 150px;
	font-weight: 800;

	@media (max-width: 768px) {
		font-size: 100px;
	}
`

const NotFoundDescription = styled.div`
	font-size: 25px;
	text-align: center;
	line-height: 1.3;
	margin-top: 20px;
	margin-bottom: 8px;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`

const GoToMainButton = styled(Link)`
	margin-top: 30px;
	font-size: 20px;
	text-decoration: underline;

	&:hover {
		text-decoration: underline;
	}
`

const NotFoundpage: FunctionComponent = function () {
	return (
		<NotFoundPageWrapper>
			<GlobalStyle />
			<NotFoundText>404</NotFoundText>
			<NotFoundDescription>
				찾을 수 없는 페이지입니다 :(<br />
			</NotFoundDescription>
			<GoToMainButton to="/">메인으로</GoToMainButton>
		</NotFoundPageWrapper>
	)
}

export default NotFoundpage