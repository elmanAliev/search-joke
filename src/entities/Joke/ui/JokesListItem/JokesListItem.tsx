import cls from "./JokesListItem.module.scss";
import Text from "../../../../shared/ui/Text/Text";
import { formatDate } from "../../../..//shared/lib/helpers";
import { Link } from "react-router-dom";

interface JokesListItemProps {
  id: string;
  url: string;
  value: string;
  created: string;
  firstRow?: boolean;
}

const JokesListItem = ({
  value,
  url,
  id,
  created,
  firstRow,
}: JokesListItemProps) => {
  const className = firstRow ? cls.firstRowItem : cls.otherRowsItem;

  return (
    <Link to={url} className={className}>
      <Text className={cls.text} size="size_xl">
        {value}
      </Text>
      <div className={cls.wrapper}>
        <Text size="size_s" theme="secondary">
          {id}
        </Text>
        <Text size="size_s" theme="secondary">
          {formatDate(created)}
        </Text>
      </div>
    </Link>
  );
};

export default JokesListItem;
