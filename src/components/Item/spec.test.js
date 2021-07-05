import React from "react";
import Item from "../Item";
import More from "../More";

import "../../enzyme";

import { shallow, mount } from "enzyme";

describe("Item", () => {
  const summary = {
    cdi: 3.45675,
    gain: 1833.23,
    profitability: 2.76789,
    total: 3200876,
  };

  const Summary = (
    <Item
      total={summary.total}
      profitability={summary.profitability}
      cdi={summary.cdi}
      gain={summary.gain}
    />
  );

  it("should be a instance of Summary with the props", () => {
    const component = mount(Summary);

    expect(component.props().total).toEqual(3200876);
    expect(component.props().profitability).toEqual(2.76789);
    expect(component.props().cdi).toEqual(3.45675);
    expect(component.props().gain).toEqual(1833.23);

    component.unmount();
  });

  it("should be a instance of Item with the specify components", () => {
    const component = shallow(Summary);

    expect(component.find(More)).toHaveLength(1);
  });
});
