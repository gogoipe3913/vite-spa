import React from "react";
import { Link } from "react-router-dom";

const Items: React.FC = ({}) => (
  <div>
    <div>test_one</div>
    <br />
    <Link to="/content">twoへ</Link>
    <div style={{ width: "80px", height: "340px", backgroundColor: "red" }} />
  </div>
);

export default Items;
