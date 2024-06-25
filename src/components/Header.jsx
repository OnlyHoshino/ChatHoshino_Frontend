import styled from "styled-components";

function Header() {
	return (
		<MainHeader>
			<LogoImg src="/src/assets/img/빵떡시노.jpg" />
			<Title>ChatHoshino</Title>
		</MainHeader>
	);
}

export default Header;

const MainHeader = styled.header`
	width: 100%;
	height: 20%;
	padding: 0px 100px;
	position: sticky;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	z-index: 1;
`;

const LogoImg = styled.img`
	width: 150px;
	height: 150px;
`;

const Title = styled.h1`
	font-size: 100px;
	color: #ce5bf8;
`;
