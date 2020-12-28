FROM tensorflow/tensorflow:2.2.0-jupyter
LABEL maintainer="Zhong Li <Zhong.Li@intersystems.com>"

RUN apt-get update && apt-get install -y default-jre-headless && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
COPY irisnative-1.2.0-cp34-abi3-linux_x86_64.whl /tmp/irisnative-1.2.0-cp34-abi3-linux_x86_64.whl

RUN apt-get update && \
	apt-get install gcc && \
	apt-get install -y tdsodbc unixodbc-dev && \
	apt install unixodbc-bin -y && \
	apt-get clean  && \
	rm /etc/odbcinst.ini && \
	rm /etc/odbc.ini && \
	ln -s /tf/odbcinst.ini /etc/odbcinst.ini && \
	ln -s /tf/odbc.ini /etc/odbc.ini && \
	odbcinst -j
	
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
	pip install /tmp/irisnative-1.2.0-cp34-abi3-linux_x86_64.whl && \
	pip install pyodbc

CMD /bin/bash -c "source /etc/bash.bashrc && jupyter notebook --notebook-dir=/tf --ip 0.0.0.0 --no-browser --allow-root --NotebookApp.token=''"