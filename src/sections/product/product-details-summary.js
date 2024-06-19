import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { formHelperTextClasses } from "@mui/material/FormHelperText";

import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hooks";

// import { fCurrency, fShortenNumber } from "src/utils/format-number";

import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { ColorPicker } from "src/components/color-utils";
import FormProvider, { RHFSelect } from "src/components/hook-form";
import { color, fontSize, width } from "@mui/system";

// import IncrementerButton from "./common/incr/ementer-button";

export default function ProductDetailsSummary() {
  const renderLabel = (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      justifyContent="space-between"
    >
      <Label color="info">New</Label>

      <Stack direction={`row`} spacing={0}>
        <Button variant="outlined" sx={{ mr: 1 }}>
          Pesan
        </Button>
        <Button variant="outlined" sx={{ mr: 1 }}>
          Laporkan
        </Button>
      </Stack>
    </Stack>
  );

  const renderInventoryType = (
    <Box
      component={`span`}
      sx={{
        typography: "overline",
        color:
          //   (inventoryType === "out of stock" && "error.main") ||
          //   (inventoryType === "low stock" && "warning.main") ||
          "success.main",
      }}
    >
      AAAA
    </Box>
  );

  const renderDetail = (
    <div>
      <p className="text-[30px] font-bold">Potong Rambut Full Service</p>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          color: "text.disabled",
          typography: "body2",
        }}
      >
        <Rating
          size="small"
          value={4.6}
          precision={0.1}
          readOnly
          sx={{ mr: 1 }}
        />
        {`(9.12k reviews)`}
      </Stack>

      <p className="text-[29px] font-bold my-5">Rp. 1.000.000</p>

      <Typography
        variant="body2"
        sx={{ color: "text.secondary" }}
        fontSize={13}
        fontWeight={500}
      >
        Charged per day
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "text.secondary" }}
        fontSize={13}
        marginTop={1}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus.
      </Typography>
    </div>
  );

  const renderSeller = (
    <div>
      <Divider sx={{ borderStyle: "dashed", my: 3 }} />
      <div className="flex items-start justify-start gap-4">
        <Avatar
          alt="Cindy Baker"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{
            width: 56,
            height: 56,
          }}
        />
        <div className="flex flex-col items-start">
          <p className="text-[16px] font-bold ms-[5px]">Barber Bandung</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 max-w-xs">
              <Iconify
                icon="mdi:location-on-outline"
                width={24}
                height={24}
                style={{ color: "#1D9CAB" }}
              />
              <p className="text-[13px] font-light">Bandung, Indonesia</p>
            </div>
            <div className="flex items-center gap-2 max-w-xs">
              <Iconify
                icon="mingcute:profile-line"
                style={{ color: "#1D9CAB" }}
                width={24}
                height={24}
              />
              <p className="text-[13px] font-light">Contact</p>
            </div>
          </div>
        </div>
      </div>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary" }}
        fontSize={13}
        marginTop={2}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus.
      </Typography>
      <Divider sx={{ borderStyle: "dashed", my: 3 }} />
    </div>
  );

  const renderOption = (
    <div>
      <p>Hello</p>
    </div>
  );

  return (
    <div>
      {renderLabel}
      {renderInventoryType}
      {renderDetail}
      {renderSeller}
    </div>
  );
}
