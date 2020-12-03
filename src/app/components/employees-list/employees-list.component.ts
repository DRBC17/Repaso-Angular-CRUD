import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgForm } from '@angular/forms';

import { Employee } from '../../models/employee';
import { format } from 'path';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  public empleados: Employee[];
  public empleado: Employee;
  public alertab: {
    tipo: string;
    mensaje: string;
  };

  constructor(private http: HttpClient, public servicio: EmployeesService) {
    this.empleado = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: 0,
    };
    this.alertab = {
      tipo: '',
      mensaje: '',
    };
  }

  ngOnInit(): void {
    this.obtener_empleados();
    // this.crear_empleado();
  }

  obtener_empleados(): void {
    this.servicio.obtener_empleados().subscribe(
      (res) => {
        this.empleados = res;
      },
      (err) => {
        console.log(err);
        this.alertab.mensaje = `Error: ${err.statusText}`;
        this.alertab.tipo = 'alert-danger';
      }
    );
  }

  crear_empleado(): void {

      this.servicio.crear_empleado(this.empleado).subscribe(
        (res) => {
          this.alertab.mensaje = 'Creado';
          this.alertab.tipo = 'alert-success';
          this.obtener_empleados();
          this.resetForm();
        },
        (err) => {
          console.log(err);
          this.alertab.mensaje = `Error: ${err.statusText}`;
          this.alertab.tipo = 'alert-danger';
        }
      );
    

    // console.log(this.empleado);
  }
  eliminar_empleado(id: string): void {
    this.servicio.eliminar_empleados(id).subscribe(
      (res) => {
        this.alertab.mensaje = 'Eliminado';
        this.alertab.tipo = 'alert-success';
        this.obtener_empleados();
        this.resetForm();
      },
      (err) => {
        console.log(err);
        this.alertab.mensaje = `Error: ${err.statusText}`;
        this.alertab.tipo = 'alert-danger';
      }
    );
  }
  cargar_empleado(empleado: Employee): void {
    this.empleado = empleado;
  }

  editar_empleado(id: string): void {
    this.servicio.editar_empleado(this.empleado, id).subscribe(
      (res) => {
        this.obtener_empleados();
        this.resetForm();
        this.alertab.mensaje = 'Actualizado';
        this.alertab.tipo = 'alert-success';
      },
      (err) => {
        console.log(err);
        this.alertab.mensaje = `Error: ${err.statusText}`;
        this.alertab.tipo = 'alert-danger';
      }
    );
  }
  resetForm(): void {
    this.empleado = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: 0,
    };
    this.alertab = {
      tipo: '',
      mensaje: '',
    };
  }
}
