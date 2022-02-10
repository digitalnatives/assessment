import linkedin from "../pictures/linkedin-logo.png"
import github from "../pictures/github-logo.png"

export default function Footer() {
    return(
        <div className={"footer"}>
            <div className={"follow-me"}>
                <h2 className={"footer-title"}>FOLLOW ME</h2>
                <div className={"footer-box"}>
                    <a href="https://github.com/Sjpeti97">
                        <img className={"linkedin"} src={github} alt=""/>
                    </a>
                </div>
            </div>
            <div className={"contact"}>
                <h2 className={"footer-title"}>CONTACT</h2>
                <div className={"footer-box"}>
                    <a href="https://www.linkedin.com/in/p%C3%A9ter-simon-j%C3%B3j%C3%A1rt">
                        <img className={"github"} src={linkedin} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}