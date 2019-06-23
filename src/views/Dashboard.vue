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
          <LineChart :chartdata="chartDara" :options="chartOption"/>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
import Box from '@/components/Box'
import Card from '@/components/Card'
import LineChart from '@/components/LineChart'
export default {
  name: 'Dashboard',
  components: {
    Box,
    Card,
    LineChart
  },
  data() {
    return {
      chartDara: null,
      chartOption: {}
    }
  },
  created() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.chartDara = {
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
            data: [40, 39, 20, 40, 39, 80, 40]
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
    }
  }
}
</script>

<style>
</style>
