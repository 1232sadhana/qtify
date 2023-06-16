import React, { useEffect, useState } from "react";
import { newAlbumData, getUId } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import "./NewAlbum.css";

/**
 * Represents the top album component.
 * Displays a list of top albums and includes a "Show all" button to toggle the view.
 * @returns {JSX.Element} The rendered top album component.
 */
const NewAlbum = () => {
  // Define the albumData state to store the fetched album data
  const [albumData, setAlbumData] = useState([]);

  // Define the collapseView state to determine whether the view is collapsed or not
  const [collapseView, setCollapseView] = useState(true);

  // Fetch the top album data when the component is rendered
  useEffect(() => {
    const loadHandler = async () => {
      let res = await newAlbumData();
      console.log(res);
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
    <Box className="newAlbum">
      <div className="newAlbum_static">
        <h3>New Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      <Grid container spacing={collapseView ? 2:2} style={{paddingLeft:collapseView?"30px":"15px"}} className="newAlbum_cards">
        {/* Render the cards based on the collapse view */}
        {albumData.map((albumItem, index) => {
          // Generate a unique id for each card
          const id = getUId();

          // Determine whether to display the card based on the collapse view
          if (collapseView && index  <6) {
            return (
              <Grid item xs={2}>
                <Card key={id} data={albumItem} type="normal" />
              </Grid>
            );
          } else if (!collapseView) {
            return (
              <Grid item xs={2}>
                <Card key={id} data={albumItem} type="normal" />
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Grid>
    </Box>
  );
};

export default NewAlbum;
