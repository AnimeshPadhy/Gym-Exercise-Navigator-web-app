import React, { useEffect, useState, useRef } from "react";
import { Button, Box, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const exercisesRef = useRef(null); // Create a ref for the exercises section

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      // Scroll to the '#exercises' section after setting the exercises data
      if (exercisesRef.current) {
        exercisesRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises); 
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={400}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
          fontFamily="Roboto Condensed, sans-serif"
          color="#0E6251"
        >
          SQUATS AND DEADS <br />
          BUILD RESPECT!
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box position="relative" mb="72px" style={{ display: "flex" }}>
            <TextField
              sx={{
                input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px",
                },
                width: { lg: "800px", xs: "350px" },
                borderRadius: "40px",
              }}
              height="76px"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Search Exercises"
              type="text"
              onKeyDown={handleKeyDown}
            />
            <Button
              className="search-btn"
              sx={{
                bgcolor: "#229954",
                color: "#fff",
                textTransform: "none",
                width: { lg: "175px", xs: "80px" },
                fontSize: { lg: "20px", xs: "14px" },
                height: "56px",
                position: "absolute",
                right: "0",
                top: "0",
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </div>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "400px", sm: "700px", lg: "1300px" },
          }}
        >
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        </Box>
      </Stack>
      {/* Other content on the page */}
      <div
        ref={exercisesRef}
        id="exercises"
        style={{ height: "0px", margin: "0px", padding: "0px" }}
      >
        {/* Your exercises content */}
      </div>
    </Box>
  );
};

export default SearchExercises;
