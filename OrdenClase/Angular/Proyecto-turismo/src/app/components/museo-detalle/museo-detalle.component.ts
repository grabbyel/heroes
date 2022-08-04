import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';
import { MuseosDataService } from 'src/app/services/museos-data.service';

@Component({
  selector: 'app-museo-detalle',
  templateUrl: './museo-detalle.component.html',
  styleUrls: ['./museo-detalle.component.css'],
})
export class MuseoDetalleComponent implements OnInit {
  id: number = 0;
  museo?: Museo;
  constructor(
    private ruta: ActivatedRoute,
    private moseosServices: MuseosDataService
  ) {
    this.id = this.ruta.snapshot.params['codigo'];
    this.museo = this.moseosServices.getMuseo(this.id);
  }

  ngOnInit(): void {}
}
