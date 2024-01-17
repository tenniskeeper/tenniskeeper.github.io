const hdrtemplate = document.createElement('template');

hdrtemplate.innerHTML = `
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">

      <a class="navbar-brand js-scroll-trigger" href="../index.html">
       <img alt="TennisKeeper" src="../img/logo.png"></a>
    
      <button class="navbar-toggler custom-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../reviews.html">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../blog/tkblog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../support.html">Help</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a class="dropdown-item lang-en    lang-select" data-lang="en"    href="#googtrans(en|en)">English</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="ja"    href="#googtrans(en|ja)">Japanese</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="de"    href="#googtrans(en|de)">German</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="de"    href="#googtrans(en|el)">Greek</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="it"    href="#googtrans(en|it)">Italian</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="fr"    href="#googtrans(en|fr)">French</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="pt"    href="#googtrans(en|pt)">Portuguese</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="es"    href="#googtrans(en|es)">Spanish</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="es"    href="#googtrans(en|sv)">Swedish</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="en"    href="#googtrans(en|nl)">Dutch</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="en"    href="#googtrans(en|sk)">Slovak</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="ko"    href="#googtrans(en|ko)">Korean</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="zh-CN" href="#googtrans(en|zh-TW)">Chinese</a>
              <a class="dropdown-item lang-en    lang-select" data-lang="ru"    href="#googtrans(en|ru)">Russian</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    
 </nav> 


`;

document.body.appendChild(hdrtemplate.content);
