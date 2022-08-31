import { render, fireEvent } from "@testing-library/react"
import Snowman from "./Snowman"

test("photo displays after maximum guesses", () => {
  const { container, debug } = render(<Snowman words={["react"]} maxWrong={1} />);
  
  fireEvent.click(container.querySelector("#w"));
  
  //expect container to have last image
  const img = container.querySelector("img");
  
  expect(img.getAttribute("src")).toEqual("1.png");
  expect(container.querySelector(".letterButtons")).not.toBeInTheDocument();
 
})

test("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});