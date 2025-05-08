// components/tvSeriesList/index.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import TVSeriesCard from "../tvSeriesCard";
import { BaseTVSeriesListProps } from "../../types/interfaces";

const TVSeriesList: React.FC<BaseTVSeriesListProps> = ({ series, action }) => {
  return (
    <>
      {series.map((s) => (
        <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TVSeriesCard series={s} action={action} />
        </Grid>
      ))}
    </>
  );
};

export default TVSeriesList;
