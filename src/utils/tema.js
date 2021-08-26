import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const colors = {

    primary: "#77c5d5",
    primary2: "#c7dce1",
    primary3: "#dfe9ee",
    black: "#1E1F20",
    white: "#FFFFFF",
    like: "#FC6D3F",
    gray: "#d4d4d6",
    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    blue: "#4496DA"

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};