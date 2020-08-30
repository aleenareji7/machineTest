import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import CovidStatus from './CovidStatus';

import CovidDataInState from '../mockData/CovidDataInState';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.name,
});


export default function FilterData() {

  const [filter, setFilter] = useState(null);
  useEffect(() => console.log(filter), [filter]);
  const onFilterChange = (event, values) => {
    setFilter(values);
  }

  return (
      <Box>
        <h1>Covid Status</h1>
        <Autocomplete
          id="filter-demo"
          options={CovidDataInState}
          onChange={onFilterChange}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Select State" variant="outlined" />}
        />
        <CovidStatus data={filter} />
      </Box>
  );
}