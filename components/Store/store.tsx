import { DisplayStatus } from '../DisplayStatus/displaystatus';
import Popup from 'reactjs-popup';
import { useEffect } from 'react';
import { UPDATE } from '@/redux/tokenSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getPoints } from '../FetchDB/fetchdb';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../../utils/firebase';


export const Store = () => {

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

      <div>
        <Popup
          trigger={
            <button>
              <h1>Buy Spicy Tokens</h1>
              <h2>5 tokens for $1</h2>
            </button>
          }
          position="right center"
        >
          <div>
            Hahahahahaha, already out of tokens? Well, you are out of luck! This feature is not available yet.
          </div>
        </Popup>
      </div>
    </>
  );
};
