"use client";
import React from "react";
import CustomAutoComplete from "./CustomAutoComplete";
import CustomSwitch from "./CustomSwitch";

function BrowseFilterSec() {
  const [catagory, setCatagory] = React.useState<object>({});
  const [sortBy, setSortBy] = React.useState<object>({});
  const [favorite, setFavorite] = React.useState<boolean>(false);
  const [commented, setCommented] = React.useState<boolean>(false);
  const catagoryOptions = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Technology",
      value: "technology",
    },
    {
      label: "Science",
      value: "science",
    },
    {
      label: "Music",
      value: "music",
    },
    {
      label: "Fantasy",
      value: "fantasy",
    },
    {
      label: "Space",
      value: "space",
    },
  ];
  const sortByOptions = [
    {
      label: "Uploade Date(Recent)",
      value: "recent",
    },
    {
      label: "Uploade Date(Old)",
      value: "old",
    },
    {
      label: "Popularity",
      value: "popularity",
    },
  ];
  return (
    <div className="md:min-h-[54vh] md:max-h-[90vh] md:min-w-[300px] min-h-[30vh] max-h-[40vh] min-w-[100vw] flex flex-col justify-cent items-start  mb-10 md:shadow-2xl md:rounded-lg md:glassEffect bg-[#f7ac0a95]  text-white">
      <div className="w-full h-20 p-5">
        <CustomAutoComplete
          name="Catagory"
          options={catagoryOptions}
          selectorFunction={setCatagory}
          value={catagory}
          width="200px"
          color="secondary"
        />
      </div>
      <div className="w-full h-20 p-5">
        <CustomAutoComplete
          name="Sort By"
          options={sortByOptions}
          selectorFunction={setSortBy}
          value={sortBy}
          width="200px"
          color="secondary"
        />
      </div>
      <div className="w-full h-20 p-5">
        <CustomSwitch
          defaultChecked={false}
          name="My favourites"
          toggleFunction={setFavorite}
          value={favorite}
        />
      </div>
      <div className="w-full h-20 p-5">
        <CustomSwitch
          defaultChecked={false}
          name="Commented"
          toggleFunction={setCommented}
          value={commented}
        />
      </div>
    </div>
  );
}

export default BrowseFilterSec;
