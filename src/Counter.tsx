import React from "react";

export type CounterProps = {
    label?: string;
    count: number;
    onCounterIncrease: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Counter = ({label = "Count", count}: CounterProps) => {
  return (
    <div>
    <div data-testid="counter-label">{label}</div>
    <div data-testid="counter"
        // onClick={handleClick}
    >
        {count}
    </div>
    {count}
</div>
);
};

