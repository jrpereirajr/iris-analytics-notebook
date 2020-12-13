import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NotebookService } from './notebook.service';
import { NotebookInterface } from '../notebook.models';
import { not } from '@angular/compiler/src/output/output_ast';
import { QueryResult } from 'src/app/shows/shows.model';

/**
 * @see https://shashankvivek-7.medium.com/testing-services-in-angular-karma-ed49f8d5b264
 */
describe('NotebookService', () => {
  let service: NotebookService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const fooNotebook = { Id: '1', Name: 'foo' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NotebookService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#create() should send a notebook for saving and receives its Id', () => {
    const notebook: NotebookInterface = fooNotebook;
    const expectedResponse = { Id: '1' };
    service.create(notebook).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const url = `${service.urlBase}${service.urlFormCreate}`
      .replace(':class', service.rf2Class);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(notebook);
    req.flush(expectedResponse);
  });

  it('#read() should requests an Id and receives a notebook as response', () => {
    const notebook: NotebookInterface = fooNotebook;
    service.read(notebook.Id).subscribe((res) => {
      expect(res).toEqual(notebook);
    });

    const url = `${service.urlBase}${service.urlFormReadUpdateDelete}`
      .replace(':class', service.rf2Class)
      .replace(':id', notebook.Id);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebook.Id);
    req.flush(notebook);
  });

  it('#update() should sends a notebook Id and a new object', () => {
    const notebook: NotebookInterface = fooNotebook;
    notebook.Name = 'foo bar';
    service.update(notebook).subscribe();

    const url = `${service.urlBase}${service.urlFormReadUpdateDelete}`
      .replace(':class', service.rf2Class)
      .replace(':id', notebook.Id);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('PUT');
    expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebook.Id);
    expect(req.request.body).toEqual(notebook);
    req.flush(null);
  });

  it('#delete() should sends a notebook Id for deletion', () => {
    const notebook: NotebookInterface = fooNotebook;
    service.delete(notebook.Id).subscribe();

    const url = `${service.urlBase}${service.urlFormReadUpdateDelete}`
      .replace(':class', service.rf2Class)
      .replace(':id', notebook.Id);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebook.Id);
    req.flush(null);
  });

  it('#query() should requests results with no params', () => {
    const notebook: NotebookInterface = fooNotebook;
    const results: QueryResult<NotebookInterface> = {
      children: [notebook],
      total: 1
    }
    const queryName = 'find';
    service.query(queryName).subscribe((res) => {
      expect(res).toEqual(results);
    });

    const url = `${service.urlBase}${service.urlFormQuery}`
      .replace(':class', service.rf2Class)
      .replace(':query', queryName);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    // expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebook.Id);
    req.flush(results);
  });

  it('#query() should requests results with page', () => {
    const notebook: NotebookInterface = fooNotebook;
    const results: QueryResult<NotebookInterface> = {
      children: [notebook],
      total: 1
    }
    const queryName = 'find';
    const pageNumber = 1;
    service.query(queryName, { page: pageNumber }).subscribe((res) => {
      expect(res).toEqual(results);
    });

    const url = `${service.urlBase}${service.urlFormQuery}`
      .replace(':class', service.rf2Class)
      .replace(':query', queryName);
    const urlSuffix = `?page=${pageNumber}`
    const req = httpMock.expectOne(url + urlSuffix);
    expect(req.request.method).toBe('GET');
    expect(req.request.url.indexOf(urlSuffix)).toBeGreaterThan(-1);
    req.flush(results);
  });

  it('#query() should requests results with size', () => {
    const notebook: NotebookInterface = fooNotebook;
    const results: QueryResult<NotebookInterface> = {
      children: [notebook],
      total: 1
    }
    const queryName = 'find';
    const sizeNumber = 5;
    service.query(queryName, { size: sizeNumber }).subscribe((res) => {
      expect(res).toEqual(results);
    });

    const url = `${service.urlBase}${service.urlFormQuery}`
      .replace(':class', service.rf2Class)
      .replace(':query', queryName);
    const urlSuffix = `?size=${sizeNumber}`
    const req = httpMock.expectOne(url + urlSuffix);
    expect(req.request.method).toBe('GET');
    expect(req.request.url.indexOf(urlSuffix)).toBeGreaterThan(-1);
    req.flush(results);
  });

  it('#query() should requests results with page and size', () => {
    const notebook: NotebookInterface = fooNotebook;
    const results: QueryResult<NotebookInterface> = {
      children: [notebook],
      total: 1
    }
    const queryName = 'find';
    const pageNumber = 1;
    const sizeNumber = 5;
    service.query(queryName, { page: pageNumber, size: sizeNumber }).subscribe((res) => {
      expect(res).toEqual(results);
    });

    const url = `${service.urlBase}${service.urlFormQuery}`
      .replace(':class', service.rf2Class)
      .replace(':query', queryName);
    const urlSuffix = `?page=${pageNumber}&size=${sizeNumber}`
    const req = httpMock.expectOne(url + urlSuffix);
    expect(req.request.method).toBe('GET');
    expect(req.request.url.indexOf(urlSuffix)).toBeGreaterThan(-1);
    req.flush(results);
  });
});
