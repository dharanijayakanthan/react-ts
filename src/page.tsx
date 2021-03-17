import Table from "./components/Table";
import Header from "./components/Header";

const MainPage = function () {
  return (
    <div>
      <Header />
      <Table type="get_buyer" />
      <Table type="get_income" />
      <Table type="get_highlight" />
      <Table type="get_country" />
    </div>
  );
};

export default MainPage;
