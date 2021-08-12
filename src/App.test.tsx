import React from "react";
import {render} from "@testing-library/react";
import App, { Heading } from "./App";

test("renders hello react", () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/hello react/i);
    expect(linkElement).toBeInTheDocument();
});




