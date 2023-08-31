import cls from "./JokesList.module.scss";
import { Joke } from "../../model/types/jokesSchema";
import Loader from "../../../../shared/ui/Loader/Loader";
import Text from "../../../../shared/ui/Text/Text";
import JokesListItem from "../JokesListItem/JokesListItem";

interface JokesListProps {
  list: Joke[];
  isLoading: boolean;
  error: boolean;
  inited: boolean;
}

const JokesList = ({ error, isLoading, list, inited }: JokesListProps) => {
  const firstRow = list.slice(0, 2);
  const otherRows = list.slice(2);
  const count = list.length;

  const renderJoke = (first: boolean) => (joke: Joke) =>
    (
      <JokesListItem
        key={joke.id}
        id={joke.id}
        created={joke.created_at}
        url={joke.url}
        value={joke.value}
        firstRow={first}
      />
    );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Text className={cls.error} theme="error">
        Ошибка при получении списка
      </Text>
    );
  }

  return (
    <>
      {inited && (
        <Text className={cls.count} size="size_m">
          Found jokes: {count}
        </Text>
      )}
      <div className={cls.firstRow}>{firstRow?.map(renderJoke(true))}</div>
      <div className={cls.otherRows}>{otherRows?.map(renderJoke(false))}</div>
    </>
  );
};

export default JokesList;
