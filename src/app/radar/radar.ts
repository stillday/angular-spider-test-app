<h3 class="h3 text-center">Radar Chart</h3>
<div class="radar-container">
  <canvas beaseChart
          [datasets]="demoradarCgartData"
          [labels]="demoradarChartLabels"
          [chartType]="radarChartType"
          (chartHover)="chartHovered($event)"
          (chartClick)="chartClicked($event)"></canvas>
</div>