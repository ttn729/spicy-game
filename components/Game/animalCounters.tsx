import { SET_COUNTERS } from '@/redux/tokenSlice';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const AnimalCounters = (props: any) => {
  const dispatch = useDispatch();
  //   const [value, setValue] = useState(0);

  const incDecCounters = (inc: number, index: number) => {
    const newCounters = [...props.counters];
    if (newCounters[0] == props.numTokens && inc == 1) {
      return;
    }

    if (newCounters[index] + inc >= 0) {
      newCounters[index] += inc;
      newCounters[0] += inc; // Add to the total count
      dispatch(SET_COUNTERS(newCounters));
    }
  };

  return (
    <>
      <Button onClick={() => incDecCounters(-1, props.idx)}>-</Button>

      <TextField
        id="outlined-number"
        variant="filled"
        type="tel"
        label={props.counters[props.idx]}
        onChange={e => {
          const newCounters = [...props.counters];
          newCounters[props.idx] = Number(e.target.value);
          const total = props.counters[0] - props.counters[props.idx] + newCounters[props.idx];
          newCounters[0] = total;

          if (total <= props.numTokens && newCounters[props.idx] >= 0) {
            dispatch(SET_COUNTERS(newCounters));
            console.log(newCounters);
          }
        }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          inputProps: { min: 0, max: props.numTokens - props.counters[0] + props.counters[props.idx] },
        }}
      />
      <Button onClick={() => incDecCounters(1, props.idx)}>+</Button>
    </>
  );
};
