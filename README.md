# iris-analytics-notebook

A notebook approach to use IRIS analytics capabilities.

## Project description

In past few years, notebooks tools like [Jupyter](https://jupyter.org/) are gaining popularity due its natural way to express ideias.

An almost unipresent tool for data scientists, notebook can also help to improve the impact of analytics tools for all sort of users.

This project is my attemp to implement a simple notebook system, combining IRIS Analytics capabilities, with a custom notebook system - largelly inspired by Jupyter notebooks.

With this project you can:

* Create pivot tables for IRIS Analytics cubes and display the results in table and/or chart layouts
* Import an IRIS Analytics dashboard
* Express ideas througth powerfull text styling capabilities provided by [Markdown](https://en.wikipedia.org/wiki/Markdown) format.

*Please, notice that this project is in early developement, so a lot of planned features aren't implemented yet. But the main ideia of nootebook and its different sort of cells is already avaialble.*

## Application screencast

<img src="https://github.com/jrpereirajr/iris-analytics-notebook/blob/master/img/2HWgQqAOUM.gif?raw=true"></img>

## Technologies used:

The pivot table feature is provided by IRIS Analytics [Business Intelligence REST API](https://docs.intersystems.com/irislatest/csp/docbook/Doc.View.cls?KEY=D2CLIENT_rest_api). This powerfull API allows you to get virtually all information about data sources managed by IRIS Analytics, their dimensions, measures, filters, as perform MDX queries as well.

IRIS Analytics also allows you to [embed dashboards into your application](https://docs.intersystems.com/latest/csp/docbook/Doc.View.cls?KEY=D2IMP_ch_dashboards). So, I decided to release a feature which you can embed IRIS Analytics dashboards into your notebook.

Front end was built using [Angular](https://angular.io/) and [Material Desging](https://material.angular.io/), among [other libraries](https://github.com/jrpereirajr/iris-analytics-notebook/blob/master/frontend/package.json). Markdown is processed by [ngx-markdown](https://github.com/jfcere/ngx-markdown).

An API for saving notebooks is under early develpoment, using [RESTForms2](https://github.com/intersystems-community/RESTForms2) project.

## Installation

Clone/git pull the repo into any local directory

```
$ https://github.com/jrpereirajr/iris-analytics-notebook.git
```

Open a Docker terminal in this directory and run:

```
$ docker-compose build
```

3. Run the IRIS container, and Jupyter notebook server images:

```
$ docker-compose up -d
```

4. Wait for backend e frontend containers to up and then access the [application](http://localhost:4200)

## Installation (ZPM)
If you just wanna the adaptor, you could install it through ZPM.
Open Terminal and call:

USER>zpm "install interoperability-integratedml-adapter"

## Credits

This project used the project [iris-sample-rest-angular](https://github.com/intersystems-ib/iris-sample-rest-angular) as angular and REST template.
