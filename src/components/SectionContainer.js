import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { ItemLIstContainer } from "./Item/ItemLIstContainer";
import { SideBarContainer } from "./SideBarContainer";

export const SectionContainer = () => {
  const { section } = useParams();
  useEffect(() => {
  }, [section])
  
  switch (section) {
    case "products":
      return (
        <div className="sidebar">
          <SideBarContainer />
          <ItemLIstContainer />
        </div>
      );

    default:
      return <div>Section in process 🧩🛠️</div>;
  }
};
