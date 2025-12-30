import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
    return (
        <Container id="experience">
            <ScrollAnimation animateIn="fadeInLeft">
                <h2>Work Experience</h2>
            </ScrollAnimation>
            <div className="experience-body">

                <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                    <div className="experience-item">
                        <header>
                            <h3>RM Education Solutions India Pvt. Ltd, Trivandrum</h3>
                            <span className="date">July 2021 - PRESENT</span>
                        </header>
                        <p className="role">Project Lead</p>
                        <p>
                            Worked in technologies React, Angular, JavaScript, jQuery, PHP and Yii.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                    <div className="experience-item">
                        <header>
                            <h3>Yarab Technologies Pvt. Ltd, Trivandrum</h3>
                            <span className="date">May 2020 - June 2021</span>
                        </header>
                        <p className="role">Senior Software Engineer</p>
                        <p>
                            Worked in technologies JavaScript, jQuery, PHP, Laravel and WordPress.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                    <div className="experience-item">
                        <header>
                            <h3>Optiologic Technologies Pvt. Ltd, Trivandrum</h3>
                            <span className="date">January 2016 - April 2020</span>
                        </header>
                        <p className="role">Junior Software Engineer</p>
                        <p>
                            Worked in technologies JavaScript, jQuery, PHP, Laravel and WordPress.
                        </p>
                    </div>
                </ScrollAnimation>

            </div>
        </Container>
    );
}
