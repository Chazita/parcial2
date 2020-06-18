import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  @Input() table;

  ngOnInit(): void {}

  descargarPDF() {
    const doc = new jsPDF();
    doc.autoTable({
      body: this.table,
      columns: [
        { header: 'Nombre', dataKey: 'nombre' },
        { header: 'Marca', dataKey: 'marca' },
        { header: 'Stock', dataKey: 'stock' },
        { header: 'Tipo', dataKey: 'tipo' },
        { header: 'Local', dataKey: 'local' },
        { header: 'Precio', dataKey: 'precio' },
      ],
    });
    doc.save('table.pdf');
  }
}
