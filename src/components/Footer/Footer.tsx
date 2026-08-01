import { Container } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";

export function Footer() {
	return (
		<Container>
			<a href="#home" className="wordmark">
				<span>{"<Aneesh "}</span>
				<span>{" Ajithkumar/>"}</span>
			</a>
			<a
				href="https://www.qrz.com/db/VU3CVW"
				target="_blank"
				rel="noreferrer"
				className="call"
			>
				VU3CVW
			</a>
			<div className="social-media">
				<a
					href="https://www.linkedin.com/in/aneesh-ajithkumar/"
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
				>
					<img src={linkedin} alt="LinkedIn" />
				</a>
				<a
					href="https://github.com/aneeshaji"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub"
				>
					<img src={githubIcon} alt="GitHub" />
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=%2B919746934344&text=Hello+Aneesh"
					target="_blank"
					rel="noreferrer"
					aria-label="WhatsApp"
				>
					<img src={whatsapp} alt="WhatsApp" />
				</a>
				<a
					href="https://t.me/aneeshajithkumar"
					target="_blank"
					rel="noreferrer"
					aria-label="Telegram"
				>
					<img src={telegram} alt="Telegram" />
				</a>
			</div>
		</Container>
	);
}
