import axios from "axios";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";

function App() {
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");
	const [displayedText, setDisplayedText] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let index = 0;
		setDisplayedText(response[0]); // 이전 텍스트 초기화

		const typeText = () => {
			if (index < response.length - 1) {
				setDisplayedText((prev) => {
					console.log(index);
					return prev + response[index];
				});
				index++;
				setTimeout(typeText, 50); // 타이핑 속도 조절 (밀리초 단위)
			}
		};

		typeText();

		// cleanup function to clear any remaining timeouts if the component unmounts
		return () => {
			index = response.length; // stop further execution
		};
	}, [response]);

	return (
		<>
			<Header />
			<Main>
				<CenterImg src="/src/assets/img/잠자는호시노.gif" />
				<InputDiv>
					<ResDiv>
						<DetailDiv>
							<Name>호시노</Name>
							<DepartmentName>대책위원회</DepartmentName>
						</DetailDiv>
						<ContentText>
							{loading ? <Loading>● {message}</Loading> : displayedText}
						</ContentText>
					</ResDiv>

					<Input
						type="text"
						onChange={(e) => {
							setMessage(e.target.value);
							// console.log(message);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.target.value = "";
								setLoading(true);
								axios
									.post("http://localhost:5000/message/add", {
										message,
									})
									.then((response) => {
										setResponse(response.data.res);
										setLoading(false);
										console.log(response);
									})
									.catch((error) => {
										console.log(error);
										setLoading(false);
									});
							}
						}}
					/>
				</InputDiv>
			</Main>
		</>
	);
}

export default App;

const Main = styled.main`
	width: 100vw;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	position: relative;
`;

const CenterImg = styled.img`
	width: 300px;
	height: 300px;
`;

const InputDiv = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	bottom: 0px;
	background-color: rgba(16, 33, 49, 0.8);
	box-shadow: 0 -30px 30px 30px rgba(16, 33, 49, 0.8);
`;

const ResDiv = styled.div`
	width: 70%;
	justify-self: flex-start;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const DetailDiv = styled.div`
	padding: 10px 0px;
	border-bottom: 3px solid rgba(255, 255, 255, 0.2);
	display: flex;
	align-items: flex-end;
	gap: 10px;
`;

const Name = styled.h2`
	color: white;
	font-size: 40px;
`;

const DepartmentName = styled.h2`
	color: #76b4d4;
	font-size: 32px;
`;

const ContentText = styled.p`
	height: 150px;
	font-size: 32px;
	line-height: 1.2;
	color: white;
`;

const Input = styled.input`
	width: 70%;
	height: 7rem;
	padding: 20px;
	margin: 10px 0px;
	border: 3px solid black;
	border-radius: 16px;
	background-color: rgba(255, 255, 255, 0.7);
	color: black;
	font-size: 36px;
	font-family: "MainFont";
`;

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Loading = styled.div`
	font-size: 36px;
	background: linear-gradient(270deg, #ffffff, #cecece, #858585);
	background-size: 400% 400%;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${gradient} 2s ease infinite;
`;
