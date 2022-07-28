import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import Helmet from "../components/Head";
import SectionHeader from "../components/SectionHeader";
import WorksCard from "../components/WorksCard";
import { PORT_ITEMS } from "../lib/MockData";

const PageWrapper = styled.div(({}) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "940px",
  margin: "auto"
}));

const WorksWrapper = styled.div(({}) => ({
  columnCount: 1,
  columnGap: 0,
  margin: "40px 0 80px 0",
  "@media screen and (min-width: 550px)": {
    columnCount: 2,
    columnGap: "20px",
    margin: "80px 20px"
  },
  "@media screen and (min-width: 840px)": {
    columnCount: 3,
    columnGap: "20px"
  }
}));

const Work: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [filteredWorks, setFilteredWorks] = useState(PORT_ITEMS);

  const handleFilterChange = () => {
    switch (filter) {
      case "3d":
        return setFilteredWorks(PORT_ITEMS.filter(work => work.tag === "3d"));
      case "motion":
        return setFilteredWorks(PORT_ITEMS.filter(work => work.tag === "motion"));
      case "graphics":
        return setFilteredWorks(PORT_ITEMS.filter(work => work.tag === "graphics"));
      case "web":
        return setFilteredWorks(PORT_ITEMS.filter(work => work.tag === "web"));
      default:
        return setFilteredWorks(PORT_ITEMS);
    }
  };

  useEffect(() => {
    handleFilterChange();
  }, [filter]);

  console.log("portfolio");
  return (
    <div>
      <Helmet title="Tellemore | Work" description="Jeffrey Helder's work portfolio" />
      <PageWrapper>
        <SectionHeader title="works" />
        <DropDown title="Filters" options={["web", "graphics", "motion", "3d"]} onClick={i => setFilter(i)} selected={filter} />
        <WorksWrapper>
          {filteredWorks.map(item => (
            <WorksCard
              key={item.title}
              onClick={() => {
                console.log("clicked:", item.title);
              }}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          ))}
        </WorksWrapper>
      </PageWrapper>
    </div>
  );
};

export default Work;
