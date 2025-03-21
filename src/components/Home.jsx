import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useEffect } from "react";

const Home = () => {
  const [title, SetTitle] = useState("");
  const [value, SetValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");
  const paste = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p.id === pasteId);
      SetTitle(paste.title);
      SetValue(paste.content);
    }
    
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // update
      dispatch(updateToPastes(paste));
    } else {
      // create
      dispatch(addToPastes(paste));
    }
    // after creation and updation
    SetTitle("");
    SetValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          type="text"
          className="p-1 rounded-lg mt-2 w-[66%] pl-4"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <button onClick={createPaste} className="p-2 rounded-lg mt-2">
          {pasteId ? "Update" : "Create"}
        </button>
      </div>
      <div>
        <textarea
          className="rounded-xl mt-4 min-w-[500px] p-4 resize-none"
          name=""
          value={value}
          placeholder="Enter content here"
          onChange={(e) => SetValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};
export default Home;
