import React from "react";
import Search from '../components/organisms/Search';
import Articles from '../components/organisms/Articles';
import Filter from '../components/organisms/Filter';

function HomePage({ data }) {
  return (
    <div className="homepage-wrap-inner">
      <div className="homepage-wrap">
        <Search {...data} />
        <Articles {...data} />
        <Filter {...data} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aeb53995698245bb8b4a1d96ad31a18c"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default HomePage
