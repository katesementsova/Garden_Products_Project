import { useLayoutEffect, useState } from "react";

const sortMap = {
  higher: (list, sortProp) =>
    [...list].sort((a, b) => b[sortProp] - a[sortProp]),

  lower: (list, sortProp) =>
    [...list].sort((a, b) => a[sortProp] - b[sortProp]),
};

export const useFilterBySorted = (list, sortProp, initMode = "default") => {
  const [sortedList, setSortedList] = useState(list);
  const [sortMode, setSortMode] = useState(initMode);

  const onSort = (event) => {
    setSortMode(event.target.value);
  };

  useLayoutEffect(() => {
    setSortedList(
      sortMode === "default" ? list : sortMap[sortMode](list, sortProp)
    );
  }, [sortMode, sortProp, list]);

  return { onSort, sortedList, setSortMode, sortMode };
};
