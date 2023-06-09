import { Delete } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, ListItem, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import React from "react";

const ProductItem = (props) => {
  const {
    productId,
    department,
    productName,
    checked,
    noteCreateDate,
    productNote,
    onDelete,
    onToggle,
    onNoteChange,
  } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingY: "1.5rem" }}>
      <Box sx={{ display: "flex" }}>
        <ListItem
          onClick={onToggle}
          key={productId}
          secondaryAction={
            <Checkbox
              key={productId}
              edge="start"
              checked={checked}
            />
          }
        >
          <Box width={"100%"}>
            <ListItemButton>
              <ListItemText
                id={productId}
                primary={productName}
                secondary={
                  <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {department}
                  </Typography>
                  {" — " + noteCreateDate}
                </React.Fragment>
                }
              />
            </ListItemButton>
          </Box>
        </ListItem>
        <Button onClick={onDelete}>
          <IconButton>
            <Delete />
          </IconButton>
        </Button>
      </Box>
      <TextField
        placeholder="Comments"
        fullWidth
        multiline
        rows={1}
        defaultValue=""
        value={productNote}
        onChange={(e) => onNoteChange(e.target.value)}
      />
    </Box>
  );
};
export default ProductItem;
