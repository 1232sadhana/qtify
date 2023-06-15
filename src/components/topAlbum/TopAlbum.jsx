import React, { useEffect, useState } from "react";
import { topAlbumData, getUId } from "../AxiosData/AxiosData";
import Card from "../Card/Card";
import "./TopAlbum.css";

/**
 * Represents the top album component.
 * Displays a list of top albums and includes a "Show all" button to toggle the view.
 * @returns {JSX.Element} The rendered top album component.
 */
const TopAlbum = () => {
  // Define the albumData state to store the fetched album data
  const [albumData, setAlbumData] = useState([]);

  // Define the collapseView state to determine whether the view is collapsed or not
  const [collapseView, setCollapseView] = useState(true);

  // Fetch the top album data when the component is rendered
  useEffect(() => {
    const loadHandler = async () => {
      let res = await topAlbumData();
      setAlbumData(res);
    };
    loadHandler();
  }, []);

  /**
   * Handles the click event of the "Show all" button.
   * Toggles the collapse view state.
   */
  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  return (
    <div className="topAlbum">
      <div className="topAlbum_static">
        <h3>Top Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      <div className="topAlbum_cards">
        {/* Render the cards based on the collapse view */}
        {albumData.map((albumItem, index) => {
          // Generate a unique id for each card
          const id = getUId();

          // Determine whether to display the card based on the collapse view
          if (collapseView && index < 6) {
            return <Card key={id} data={albumItem} type="topAlbum" />;
          } else if (!collapseView) {
            return <Card key={id} data={albumItem} type="topAlbum" />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default TopAlbum;
