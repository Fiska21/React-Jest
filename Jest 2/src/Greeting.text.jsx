import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import Greeting from './Greeting';

describe("Greeting Component", () => {
    it("should update the greeting when the input changes", () => {
        render(<Greeting />);

        const inputElement = screen.getByLabelText("Enter Your Name: ");
        userEvent.type(inputElement,"Fiska")
        
        const greetingTextElement = screen.getByText("Welcome to React Fiska!");
        // expect(inputElement.value).toEqual(" ");
        expect(greetingTextElement).toBeInTheDocument();

        const inputElement = screen.getByText("Clik Me");
        userEvent.click(inputElement)
        expect(screen.getAllByLabelText("You Just Click Me")).toBeInTheDocument()
    })
 
})