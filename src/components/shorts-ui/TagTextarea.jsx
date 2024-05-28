"use client";
import { useState } from "react";

const TagTextarea = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      <div className="  p-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-transparent border border-[#C3C7CF] px-2 py-1 rounded-full text-sm flex items-center text-[#181A1E]"
          >
            {tag}
            <button
              type="button"
              className="ml-2"
              onClick={() => removeTag(tag)}
            >
              &times;
            </button>
          </span>
        ))}
        <textarea
          className="resize-none h-auto rounded-[1.5rem] custom-input-style border-0"
          rows="1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press enter or space to add tags"
        />
      </div>
    </div>
  );
};

export default TagTextarea;
