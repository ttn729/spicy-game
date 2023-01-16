import Link from 'next/link'


const CSSinline = {
    display: "inline-block",
    padding: "5px",
    left: '50%',
    color: "white"
  }

const CSSnavbar = {
    width: "100%",
    textAlign: 'center',
    backgroundColor: "#333"
} as const;

export const Navbar = () => {
    return (
        <>
            <ul style={CSSnavbar}>
                <li style={CSSinline}>
                    <Link href="/play">Play</Link>
                </li>
                <li style={CSSinline}>
                    <Link href="/rewards">Rewards</Link>
                </li>
                <li style={CSSinline}>
                    <Link href="/store">Store</Link>
                </li>
                <li style={CSSinline}>
                    <Link href="/">Logout</Link>
                </li>
            </ul>
        </>
    );
};

