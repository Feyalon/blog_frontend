export default function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="miniAbout">
                        <img src="https://avatars.githubusercontent.com/u/63968483?v=4" alt="" />
                        <h2>
                            Feyalon
                        </h2>
                        <h3>
                            Coder..
                        </h3>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="RightHeader">
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}