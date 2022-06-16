import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./TabPanel";
import TodoList from "./TodoList";

const TabsTodos = ({ todos }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Todos" />
          <Tab label="Undone Todos" />
          <Tab label="Done Todos" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TodoList todos={todos} style={{ color: "blue" }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList
          todos={todos.filter((todo) => !todo.completed)}
          style={{ color: "blue" }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TodoList
          todos={todos.filter((todo) => todo.completed)}
          style={{ color: "blue" }}
        />
      </TabPanel>
    </div>
  );
};

export default TabsTodos;
