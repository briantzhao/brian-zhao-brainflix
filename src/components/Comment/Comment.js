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

  const deepDive = (date) => {
    const daysPassed = Math.floor((Date.now() - date) / 86400000);
    if (daysPassed < 1) {
      return `less than 1 day ago`;
    }
    if (daysPassed < 2) {
      return `1 day ago`;
    }
    if (daysPassed < 30) {
      return `${daysPassed} days ago`;
    }
    if (daysPassed < 60) {
      return `1 month ago`;
    }
    if (daysPassed < 365) {
      return `${Math.floor(daysPassed / 30)} months ago`;
    }
    return `over 1 year ago`;
  };

  return (
    <article className="comment">
      <div className="comment__profile-pic"></div>
      <section className="comment__text">
        <div className="comment__header">
          <h3 className="comment__user">{props.comment.name}</h3>
          <h4 className="comment__timestamp">
            {deepDive(props.comment.timestamp)}
          </h4>
        </div>
        <p className="comment__comment">{props.comment.comment}</p>
      </section>
    </article>
  );
}
