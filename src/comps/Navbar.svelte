<svelte:body id="top" />

<nav class="navbar">
  <div class="container">
    <div class="logo">MemoPix</div>
    <ul class="nav">
      <li> <a href="#top">О нас</a> </li>
      <li> <a href="#addresses">Адреса</a> </li>
      <li> <a href="#contacts">Контакты</a> </li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fdd;
    color: #fff;
    height: 60px;
  }

  .navbar .logo {
    font-size: x-large;
    font-weight: bold;
  }

  .navbar a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  .navbar a:hover {
    color: #777;
  }

  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .navbar ul {
    display: flex;
  }

  .navbar ul li {
    margin-left: 20px;
  }
</style>