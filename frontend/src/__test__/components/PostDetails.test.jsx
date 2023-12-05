import { render, screen } from "@testing-library/react";
import PostDetails from "../../components/PostDetails";

describe("PostDetails Component", () => {
  it("should render PostDetails component correctly", () => {
    render(<PostDetails />);
    const element = screen.getByRole("payload");
    expect(element).toBeInTheDocument()
  });
});