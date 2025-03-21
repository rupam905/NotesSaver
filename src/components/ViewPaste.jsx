import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useEffect } from "react";

const ViewPaste = () => {

const {id} = useParams();
const allPastes = useSelector((state) => state.paste.pastes); 
const paste = allPastes.filter((p) => p.id === id)[0];

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          type="text"
          className="p-1 rounded-lg mt-2 w-[66%] pl-4"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => SetTitle(e.target.value)}
        />
        {/* <button onClick={createPaste} className="p-2 rounded-lg mt-2">
          {pasteId ? "Update" : "Create"}
        </button> */}
      </div>
      <div>
        <textarea
          className="rounded-xl mt-4 min-w-[500px] p-4 resize-none"
          name=""
          value={paste.content}
          disabled
          placeholder="Enter content here"
          onChange={(e) => SetValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
