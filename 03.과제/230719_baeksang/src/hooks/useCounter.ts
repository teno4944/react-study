import { useState } from 'react';

type Props = {
  defaultValue?: number;
  step?: number;
};

export const useCounter = ({ defaultValue = 1, step = 1 }: Props) => {
  const [count, setCount] = useState(defaultValue);

  const increase = () => {
    setCount((prev) => prev + step);
  };

  const decrease = () => {
    setCount((prev) => prev - step);
  };

  return {
    increase,
    decrease,
    count,
  };
};
