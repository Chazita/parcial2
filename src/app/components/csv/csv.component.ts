import { Component, OnInit, Input } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.scss'],
})
export class CsvComponent implements OnInit {
  @Input() data;
  options: any = {
    fieldSeparator: ',',
    filename: 'tabla',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    headers: ['nombre', 'marca', 'stock', 'tipo', 'local', 'precio'],
  };

  constructor() {}

  ngOnInit(): void {}

  generateCSV() {
    const csvExporter = new ExportToCsv(this.options);
    csvExporter.generateCsv(this.data);
  }
}
