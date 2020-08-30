import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Charts from './Charts';

import MockCovidDataIndia from '../mockData/MockCovidDataIndia';


export default function CovidStatus({ data }) {

  const [covidStatus, setCovidStatus] = useState(MockCovidDataIndia);
  const [chartValue, setChartValue] = useState('');
  useEffect(() => {
    if (data !== null) {
      setCovidStatus(data)
    }
    if (data == null) {
      setCovidStatus(MockCovidDataIndia)
    }
  }, [data, MockCovidDataIndia])

  const mapToChart = (data) => {
    const formattedStatus = Object.keys(data).map((value) => data[value]);
    return formattedStatus;
  }

  useEffect(() => {
    setChartValue(covidStatus);
  }, [covidStatus, chartValue])


  return (
    <Box>
      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '8rem', height: '5rem' }}
        >
          Total cases in {covidStatus.name || 'india'}
          <div>
            {covidStatus.totalCases}
          </div>
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '8rem', height: '5rem' }}
        >
          Active Cases in {covidStatus.name || 'india'}
          <div>
            {covidStatus.activeCases}
          </div>
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '8rem', height: '5rem' }}
        >
          Recovered in {covidStatus.name || 'india'}
          <div>
            {covidStatus.recovered}
          </div>
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '8rem', height: '5rem' }}
        >
          Death cases in {covidStatus.name || 'india'}
          <div>
            {covidStatus.deaths}
          </div>
        </Box>

      </Grid>
      <Box>
        <Charts data={chartValue} />
      </Box>
    </Box>
  );
}