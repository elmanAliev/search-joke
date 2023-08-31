import { useSelector } from "react-redux";
import cls from "./JokesPage.module.scss";
import { Search } from "../../../../features/search";
import {
  jokesInitedSelector,
  jokesErrorSelector,
  jokesIsLoadingSelector,
  jokesListSelector,
} from "../../../../features/search/model/selectors/jokesSelector";
import JokesList from "../../../../entities/Joke/ui/JokesList/JokesList";

const JokesPage = () => {
  const jokesList = useSelector(jokesListSelector);
  const isLoading = useSelector(jokesIsLoadingSelector);
  const error = useSelector(jokesErrorSelector);
  const inited = useSelector(jokesInitedSelector);

  return (
    <div className={cls.wrapper}>
      <Search />
      <JokesList
        error={error}
        isLoading={isLoading}
        list={jokesList}
        inited={inited}
      />
    </div>
  );
};

export default JokesPage;
