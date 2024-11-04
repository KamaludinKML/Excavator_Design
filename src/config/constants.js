import { swatch, fileIcon, ai, logoShirt, stylishShirt,bucket,excavator } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "logocontrols",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "excavator",
    icon: excavator,
  },
  // {
  //   name: "logoShirt",
  //   icon: logoShirt,
  // },

];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
