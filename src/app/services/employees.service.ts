import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint =
      'http://' + window.location.hostname + ':3000/api/employees/';
  }

  obtener_empleados(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.endpoint}`, {
      responseType: 'json',
    });
  }

  crear_empleado(empleado: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.endpoint}`, empleado, {
      responseType: 'json',
    });
  }

  editar_empleado(empleado: Employee, id: string): Observable<Employee> {
    return this.http.put<Employee>(`${this.endpoint}/${id}`, empleado, {
      responseType: 'json',
    });
  }

  eliminar_empleados(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.endpoint}/${id}`, {
      responseType: 'json',
    });
  }
}
