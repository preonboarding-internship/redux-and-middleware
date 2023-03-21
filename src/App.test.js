import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import App from "./App";
import store from "./store";

test("App should render heading and increase button", () => {
  const { heading, button } = setup();

  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("App should increase count when button is clicked", () => {
  const { heading, button } = setup();

  expect(heading.textContent).toBe("count:0");

  userEvent.click(button);

  expect(heading.textContent).toBe("count:1");
});

function setup() {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const heading = screen.getByRole("heading");
  const button = screen.getByText(/increase/i);

  return { heading, button };
}
