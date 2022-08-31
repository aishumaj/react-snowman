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

test("correct guess displays letter and photo doesn't change", () => {
  const { container, debug } = render(<Snowman words={["react"]} maxWrong={6} />);
  
  const img = container.querySelector("img");
  expect(img.getAttribute("src")).toEqual("0.png");
  
  fireEvent.click(container.querySelector("#r"));
  expect(img.getAttribute("src")).toEqual("0.png");
  const word = container.querySelector(".Snowman-word");
  expect(word).toContainHTML('<p class="Snowman-word">r____</p>')
  //expect container to have last image
  
 
})

test("photo and letter buttons change correctly after incorrect guess", () => {
  const { container, debug } = render(<Snowman words={["react"]} />);
  const img = container.querySelector("img");

  expect(img.getAttribute("src")).toEqual("0.png");
  
  fireEvent.click(container.querySelector("#b"));
  expect(img.getAttribute("src")).toEqual("1.png");
  expect(container.querySelector("#b").getAttribute("disabled")).toEqual("")
  
  fireEvent.click(container.querySelector("#d"));
  expect(img.getAttribute("src")).toEqual("2.png");
  expect(container.querySelector("#d").getAttribute("disabled")).toEqual("")
  
  
  fireEvent.click(container.querySelector("#f"));
  expect(img.getAttribute("src")).toEqual("3.png");
  expect(container.querySelector("#f").getAttribute("disabled")).toEqual("")
  
  
  fireEvent.click(container.querySelector("#g"));
  expect(img.getAttribute("src")).toEqual("4.png");
  expect(container.querySelector("#g").getAttribute("disabled")).toEqual("")
  
  
  fireEvent.click(container.querySelector("#h"));
  expect(img.getAttribute("src")).toEqual("5.png");
  expect(container.querySelector("#h").getAttribute("disabled")).toEqual("")
  
  
  fireEvent.click(container.querySelector("#i"));
  expect(img.getAttribute("src")).toEqual("6.png");
  
  //expect container to have last image
  
  expect(container.querySelector(".letterButtons")).not.toBeInTheDocument();
 
})

test("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});

