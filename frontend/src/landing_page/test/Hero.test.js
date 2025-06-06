import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Hero from "../Hero";
describe("Hero component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/hero.png");
    });
});f