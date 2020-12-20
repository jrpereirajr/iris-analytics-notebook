import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, scheduled } from 'rxjs';
import { NotebookInterface } from '../notebook.models';

export interface QueryResult<T> {
    children: T[],
    total: number;
}

export interface QueryParams {
  page?: number,
  size?: number
};

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  rf2Class = 'dc.myapp.forms.NotebookForm';
  urlBase = 'http://localhost:52773/myapp/api/rf2';
  urlFormCreate = '/form/object/:class';
  urlFormReadUpdateDelete = '/form/object/:class/:id';
  urlFormQuery = '/form/objects/:class/:query';

  constructor(private http: HttpClient) { }

  create(notebook: NotebookInterface) {
    const url = `${this.urlBase}${this.urlFormCreate}`
      .replace(':class', this.rf2Class);
    return this.http.post<object>(url, notebook);
  }

  read(notebookId: number | string) {
    const url = `${this.urlBase}${this.urlFormReadUpdateDelete}`
      .replace(':class', this.rf2Class)
      .replace(':id', notebookId.toString());
    return this.http.get<NotebookInterface>(url);
  }

  update(notebook: NotebookInterface) {
    const url = `${this.urlBase}${this.urlFormReadUpdateDelete}`
      .replace(':class', this.rf2Class)
      .replace(':id', notebook.Id.toString());
    return this.http.put<void>(url, notebook);
  }

  delete(notebookId: number | string) {
    const url = `${this.urlBase}${this.urlFormReadUpdateDelete}`
      .replace(':class', this.rf2Class)
      .replace(':id', notebookId.toString());
    return this.http.delete<void>(url);
  }

  query(query: string, params: QueryParams = {}) {
    const url = `${this.urlBase}${this.urlFormQuery}`
      .replace(':class', this.rf2Class)
      .replace(':query', query);

    const sParams = Object.keys(params)
      .map(param => `${param}=${params[param]}`)
      .join('&');

    return this.http.get<QueryResult<NotebookInterface>>(url + (sParams ? `?${sParams}` : ''));
  }

  find(params: QueryParams = {}) {
    return this.query('find', params);
  }
}
