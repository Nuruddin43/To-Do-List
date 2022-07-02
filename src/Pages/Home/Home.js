import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/item", {
        item: itemText,
      });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getItemList = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/items");
        setListItems(res.data);
        console.log("render");
      } catch (err) {
        console.log(err);
      }
    };
    getItemList();
  }, []);

  // completed Item
  const completedItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/item/${id}`);
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // update item

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/item/${isUpdating}`,
        { item: updateItemText }
      );

      console.log(res.data);
      const updatedItemIndex = listItems.findIndex(
        (item) => item._id !== isUpdating
      );
      const updated = (listItems[updatedItemIndex].item = updateItemText);
      setUpdateItemText("");
      setIsUpdating("");
    } catch (err) {
      console.log(err);
    }
  };

  const renderUpdateForm = () => (
    <form className="update-form" onSubmit={(e) => updateItem(e)}>
      <input
        onChange={(e) => {
          setUpdateItemText(e.target.value);
        }}
        value={updateItemText}
        className="update-new-input"
        type="text"
        placeholder="Update the Task"
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );

  return (
    <div className="home-item">
      <h1>Todo List</h1>
      <form className="form" onSubmit={(e) => addItem(e)}>
        <input
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
          className="border-4"
          type="text"
          placeholder="Add Your Task"
        />
        <button className="btn-sm btn-primary">Add</button>
      </form>
      <div className="todo-listItems">
        {listItems.map((item) => (
          <div className="todo-item">
            {isUpdating === item._id ? (
              renderUpdateForm()
            ) : (
              <>
                <p className="item-content">{item.item}</p>
                <button
                  onClick={() => {
                    setIsUpdating(item._id);
                  }}
                  className="btn btn-xs  update-item"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    completedItem(item._id);
                  }}
                  className="btn btn-xs delete-item"
                >
                  Complete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
