import "../styles.css";

const Header = () => {
  return (
    <h1 className="page-title">
      ABC College of engineering
      <a
        className="float-right btn btn-primary btn-lg"
        href="/postman/assignment.postman_collection.json"
        download=""
      >
        Download Postman Collection
      </a>
    </h1>
  );
};

export default Header;
