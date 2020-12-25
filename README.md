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

## Application screencasts

Using the notebook UI:
<img src="https://github.com/jrpereirajr/iris-analytics-notebook/blob/master/img/2HWgQqAOUM.gif?raw=true"></img>


Forking a notebook:
<img src="https://raw.githubusercontent.com/jrpereirajr/iris-analytics-notebook/master/img/OrN2wwi9ud.gif"></img>

## Technologies used:

The pivot table feature is provided by IRIS Analytics [Business Intelligence REST API](https://docs.intersystems.com/irislatest/csp/docbook/Doc.View.cls?KEY=D2CLIENT_rest_api). This powerfull API allows you to get virtually all information about data sources managed by IRIS Analytics, their dimensions, measures, filters, as perform MDX queries as well.

IRIS Analytics also allows you to [embed dashboards into your application](https://docs.intersystems.com/latest/csp/docbook/Doc.View.cls?KEY=D2IMP_ch_dashboards). So, I decided to release a feature which you can embed IRIS Analytics dashboards into your notebook.

Front end was built using [Angular](https://angular.io/) and [Angular Material](https://material.angular.io/), among [other libraries](https://github.com/jrpereirajr/iris-analytics-notebook/blob/master/frontend/package.json). Markdown is processed by [ngx-markdown](https://github.com/jfcere/ngx-markdown).

A simple API for saving notebooks was developed using [RESTForms2](https://github.com/intersystems-community/RESTForms2) project.

This project also uses ZPM to install demo data sources to be used ([Samples-BI](https://github.com/intersystems/Samples-BI) and [iris-analytics-template](https://github.com/intersystems-community/iris-analytics-template)).

## Installation

Clone/git pull the repo into any local directory

```
$ git clone https://github.com/jrpereirajr/iris-analytics-notebook.git
```

Open a Docker terminal in this directory and run:

```
$ cd iris-analytics-notebook
$ docker-compose build
```

3. Run the IRIS container, and Jupyter notebook server images:

```
$ docker-compose up
```

4. Wait for backend e frontend containers to up and then access the [application](http://localhost:4200). Username: superuser; password: SYS.

## Installation (ZPM)

Open Terminal and call:

USER> zpm "install iris-analytics-samples"

## Credits

This project used the project [iris-sample-rest-angular](https://github.com/intersystems-ib/iris-sample-rest-angular) as angular and REST template.
