<script language="javascript">
function pasuser(form) { 
if (form.id.value=="SECRET_USER") { 
if (form.pass.value=="SECRET_PASSWORD") { location="https://saintignatius500years.neocities.org/admin/index.html" } 
else { alert("Wrong Password") } 
} 
else { alert("Wrong Username") } 
} 
</script>
<form name="login">
Username: < input name="id" size="6" type="text">
Password: < input name="pass" size="6" type="password">
<input value="Login" onclick="pasuser(this.form)" type="button">
</form>

<script type="text/javascript">
   var uid = '338263';
   var wid = '640197';
   var pop_tag = document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);
   pop_tag.onerror = function() {pop_tag = document.createElement('script');pop_tag.src='//cdn2.popcash.net/show.js';document.body.appendChild(pop_tag)};
</script>