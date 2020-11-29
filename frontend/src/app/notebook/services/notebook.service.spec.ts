import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NotebookService } from './notebook.service';
import { NotebookInterface } from '../notebook.models';
import { not } from '@angular/compiler/src/output/output_ast';

/**
 * @see https://shashankvivek-7.medium.com/testing-services-in-angular-karma-ed49f8d5b264
 */
describe('NotebookService', () => {
  let service: NotebookService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

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
    const notebook: NotebookInterface = { Name: 'foo' };
    const expectedResponse = {Id: '1'};
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
    const notebookId = '1';
    const notebook: NotebookInterface = { Name: 'foo' };
    service.read(notebookId).subscribe((res) => {
      expect(res).toEqual(notebook);
    });

    const url = `${service.urlBase}${service.urlFormReadUpdateDelete}`
      .replace(':class', service.rf2Class)
      .replace(':id', notebookId);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebookId);
    req.flush(notebook);
  });

  it('#update() should sends a notebook Id and a new object', () => {
    const notebookId = '1';
    const notebook: NotebookInterface = { Name: 'foo bar' };
    service.update(notebookId, notebook).subscribe();

    const url = `${service.urlBase}${service.urlFormReadUpdateDelete}`
      .replace(':class', service.rf2Class)
      .replace(':id', notebookId);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('PUT');
    expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebookId);
    expect(req.request.body).toEqual(notebook);
    req.flush(null);
  });

  it('#delete() should sends a notebook Id for deletion', () => {
    const notebookId = '1';
    service.delete(notebookId).subscribe();

    const url = `${service.urlBase}${service.urlFormReadUpdateDelete}`
      .replace(':class', service.rf2Class)
      .replace(':id', notebookId);
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.url.split('/').slice(-1)[0]).toEqual(notebookId);
    req.flush(null);
  });
});
