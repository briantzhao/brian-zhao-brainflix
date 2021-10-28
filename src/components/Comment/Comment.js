import "./Comment.scss";

export default function Comment(props) {
  const formatDate = (date) => {
    const newDate = new Date(date);
    const newMonth =
      newDate.getMonth() + 1 < 10
        ? `0${newDate.getMonth() + 1}`
        : newDate.getMonth() + 1;
    const newDay =
      newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
    const newYear = newDate.getFullYear();
    return `${newMonth}/${newDay}/${newYear}`;
  };
  return (
    <article className="comment">
      <div className="comment__profile-pic"></div>
      <section className="comment__text">
        <div className="comment__header">
          <h3 className="comment__user">{props.name}</h3>
          <h4 className="comment__timestamp">{formatDate(props.timestamp)}</h4>
        </div>
        <p className="comment__comment">{props.comment}</p>
      </section>
    </article>
  );
}
