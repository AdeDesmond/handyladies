import React from "react";

interface SearchPageProps {
  searchParams: {
    searchTerm: string;
  };
}

function SearchPage({ searchParams }: SearchPageProps) {
  console.log(searchParams.searchTerm);
  //implement a search component here
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full ">
      SearchPage
    </div>
  );
}

export default SearchPage;
