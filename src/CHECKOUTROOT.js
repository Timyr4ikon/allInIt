export default  `<div class="col-12 checkout-box">
<div class="row">
<div class="col-4">
    <div class="guest">
        <h2 class="guest__title" data-action="dark-content">CONTINUE AS A <br> <span class="guest__title--span" data-action="dark-content">GUEST!</span></h2>
        <p class="guest__subtitle--first" data-action="dark-content">Register with us for future convenience:</p>
        <p class="guest__subtitle--second" data-action="dark-content">You can save your data in order <br> 
                to speed up your next shopping experience</p>
            <form action="#" class="guest-form" data-action="continue-as-js">
              <input class="guest-form__radio" type="radio" id="first-input" value="guest" name="continue_as_a">
              <label class="guest-form__radio--label" for="first-input" name="radio" data-action="dark-content" data-label="first">Checkout as Login</label>

              <input class="guest-form__radio" type="radio" id="second-input" value="register" name="continue_as_a">
              <label class="guest-form__radio--label" for="second-input" name="radio" data-action="dark-content" data-label="second">Register</label>

                <div class="guest-content">
                        <ul class="guest-content__list">
                            <li class="guest-content__item" data-action="dark-content">Fast and easy check out</li>
                            <li class="guest-content__item" data-action="dark-content">Easy access to your order history and status</li>
                        </ul>
                </div>
              
                    <button class="guest__btn" type="submit">fill the sign form</button>
                
            </form>

    </div>
  </div>

    <div class="col-4">
      <div class="member">
        <h2 class="member__title" data-action="dark-content">are you <br> <span class="member__title--span" data-action="dark-content">member?</span></h2>
          <p class="member__subtitle--first" data-action="dark-content">Already registered?</p>
          <p class="member__subtitle--second" data-action="dark-content">You can try enter:<br><span class="member__subtitle--first">demo@gmail.com &amp;&amp; loveyou3</span> </p>

          <form action="#" class="member-form" data-action="login-form">
            <p class="member-form__text" data-action="dark-content">Email Adress<span class="red-star">*</span></p>
            <input type="email" class="member__input" name="member-email" placeholder="Email..." data-action="member-autofocus" data-focus="validation" required="">
            <p class="member-form__text" data-action="dark-content">Password<span class="red-star">*</span></p>
            <input type="password" class="member__input" pattern=".{8,16}" name="member-password" placeholder="********" data-focus="validation" required="">
              <div class="required-support">
                <p class="red-star">*Required Fields</p>
                <a href="http://rgnkc.ru/klinika-narushenij-pamyati" target="_blank" class="member__forgot-password">Forgot your password?</a>
              </div>
              <button class="member__btn">Login</button>
          </form>

    </div>
    
</div>

<div class="col-4">
  <div class="review">
    <h2 class="review__title">You can register <br> <span class="review__title--span">Right now!</span></h2>
    <p class="review__subtitle--first">Please enter your datas:</p>
    <form action="#" class="member-form" data-action="register-form">
      <p class="member-form__text">Name<span class="black-star">*</span></p>
      <input type="text" class="member__input" name="register-name" placeholder="Name" pattern=".{0,6}" data-action="review-autofocus" data-focus="validation" required="">
      <p class="member-form__text">Email Adress<span class="black-star">*</span></p>
      <input type="email" class="member__input" name="register-email" placeholder="Email..." data-focus="validation" required="">
      <p class="member-form__text">Password<span class="black-star">*</span></p>
      <input type="password" class="member__input" name="register-password" pattern=".{8,16}" placeholder="********" data-focus="validation" required="">
        <button class="review__btn">Register</button>
    </form>
  </div>
</div>
</div>
</div>
<div class="col-12">
  <ul class="gallery js-gallery"><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2016/01/19/15/08/ocean-wave-1149174_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2016/01/19/15/08/ocean-wave-1149174_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2016/01/19/15/08/ocean-wave-1149174_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2017/05/09/16/06/windsurfing-2298647_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2017/05/09/16/06/windsurfing-2298647_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2017/05/09/16/06/windsurfing-2298647_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2017/05/22/19/50/surfer-2335088_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2017/05/22/19/50/surfer-2335088_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2017/05/22/19/50/surfer-2335088_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2017/05/31/11/37/beach-2360136_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2017/05/31/11/37/beach-2360136_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2017/05/31/11/37/beach-2360136_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2016/11/18/17/04/liquid-1835846_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2016/11/18/17/04/liquid-1835846_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2016/11/18/17/04/liquid-1835846_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2015/09/06/01/00/surfing-926822_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2015/09/06/01/00/surfing-926822_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2015/09/06/01/00/surfing-926822_960_720.jpg" alt="Surf"></a></li><li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2015/05/11/07/17/vw-762050_960_720.jpg"><img class="gallery__image" src="https://cdn.pixabay.com/photo/2015/05/11/07/17/vw-762050_960_720.jpg" data-source="https://cdn.pixabay.com/photo/2015/05/11/07/17/vw-762050_960_720.jpg" alt="Surf"></a></li></ul>
  <div class="lightbox  js-lightbox">
    <div class="lightbox__overlay"></div>

    <div class="lightbox__content">
      <img class="lightbox__image" src="#" alt="">
    </div>

    <button type="button" class="lightbox__button" data-action="close-lightbox"></button>
  </div>
</div>`;