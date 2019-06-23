<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <Card>
          <template v-slot:title>Total Visits</template>
          10%
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <Card>
          <template v-slot:title>Total Page Views</template>
          10%
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <Card>
          <template v-slot:title>Unique Visitor</template>
          10%
        </Card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <Card>
          <template v-slot:title>Bounce Rate</template>
          10%
        </Card>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12">
        <Box>
          <h4 class="h4 mb-3">Monthly Survey</h4>
          <LineChart :chartdata="monthlySurvey" :options="chartOption"/>
        </Box>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6">
        <Box>
          <h4 class="h4 mb-3">Today's Income</h4>
          <LineChart :chartdata="incomeData" :options="chartOption"/>
        </Box>
      </div>
      <div class="col-md-6">
        <Box>
          <h4 class="h4 mb-3">This Week's Income</h4>
          <BarChart :chartdata="incomeData" :options="barOption"/>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
import Box from '@/components/Box'
import Card from '@/components/Card'
import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'
export default {
  name: 'Dashboard',
  components: {
    Box,
    Card,
    LineChart,
    BarChart
  },
  data() {
    return {
      monthlySurvey: null,
      incomeData: {},
      chartOption: {},
      barOption: {}
    }
  },
  created() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.monthlySurvey = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#39b982',
            data: [20, 39, 20, 50, 39, 50, 40]
          },
          {
            label: 'Data Two',
            borderColor: '#39b982',
            data: [10, 49, 25, 45, 39, 70, 40]
          }
        ]
      }
      this.incomeData = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#39b982',
            borderColor: '#39b982',
            data: [20, 39, 20, 50, 30, 50, 30]
          },
          {
            label: 'Data Two',
            backgroundColor: '#535353',
            borderColor: '#535353',
            data: [10, 49, 35, 59, 39, 70, 40]
          },
          {
            label: 'Data Three',
            backgroundColor: '#8BB8D3',
            borderColor: '#8BB8D3',
            data: [25, 80, 55, 75, 49, 90, 40]
          }
        ]
      }
      this.chartOption = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        height: 150
      }
      this.barOption = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        height: 150,
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    }
  }
}
</script>

<style>
</style>
