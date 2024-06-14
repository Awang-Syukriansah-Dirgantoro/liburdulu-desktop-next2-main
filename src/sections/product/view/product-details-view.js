"use client";

import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { useSettingsContext } from "src/components/settings";

import { paths } from "src/routes/paths";

import ProductDetailsCarousel from "../product-details-carousel";
import ProductDetailsSummary from "../product-details-summary";

export default function ProductDetailsView() {
  const settings = useSettingsContext();

  return (
    <Container
      maxWidth={settings.themeStretch ? false : "lg"}
      sx={{
        mt: 5,
        mb: 15,
      }}
    >
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <div>
            <ProductDetailsSummary />
          </div>
        </Grid>
      </Grid>

      {/* <ProductDetailsCarousel /> */}
    </Container>
  );
}

ProductDetailsView.propTypes = {
  id: PropTypes.string,
};
