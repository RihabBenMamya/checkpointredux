import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../JS/Actions/actions";


const Filter = () => {
    const VISIBILITY_FILTERS = {
        ALL: "all",
        COMPLETED: "completed",
        INCOMPLETE: "incomplete"
      };
  const activeFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className=
                "filter"
                
            onClick={() => {
              console.log("setting", currentFilter);
              dispatch(setFilter(currentFilter));
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default Filter;
