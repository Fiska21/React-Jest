import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import Button from './Button';

describe("Button", () => {
    it("show text when button click", () => {
        render(<Button />)
        const button = screen.getByText("Click Me")
        
        userEvent.click(button)
        const text = screen.getByText("You Just Click Me")
        expect(text).toBeInTheDocument()

    })
}
)