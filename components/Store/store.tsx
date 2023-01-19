import { DisplayStatus } from '../DisplayStatus/displaystatus';
import Popup from 'reactjs-popup';

export const Store = () => {
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
