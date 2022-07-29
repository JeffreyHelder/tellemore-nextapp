import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import Helmet from "../components/Head";
import SectionHeader from "../components/SectionHeader";
import WorksCard from "../components/WorksCard";
import WorksModal from "../components/WorksModal";
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

const Work: NextPage = ({ isMobile }: any) => {
  const [filter, setFilter] = useState("");
  const [filteredWorks, setFilteredWorks] = useState(PORT_ITEMS);

  const [openModal, setOpenModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(Number);

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

  const handleOpenWorks = (idx: number) => {
    if (isMobile) {
      return;
    } else {
      setSelectedWork(idx);
      setOpenModal(true);
    }
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else if (!openModal) {
      document.body.style.overflow = "unset";
    }
  }, [openModal]);

  useEffect(() => {
    handleFilterChange();
  }, [filter]);

  useEffect(() => {
    if (isMobile) {
      setOpenModal(false);
    }
  }, [isMobile]);

  return (
    <div>
      <Helmet title="Tellemore | Work" description="Jeffrey Helder's work portfolio" />
      <PageWrapper>
        <SectionHeader title="works" />
        <DropDown title="Filters" options={["web", "graphics", "motion", "3d"]} onClick={i => setFilter(i)} selected={filter} />
        <WorksWrapper>
          {filteredWorks.map((item, idx) => (
            <WorksCard
              key={item.title}
              onClick={() => {
                handleOpenWorks(idx + 1);
              }}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
              link={item.link}
              linkName={item.linkName}
            />
          ))}
        </WorksWrapper>
      </PageWrapper>
      {!isMobile && openModal && selectedWork && <WorksModal handleOnClose={() => setOpenModal(false)} works={filteredWorks} index={selectedWork} />}
    </div>
  );
};

export default Work;
