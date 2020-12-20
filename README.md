# iris-analytics-notebook

A notebook approach to use IRIS analytics capabilities.

## Project description

In past few years, notebooks tools like [Jupyter](https://jupyter.org/) are gaining popularity due its natural way to express ideias.

An almost unipresent tool for data scientists, notebook can also help to improve the impact of analytics tools for all sort of users.

This project is my attemp to implement a simple notebook system, combining IRIS Analytics capabilities, with a custom notebook system - largelly inspired in Jupyter notebooks.

With this project you can:

* Create pivot tables for IRIS Analytics cubes and display the results in table and/or chart layouts
* Import an IRIS Analytics dashboard
* Express ideas througth powerfull text styling capabilities provided by [Markdown](https://en.wikipedia.org/wiki/Markdown) format.

<img src="./img/postman-restforms2.png"></img>

The pivot table feature is provided by IRIS Analytics [Business Intelligence REST API](https://docs.intersystems.com/irislatest/csp/docbook/Doc.View.cls?KEY=D2CLIENT_rest_api). This powerfull API allows you to get virtually all information about data sources managed by IRIS Analytics, their dimensions, measures, filters, as perform MDX queries as well.

IRIS Analytics also allows you to embed dashboards in your application. So, I decided to release a feature which you can embed IRIS Analytics dashboards into your notebook.

*Please, notice that this project is still in developement, so a lot of planned features aren't implemented yet. But the main ideia of nootebooks ant its different sort of cells is already avaialble.*

