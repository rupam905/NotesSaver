import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, SetTitle] = useState("");
  const [value, SetValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");
  
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
      <button className="p-2 rounded-lg mt-2">
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
