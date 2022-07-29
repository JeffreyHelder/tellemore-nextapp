import { useEffect, useState } from "react";
import Image from "next/future/image";
import styled from "styled-components";
import { rgba } from "../styles/functions/manipulateColors";
import Typography from "./Typography";

type WorksModalProps = {
  works: any[];
  index: number;
  handleOnClose: () => void;
};

const WorksModalStyle = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  overflow: "hidden",
  "& .work-modal-backdrop": {
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: rgba(theme.palette.black, 0.9),
    backdropFilter: "blur(4px)"
  },
  "& .works-modal-controls": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "44px",
    height: "44px",
    padding: 0,
    margin: 0,
    border: "none",
    borderRadius: "22px",
    position: "absolute",
    top: "calc(50% - 22px)",
    backgroundColor: rgba(theme.palette.white, 0.01),
    zIndex: 1,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: rgba(theme.palette.white, 0.1)
    },
    "&:disabled": {
      opacity: 0.3,
      cursor: "default",
      "&:hover": {
        backgroundColor: rgba(theme.palette.white, 0.01)
      }
    },
    "& >span": {
      fontSize: "40px",
      color: theme.palette.white,
      textAlign: "center"
    },
    "&.next": {
      right: "20px",
      "& >span": {
        width: "32px"
      }
    },
    "&.previous": {
      left: "20px",
      "& >span": {
        width: "28px"
      }
    }
  },
  "& .works-modal-inner-container": {
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    maxWidth: "980px",
    position: "absolute",
    top: "calc(40% - 250px)",
    zIndex: 1,
    margin: "auto",
    "& .works-modal-image-container": {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "500px",
      "& img": {
        width: "auto",
        height: "auto",
        maxHeight: "500px",
        backgroundColor: theme.palette.background
      }
    },
    "& .works-modal-details-container": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "20px",
      "& >a, >a>*": {
        color: theme.palette.blue,
        textDecoration: "none"
      }
    }
  }
}));

const WorksModal = ({ works, index, handleOnClose }: WorksModalProps) => {
  const [currentIdx, setCurrentIdx] = useState(index - 1);
  let current = works[currentIdx];

  useEffect(() => {
    current = works[currentIdx];
  }, [currentIdx]);

  return (
    <WorksModalStyle>
      <div className="works-modal-inner-container">
        <div className="works-modal-image-container">
          <Image width="980" height="500" src={current.imageUrl} alt={current.title} />
        </div>
        <div className="works-modal-details-container">
          <Typography type="CardTitle">{current.title}</Typography>
          {current.link && (
            <a href={current.link} target="_blank" rel="noreferrer">
              <Typography type="CardTitle">{current.linkName}</Typography>
            </a>
          )}
        </div>
      </div>
      <button disabled={currentIdx === 0} className="works-modal-controls previous" type="button" onClick={() => setCurrentIdx(currentIdx - 1)}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <button disabled={currentIdx === works.length - 1} className="works-modal-controls next" type="button" onClick={() => setCurrentIdx(currentIdx + 1)}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>

      <button type="button" onClick={() => handleOnClose()}>
        Exit
      </button>
      <div onClick={() => handleOnClose()} className="work-modal-backdrop" />
    </WorksModalStyle>
  );
};

export default WorksModal;
