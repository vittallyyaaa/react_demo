import { useState } from "react";

function ListGroup() {
  const items = ["First", "Second", "Third", "Fourth"];
  const message = items.length === 0 && <p>No item found</p>;
  const [selectedIndex, setSelectedItems] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItems(index);
            }}
            style={{ width: "200px" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
