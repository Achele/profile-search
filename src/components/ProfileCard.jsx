const ProfileCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.picture} alt={props.firstName} />
      <div className="cardInfo">
        <p>{props.id}</p>
        <p>
          {props.title}. {props.firstName} {props.lastName}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
