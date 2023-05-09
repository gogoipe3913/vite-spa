import React from "react";
import { Link } from "react-router-dom";

const Second: React.FC = ({}) => (
  <div>
    <div>test_two</div>
    <br />
    <Link to="/">サードへ</Link>
    <div style={{ width: "80px", height: "340px", backgroundColor: "blue" }} />
  </div>
);

export default Second;
