import logo from "../1NumberOneInCircle.png";

export default function Header() {
    return (
    <div className={"header"}>
        <a href={"/"}>
            <img className={"App-logo"} src={logo} alt="logo"/>
            <p>DIGITAL NUMERALS</p>
        </a>
    </div>
    )
}