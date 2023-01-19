import { UPDATE } from '@/redux/tokenSlice';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../../utils/firebase';
import { DisplayStatus } from '../DisplayStatus/displaystatus';
import { getPoints } from '../FetchDB/fetchdb';

export const Rewards = () => {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const { numTokens, isLoading, counters } = useSelector((state: any) => state.token);

  const hello = async () => {
    const result = await getPoints(user);
    dispatch(UPDATE(result));
    console.log(result);
  };

  useEffect(() => {
    if (user) {
      hello();
      console.log('User: ', user);
    }
  }, [user, hello]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <DisplayStatus />

      <button>
        <h1>Một Con Vịt</h1>
        <h2>500 Spicy Tokens</h2>
      </button>

      <button>
        <h1>Request Any Song</h1>
        <h2>5000 Spicy Tokens</h2>
      </button>
    </>
  );
};

function dispatch(arg0: { payload: number; type: 'token/UPDATE' }) {
  throw new Error('Function not implemented.');
}
