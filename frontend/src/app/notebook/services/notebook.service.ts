import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotebookCellTypeEnum, NotebookInterface } from '../notebook.models';

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

  rf2Class = 'dc.myapp.model.Notebook';
  urlBase = 'http://localhost:52773/myapp/api/rf2';
  urlFormCreate = '/form/object/:class';
  urlFormReadUpdateDelete = '/form/object/:class/:id';
  urlFormQuery = '/form/objects/:class/:query';

  constructor(private http: HttpClient) { }

  serialize(notebook: NotebookInterface) {
    notebook.cells = notebook.cells.map(cell => {
      if (typeof(cell.content) === 'object') {
        if (cell.type === NotebookCellTypeEnum.PIVOT_TABLE) {
          // remove unecessary itens (actually some of them generates circular
          // reference error when applied to JSON.stringify)
          ['rows', 'cols', 'filters'].forEach(key => {
            cell.content[key] = cell.content[key].map(item => {
              if (key !== 'filters') {
                delete item.data.options;
              }
              delete item.data.formControl;
              return item;
            });
          });
        }
        cell.content = JSON.stringify(cell.content);
      }
      return cell;
    });
    return notebook;
  }

  deserialize(notebook: NotebookInterface) {
    notebook.cells = notebook.cells.map(cell => {
      if (cell.type === NotebookCellTypeEnum.PIVOT_TABLE) {
        cell.content = JSON.parse(cell.content);
      }
      return cell;
    });
    return notebook;
  }

  create(notebook: NotebookInterface) {
    const url = `${this.urlBase}${this.urlFormCreate}`
      .replace(':class', this.rf2Class);
    return this.http.post<any>(url, this.serialize(notebook));
  }

  read(notebookId: number | string) {
    const url = `${this.urlBase}${this.urlFormReadUpdateDelete}`
      .replace(':class', this.rf2Class)
      .replace(':id', notebookId.toString());
    return this.http.get<NotebookInterface>(url).pipe(
      map(value => this.deserialize(value))
    );
  }

  update(notebook: NotebookInterface) {
    const url = `${this.urlBase}${this.urlFormReadUpdateDelete}`
      .replace(':class', this.rf2Class)
      .replace(':id', notebook.id.toString());
    return this.http.put<void>(url, this.serialize(notebook));
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
