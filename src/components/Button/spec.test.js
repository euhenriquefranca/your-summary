import React from "react";
import Button from "./";
import "../../enzyme";

import { shallow } from "enzyme";

describe("Button", () => {
  it("should be callback on button click", () => {
    const mockFunc = jest.fn();

    const component = shallow(<Button onClick={mockFunc} />);

    component.simulate("click");

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
