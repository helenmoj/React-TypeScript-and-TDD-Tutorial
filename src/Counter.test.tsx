import React from "react";
import {render} from "@testing-library/react";
import {Counter} from "./Counter";

test("Should render a label and counter", () => {
    const handler = jest.fn();
    const {getByTestId} = render(<Counter count={0} onCounterIncrease={handler} />);
    const label = getByTestId("counter-label");
    expect(label).toBeInTheDocument();
    const counter = getByTestId("counter");
    expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
    const handler = jest.fn();
    const { getByTestId } = render(<Counter label={`Current`} count={0} onCounterIncrease={handler} />);
    const label = getByTestId("counter-label");
    expect(label).toBeInTheDocument();
  });