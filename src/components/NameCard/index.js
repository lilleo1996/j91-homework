import "./style.css";

const NameCard = ({ name, age, gender }) => {
  const changeBackgroundColor = () => {
    if (gender === "male") {
      return "red";
    } else if (gender === "female") {
      return "blue";
    } else {
      return "white";
    }
  };
  return (
    <div className={`name-card ${changeBackgroundColor()}`}>
      <h4 className="name">Name : {name}</h4>
      <h4 className="age">Age : {age}</h4>
      <h4 className="gender">Gender : {gender}</h4>
    </div>
  );
};

export default NameCard;
