import { shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { IconButton } from "@components/atoms";

import { CartRow } from ".";
import { DEFAULT_PROPS } from "./fixtures";

describe("<CartRow />", () => {
  it("exists", () => {
    const onRemoveMock = jest.fn();
    const onQuantityChangeMock = jest.fn();
    const wrapper = shallow(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onQuantityChange={onQuantityChangeMock}
      />
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("should call mock when clicking on trash icon", () => {
    const onRemoveMock = jest.fn();
    const onQuantityChangeMock = jest.fn();
    const wrapper = shallow(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onQuantityChange={onQuantityChangeMock}
      />
    );

    wrapper
      .find(IconButton)
      .findWhere(wrapper => wrapper.props().name === "trash")
      .simulate("click");

    expect(onRemoveMock).toHaveBeenCalled();
  });

  it("should call mock when clicking on substract quantity icon", () => {
    const onRemoveMock = jest.fn();
    const onQuantityChangeMock = jest.fn();
    const wrapper = shallow(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onQuantityChange={onQuantityChangeMock}
      />
    );

    wrapper
      .find(IconButton)
      .findWhere(wrapper => wrapper.props().name === "trash")
      .simulate("click");

    expect(onRemoveMock).toHaveBeenCalled();
  });

  it("should call mock when clicking on add more quantity icon", () => {
    const onRemoveMock = jest.fn();
    const onQuantityChangeMock = jest.fn();
    const wrapper = shallow(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onQuantityChange={onQuantityChangeMock}
      />
    );

    wrapper
      .find(IconButton)
      .findWhere(wrapper => wrapper.props().name === "trash")
      .simulate("click");

    expect(onRemoveMock).toHaveBeenCalled();
  });
});