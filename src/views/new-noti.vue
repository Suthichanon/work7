<template>
    <div class="navbar">
      <div class="logo">Logo</div>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/news-noti">News</RouterLink></li>
        <li><RouterLink to="view">View</RouterLink></li>
        <li><RouterLink to="/add_drop">Contact</RouterLink></li>
      </ul>
    </div>
    <div class="header-info">
      <h1>Welcome to my website</h1>
      <p>View My Work Click Below</p>
      <a href="" class="header-btn">LearnMore</a>
      <RouterView />
    </div>
    <footer>
      <p>&copy; 2022</p>
    </footer>
  </template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  display: flex;
  /* border: 1px solid red; */
  background-color: #333;
  color: #fff;
  min-height: 5vh;
}

.logo {
  font-size: 2.5rem;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
ul {
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  /*0 border: 1px solid red; */
  list-style: none;
}
ul li {
  margin: 0 1rem;
  /* border: 1px solid red; */
}
ul li a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 1.25rem;
}

.header-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background: url(https://images.unsplash.com/photo-1639431682289-72b9ebb75895?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80);
  border: 1px solid rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 15px;
  min-height: 95vh;
}
.header-info a {
  display: flex;
  flex-direction: column;
  width: 80px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 60%;
}

footer {
  font-size: 18px;
  background: #333;
  padding: 0.005rem;
  text-align: center;
  color: #fff;
}
</style>
