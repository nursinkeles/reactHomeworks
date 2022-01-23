import PropTypes from "prop-types";

export default function User({
  name,
  surname,
  age,
  isLoggedIn,
  friends,
  address,
}) {
  if (!isLoggedIn) {
    return <div>Giriş Yapmadınız.</div>;
  }
  return (
    <>
      <h1>{`${name} ${surname}`}</h1>
      address:{address.title} {address.zip}
      <br />
      age:{age}
      <br /> <br />
      {friends.map((friend) => (
        <div key="friend.id">{friend.name}</div>
      ))}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  name: "isimsiz",
  isLoggedIn: false,
};
