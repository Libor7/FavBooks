"use client";

import { useTheme, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import type { Book } from "@/features/books/types/book";
import { FALLBACK_TEXT } from "@/shared/constants/book.constants";
import classes from "./BookDetail.module.scss";

type BookDetailProps = {
  book: Book;
  onClose: () => void;
  onDelete: (id: string) => void;
};

const BookDetail = ({ book, onClose, onDelete }: BookDetailProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { description, id, title, author, imageUrl } = book;

  return (
    <Card
      className={classes.bookDetailCard}
      sx={{
        backgroundImage: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='topGradient' x1='0%25' y1='50%25' x2='100%25' y2='50%25'%3E%3Cstop offset='5%25' stop-color='${encodeURIComponent(
        theme.palette.secondary.main,
      )}'/%3E%3Cstop offset='95%25' stop-color='${encodeURIComponent(
        theme.palette.background.default,
      )}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,100 L0,30 C180,50 360,70 540,50 C720,30 900,20 1080,15 C1260,10 1440,25 1440,30 L1440,-300 L0,-300 Z' fill='url(%23topGradient)'/%3E%3C/svg%3E"),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bottomGradient' x1='0%25' y1='50%25' x2='100%25' y2='50%25'%3E%3Cstop offset='5%25' stop-color='${encodeURIComponent(
        theme.palette.primary.main,
      )}'/%3E%3Cstop offset='95%25' stop-color='${encodeURIComponent(
        theme.palette.primary.contrastText,
      )}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,100 L0,70 C180,80 360,90 540,80 C720,70 900,60 1080,55 C1260,50 1440,60 1440,70 L1440,700 L0,700 Z' fill='url(%23bottomGradient)'/%3E%3C/svg%3E")
    `,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top, bottom",
        backgroundSize: "100% 120px, 100% 120px",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Stack
          className={classes.bookDetailContainer}
          direction={{ xs: "column", sm: "row" }}
        >
          <Box className={classes.imageContainer}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                sizes={isMobile ? "100vw" : "240px"}
                placeholder="blur"
                blurDataURL="/fallback-image.png"
              />
            ) : (
              <Typography
                className={classes.fallbackText}
                variant="overline"
                color="secondary"
              >
                {FALLBACK_TEXT}
              </Typography>
            )}
          </Box>
          <Stack className={classes.bookDetailContent}>
            <Typography color="textPrimary" variant="h6">
              {title}
            </Typography>
            <Typography color="textSecondary">
              Author: {author ? author : FALLBACK_TEXT}
            </Typography>
            <Box flex={1} overflow="auto" zIndex={1}>
              <Typography color="textPrimary" variant="body1">
                About: {description ? description : FALLBACK_TEXT}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button color="primary" onClick={onClose}>
          Close
        </Button>
        <Button color="error" variant="contained" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookDetail;
