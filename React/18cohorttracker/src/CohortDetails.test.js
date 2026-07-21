import React from "react";
import { shallow, mount } from "enzyme";
import CohortDetails from "./CohortDetails";
import {CohorstData, CohortsData}  from "./Cohort";
//TEST 1
describe("Cohort Details Component", () =>{
    test("should create the component",() =>{
    const wrapper =shallow(
        <CohortDetails cohort={CohortsData[0]} />
    );
    expect (wrapper.exists()).toBe(true);
});

//TEST2
test("should initialize the props",() =>{
    const wrapper= mount(
            <CohortDetails cohort={CohortsData[0]} />
    );
    expect(wrapper.props().cohort)
        .toEqual(CohortsData[0]);
});


//TEST 3

test("should display cohort code in h3", ()=>{
    const wrapper=mount(
        <CohortDetails cohort={CohortsData[0]} />
    );
    const heading =wrapper.find("h3");
    expect(heading.text())
        .toContain(CohortsData[0].cohortCode);
});


//TEST 4
test("should always render html", () =>{
    const wrapper =shallow(
        <CohortDetails cohort={CohortsData[0]} />
    );
    expect(wrapper)
        .toMatchSnapshot();
});

});

