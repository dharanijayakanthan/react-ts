import "../styles.css";
import { useEffect } from "react";

const Table = (props: { type: any }) => {
  console.log(props);
  useEffect(() => {
    fetch("http://13.232.99.42:80/get_highlight", { mode: "cors" })
      .then((x) => x.json())
      .then((x) => {
        console.log({ x });
      });
  }, [props]);
  return (
    <div className="table-container">
      <div className="widget" data-type="HIGHLIGHTS">
        <header>
          <h3>Highlights</h3>
          <select name="sort-option" className="sort-option form-select">
            <option value="label">Sort by Label</option>
            <option value="value">Sort by Value</option>
          </select>
          <div className="btn btn-primary max-min">
            <i className="fa fa-arrows-alt"></i>
          </div>
        </header>
        <div className="chart">
          <div className="controls">
            <nav>
              <a href="www.google.com">This week</a>
            </nav>
            <div>
              <span>33%</span>
            </div>
          </div>
          <div className="canvas-container">
            <div className="canvas" id="highlights">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>WeekDay</th>
                    <th>INR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>FRI</td>
                    <td>215</td>
                  </tr>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>MON</td>
                    <td>185</td>
                  </tr>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>SAT</td>
                    <td>215</td>
                  </tr>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>SUN</td>
                    <td>135</td>
                  </tr>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>THU</td>
                    <td>275</td>
                  </tr>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>TUE</td>
                    <td>225</td>
                  </tr>
                  <tr style={{ color: "rgb(101, 16, 103)" }}>
                    <td>WED</td>
                    <td>385</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="info">
          <h4>Stats:</h4>
          <div className="info-module">
            <div className="heading">
              <span>Attribute 1</span>
              <span>65%</span>
            </div>
            <div className="progress atib-1"></div>
          </div>
          <div className="info-module">
            <div className="heading">
              <span>Attribute 2</span>
              <span>30%</span>
            </div>
            <div className="progress atib-2"></div>
          </div>
          <div className="info-module">
            <div className="heading">
              <span>Attribute 3</span>
              <span>5%</span>
            </div>
            <div className="progress atib-3"></div>
          </div>
          <nav>
            <a href="/get_highlight" target="_blank">
              <span>View API</span>
              <span className="fa fa-arrow-right fa-lg"></span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Table;
