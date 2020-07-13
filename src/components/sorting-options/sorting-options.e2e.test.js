import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingOptions from "./sorting-options.jsx";

configure({adapter: new Adapter()});

describe(`Test SortingOptions component`, () => {
  it(`Should first item to be pressed`, () => {
    const onSortItemClick = jest.fn();

    const sortingOptions = shallow(
        <SortingOptions
          onSortItemClick={onSortItemClick}
          sortType={`popular`}
          onMenuClick={() => {}}
          onMenuExit={() => {}}
          isOpen={false}
        />
    );

    const sortingOptionItem = sortingOptions.find(`.places__option`).at(0);
    sortingOptionItem.simulate(`click`);

    expect(onSortItemClick).toHaveBeenCalledTimes(1);
    expect(onSortItemClick).toHaveBeenCalledWith(`popular`);
  });

  it(`Should second item to be pressed`, () => {
    const onSortItemClick = jest.fn();

    const sortingOptions = shallow(
        <SortingOptions
          onSortItemClick={onSortItemClick}
          sortType={`popular`}
          onMenuClick={() => {}}
          onMenuExit={() => {}}
          isOpen={false}
        />
    );

    const sortingOptionItem = sortingOptions.find(`.places__option`).at(1);
    sortingOptionItem.simulate(`click`);

    expect(onSortItemClick).toHaveBeenCalledTimes(1);
    expect(onSortItemClick).toHaveBeenCalledWith(`priceLowToHigh`);
  });
});
