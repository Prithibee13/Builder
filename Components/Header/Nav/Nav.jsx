import Link from "next/link"

const Nav = () => {
    return (
        <div className="sticky top-0 bg-white">
            <div className="navbar p-6 md:px-36 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"

                                viewBox="0 0 448 512"
                            >
                                <path

                                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <img className="logo" src="https://i.postimg.cc/kGtB4cPM/hook.png" />
                        </div>
                        <div>
                            <Link href='/' className="btn btn-ghost text-xl">Builder</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/service'>Service</Link></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Nav