"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm: FC = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }

    router.push(`/events/${searchText}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
        <input
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
          placeholder="Search events in any city..."
          spellCheck={false}
          value={searchText}
          onChange={handleInputValue}
        />
      </form>
    </div>
  );
};

export default SearchForm;