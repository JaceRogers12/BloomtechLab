import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import RenderLandingPage from "../components/pages/Landing/RenderLandingPage.jsx";

describe("RenderLandingPage renders properly", () => {
    beforeEach(() => {
        render(<RenderLandingPage/>);
    })
    test("1: header renders correctly", () => {
        screen.getByText("Asylum Office Grant Rate Tracker");
        expect(screen.queryByText("The Asylum Office Grant Rate Tracker provides", {exact: false}).toBeVisible)
    })
    test("2: graphs render correctly", () => {
        screen.getByAltText("Bar Graph")
        screen.getByAltText("Pie Chart")
        screen.getByAltText("Line Graph")
        screen.getByText("Rates By Office", {exact: false})
        screen.getByText("Rates By Nationality", {exact: false})
        screen.getByText("Rates Over Time", {exact: false})
        screen.getByText("View the Data")
        screen.getByText("Download the Data")
    })
    test("3: middle section renders correctly", () => {
        screen.getByAltText("Human Rights First")
        screen.getByText("Human Rights First has created a search tool", {exact: false})
    })
    test("4: bottom section renders correctly", () => {
        screen.getByText("Systemic Disparity Insights")
        screen.getByText("36%")
        screen.getByText("5%")
        screen.getByText("6x Lower")
        screen.getByText("By the end of the Trump administration", {exact: false})
        screen.getByText("The New York asylum office grant rate dropped", {exact: false})
        screen.getByText("Between fiscal year 2017 and 2020", {exact: false})
        screen.getByText("Read More")
    })
    test("5: back to top button renders correctly", () => {
        screen.getByText("Back To Top ^")
    })
})

