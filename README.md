<h1>OLIMP PROJECT</h1>
<h3>This project is designed with support of SoftServe mentors.</h3>

<h2>Development Tolls:</h2>
<ul>
  <li><a href="#django-drf-info">Django REST Framework</a></li>
  <li><a href="#venv-info">Virtual environment</a></li>
  <li><a href="#react-info">React</a></li>
  <li><a href="#react-router-info">React Router</a></li>
  <li><a href="#react-redux-info">React Redux</a></li>
  <li><a href="#postgresql-info">PostgreSQL</a></li>
</ul>

<div id="django-drf-info">
  <h3>Django Rest Framework</h3>
  <p>In order to get all the needed packages for this project, you need to install <code>requirements.txt</code></p>
</div>

  ```sh
  pip install -r requiremnts.txt
  ```

<p>Django documentation: <a href="https://docs.djangoproject.com/en/4.2/">https://docs.djangoproject.com/en/4.2/</a></p>
<p>DRF documentation: <a href="https://www.django-rest-framework.org/topics/documenting-your-api/">https://www.django-rest-framework.org/topics/documenting-your-api/</a></p>
<p>In order to create a new project you need to use <code>django-admin startproject project_name</code> command</p>

  ```sh
  django-admin startproject backend .
  ```

<p>In order to create a new app you need to use <code>startapp app_name</code> command</p>

  ```sh
  python manage.py startapp newsAppp
  ```

<h5>BE CAREFUL! You have to do all the above-mentioned things in the directory that consists <code>manage.py</code> file</h5>

<p>After creating a new App you need to add it to <code>settings.py</code> file. If you do not do it, djando will not identify your app!<p>

```python
INSTALLED_APPS = [
    ...
    'baseApp',
    ...
]
```

<p>In order to start a server use <code>runserver</code> command</p></p>

  ```sh
  python manage.py runserver
  ```

<hr />

<div id="venv-info">
  <h3>Virtual Environment</h3>
  <p>Before starting our work with React, it is highly recommended to use a virtual environment to isolate our project and prevent from possible dependency conflicts.</p>
  <p>In order to install and activate virtual environment use the commands below</p>
</div>

  ```sh
  pip install virtualenv
  ```
  ```sh
  virtualenv myenv
  ```
  ```sh
  myenv\Scripts\activate
  ```

<hr />

<div id="react-info">
  <h2>React</h2>
  <strong>Have to install node.js first!</strong><br />
   <a href="https://nodejs.org">https://nodejs.org</a>
  <p>React documentation: <a href="https://react.dev/">https://react.dev/</a></p>
</div>

<p>In order create app use <code> create-react-app project_name</code> command<br>Then enter the rigth directory</p>


  ```sh
  npx create-react-app frontend
  ```
  ```sh
  cd frontend
  ```

  <h3>Required Libraries:</h3>
  
  ```sh
  npm i axios
  ```
  <p>Axios documentation: <a href="https://axios-http.com/docs/example">https://axios-http.com/docs/example</a></p>

  ```sh
  npm install react-icons --save
  ```

  <p>React icons documentation: <a href="https://react-icons.github.io/react-icons">https://react-icons.github.io/react-icons</a></p>

<div id="react-router-info">
  <h2>React Router</h2>
  <h3>Required Libraries:</h3>
</div>

  ```sh
  npm i react-router
  ```
  ```sh
  npm i react-router-dom
  ```

<hr />

<div id="react-redux-info">
  <h2>React Redux</h2>
  <h3>Required Libraries:</h3>
</div>

  ```sh
  npm i @reduxjs/toolkit
  ```
  ```sh
  npm i redux-thunk
  ```
  ```sh
  npm i redux-devtools-extension
  ```

<hr />

<div id="postgresql-info">
  <h3>PostgreSQL</h3>
  <p>As a database we will use postgresql></p>
  <p>In order to use it, you need to install an appropriate server (postgresql) and then UI desktop application</p>
</div>

<p>In order to install a postgresql go <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">https://www.enterprisedb.com/downloads/postgres-postgresql-downloads</a></p>
<p>In order to install a UI desktop app go <a href="https://www.postgresql.org/ftp/pgadmin/pgadmin4/v7.6/windows/">https://www.postgresql.org/ftp/pgadmin/pgadmin4/v7.6/windows/</a></p>


<br />
<br />
<br />
<br />
<br />





