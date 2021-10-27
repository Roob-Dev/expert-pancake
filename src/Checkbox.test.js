import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Checkbox from "./Checkbox";

test("Selecting checkbox", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
