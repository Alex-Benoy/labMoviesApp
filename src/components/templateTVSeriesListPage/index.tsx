// components/templateTVSeriesListPage/index.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import TVSeriesList from "../tvSeriesList";
import Header from "../headerMovieList"; // Or create a new header
import { TVSeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#e0f7fa",
  },
};

const TVSeriesListPageTemplate: React.FC<TVSeriesListPageTemplateProps> = ({
  series,
  title,
  action
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TVSeriesList series={series} action={action} />
      </Grid>
    </Grid>
  );
};

export default TVSeriesListPageTemplate;
