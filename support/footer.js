const template = document.createElement('template');

template.innerHTML = `
  <footer>
    <section class="contact">
      <div class="container">

        <div class="row">
          <h3>Follow us</h3>
       
          <ul class="list-inline list-social">
            <li class="list-inline-item social-google-plus">
              <a href="https://www.youtube.com/channel/UCNcyosJFvU7rOX6fFNsxm5Q"><i class="fab fa-youtube"></i></a>
            </li>

            <li class="list-inline-item social-instagram">
              <a href="https://www.instagram.com/tenniskeeperapp/"><i class="fab fa-instagram fa-fw"></i></a>
            </li>

            <li class="list-inline-item social-twitter">
              <a href="https://twitter.com/tennis_keeper"><i class="fab fa-twitter"></i></a>
            </li>
            
            <li class="list-inline-item social-facebook">
              <a href="https://www.facebook.com/tenniskeeper/"><i class="fab fa-facebook-f"></i></a>
            </li>
            
            <li class="list-inline-item social-pinterest">
              <a href="https://www.pinterest.com/tenniskeeperapp/"><i class="fab fa-pinterest"></i></a>
            </li>

            <li class="list-inline-item social-email"><a href="mailto:tenniskeeper@gmail.com"><i class="fa fa-envelope"></i></a>
            </li>
          </ul>
        </div>
    
      <div class="row">
        <div class="col-md1">
            &copy; TennisKeeper 2022. All Rights Reserved
        </div>  
        <div class="col-md-1">
          <a href="../privacy.html">Privacy</a>
        </div>
        <div class="col-md-1"> 
          <a href="../terms.html">Terms</a>
        </div>
       
      </div>
  
    </section>
  </footer>


`;

document.body.appendChild(template.content);
