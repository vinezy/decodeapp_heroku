<h1>WEB DEVELOPMENT</h1>
<h3>WEBDEV Tools</h3>
<ul>
<li>Text Editor: <a href="https://www.sublimetext.com/3">Sublime</a></li>
<li>Terminal: <a href="https://git-scm.com/downloads">GitBash</a></li>
</ul>

<h3>Activity</h3>
<h4>Part 1: Github Setup</h4>
<ol>
 <li>Download all WEBDEV tools</li>	
 <li>Go to <a href="https://github.com/clydeinwebdev/decodeapp_heroku">https://github.com/clydeinwebdev/decodeapp_heroku</a></li>
 <li>Fork this repo 
  <br/>
  <img class="img-thumbnail"  src="https://github.com/clydeinwebdev/digitalSignage/blob/master/fork1.png" alt="fork"></li>
 <li>Then go to your Github Profile and verify if you have additional repo with the same name `decodeapp_heroku`</li>
 <li>Click the green button (<span style="color:green;">Clone</span>) and copy the displayed link<br/>
  <img class="img-thumbnail"  src="https://github.com/clydeinwebdev/digitalSignage/blob/master/clone.png" alt="fork">
 </li>
 <li>Use git bash and follow these commands
 
 ```sh
 $ cd /d
 $ git clone https://github.com/<span style="color:red;">yourgithubname</span>/decodeapp_heroku.git decodeapp-heroku<span style="color:red;">lastname</span>
 $ cd decodeapp-heroku<span style="color:red;">lastname</span>
 $ npm install

 Note: Wait and this could take some time and this depends on the internet connection speed.

 $ node server

 Note: Go to your browser and type 'http://localhost:4000'
```	

	</li>	
	<li>Verify if you have this page
	<br/><img class="img-thumbnail" src="https://github.com/clydeinwebdev/digitalSignage/blob/master/landingpage.png" alt="fork">
		<h5>This time change the following:</h5>
		<ul>
			<li>Page Title (change it to your <span style="color:red;">lastname</span>)</li>
			<li>Faveicon (look for any icon images and use it as your new faveicon)</li>
			<li>Nav color (see materializecss documentation <a href="http://materializecss.com/">here</a>)</li>
			<li>Footer color (see materializecss documentation <a href="http://materializecss.com/">here</a>) </li>
		</ul>
	</li>
</ol>
