import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { app } from '../../utils/firebase';


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

    const auth = getAuth(app);
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        router.push('/');
    }


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
                    <button onClick={() => auth.signOut()}>Logout</button>
                </li>
            </ul>
        </>
    );
};

