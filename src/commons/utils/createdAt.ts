export function createdAtNote() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const createdAt =
    year +
    "년 " +
    month +
    "월 " +
    date +
    "일 " +
    hours +
    "시 " +
    minutes +
    "분";
  console.log(createdAt);
  return createdAt;
}
