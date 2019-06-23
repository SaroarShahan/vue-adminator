<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,

  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }

  // mounted() {
  //   this.renderChart(
  //     {
  //       labels: [
  //         'January',
  //         'February',
  //         'March',
  //         'April',
  //         'May',
  //         'June',
  //         'July'
  //       ],
  //       datasets: [
  //         {
  //           label: 'Data One',
  //           backgroundColor: '#39b982',
  //           data: [40, 39, 10, 40, 39, 80, 40]
  //         }
  //       ]
  //     },
  //     {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       legend: {
  //         display: false
  //       }
  //     }
  //   )
  // }
}
</script>

<style>
</style>