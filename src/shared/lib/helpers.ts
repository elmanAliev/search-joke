export const formatDate = (inputDate: string) => {
  const dateParts = inputDate.split(" ")[0].split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  return `${day}.${month}.${year}`;
};
