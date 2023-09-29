import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useTheme } from "@mui/material";
import { useState } from "react";
import Box from "../../components/box/box";
import UserModal from "../userModal/userModal";

function HomeHeader() {
  const theme = useTheme();
  const [openFilter, setFilterOpen] = useState(false);
  const handleAdd = () => {
    setFilterOpen(true);
  };
  const handleClose = () => {
    setFilterOpen(false);
  };
  return (
    <>
     <Box>
        <div
          onClick={handleAdd}
        >
          <AddBoxRoundedIcon  style={{
              color: theme.palette.primary.main, 
            }}
          />
        </div>
      </Box>
      {openFilter && (
        <UserModal
          openFilter={openFilter}
          handleClose={handleClose}
          user={undefined}
          onSubmit={(user: any): void => {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </>
  );
}

export default HomeHeader;
