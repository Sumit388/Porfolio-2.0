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
    <div className="min-h-[54vh] max-h-[90vh] min-w-[300px]  mb-10 shadow-2xl rounded-lg glassEffect bg-[#f7ac0a95] text-white">
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
