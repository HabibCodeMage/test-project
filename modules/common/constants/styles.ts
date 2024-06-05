const row = {
  display: "flex",
  flexDirection: "row",
};

const rowBetween = {
  ...row,
  justifyContent: "space-between",
};

const rowCenter = {
  ...row,
  alignItems: "center",
};


export { rowBetween , rowCenter, row}