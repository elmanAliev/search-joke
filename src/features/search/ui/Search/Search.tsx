import { useEffect, useState } from "react";
import cls from "./Search.module.scss";
import { useDebounce } from "../../../../shared/hooks/useDebounce";
import { searchJokes } from "../../model/services/searchJokes";
import { useAppDispatch } from "../../../../shared/hooks/useAppDispatch";
import { jokesActions } from "../../model/slice/jokesSlice";
import Input from "../../../../shared/ui/Input/Input";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const fetchData = () => {
    dispatch(searchJokes(searchValue));
  };

  const debouncedFetchData = useDebounce(fetchData, 500);

  useEffect(() => {
    dispatch(jokesActions.resetJokes());

    if (searchValue.length > 2) {
      debouncedFetchData();
    }
  }, [searchValue]);

  return (
    <div className={cls.wrapper}>
      <Input
        value={searchValue}
        onChange={handleChange}
        placeholder="Search jokes..."
        autoFocus
      />
    </div>
  );
};

export default Search;
