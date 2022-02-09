import logo from "../1NumberLogo.png";
import background from "../backgroud.jpeg";

export default function Header() {
    return (
        <div className={"header-container"}>
            <img className={"header-background"} src={background} alt="coding and numbers"/>
            <div className={"header-overlay"}>
                <div className={"header"}>
                    <img className={"logo"} src={logo} alt="logo"/>
                    <p className={"brand-name"}>DIGITAL NUMERALS</p>
                </div>
                <div className={"header-content"}>
                    <div className={"slogan"}>
                        <div className={"big-slogan"}>
                            <h1>1 NUMBER.</h1>
                            <h1>1 ANSWER.</h1>
                        </div>
                        <div className={"description"}>
                            <p>
                                Sometimes there is a point in everyone's life
                                <br/>
                                when you have to ask the question:
                                <br/>
                                How do we write this number?
                                <br/>
                                And that is exactly why we are here.
                                <br/>
                                Scroll down to find out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}
