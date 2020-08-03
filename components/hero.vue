<template>
  <section class="hero is-medium is-info is-bold">
    <div class="hero-body columns">
      <div class="container column">
        <h1  class="title is-1">
          Wired Store
        </h1>
        <h2 id="desktop" class="subtitle">
          versatile timepiece great for everyday wear from wiredstore
        </h2>
      </div>
      <div class=" imageblock column">
        <img class="image logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/326/3451207326_0bea6f38-773d-4892-82fc-eaea905c5709.png?cb=1596441241">
      </div>
      <h2 id="mobile" class="subtitle">
         versatile timepiece great for everyday wear
      </h2>
    </div>
  </section>
</template>

<style lang="css" scoped>
 .hero.is-medium .hero-body{
  background-image: linear-gradient(16deg, rgba(116, 116, 116,0.02) 0%, rgba(116, 116, 116,0.02) 25%,transparent 25%, transparent 96%,rgba(177, 177, 177,0.02) 96%, rgba(177, 177, 177,0.02) 100%),linear-gradient(236deg, rgba(148, 148, 148,0.02) 0%, rgba(148, 148, 148,0.02) 53%,transparent 53%, transparent 59%,rgba(56, 56, 56,0.02) 59%, rgba(56, 56, 56,0.02) 100%),linear-gradient(284deg, rgba(16, 16, 16,0.02) 0%, rgba(16, 16, 16,0.02) 46%,transparent 46%, transparent 71%,rgba(181, 181, 181,0.02) 71%, rgba(181, 181, 181,0.02) 100%),linear-gradient(316deg, rgba(197, 197, 197,0.02) 0%, rgba(197, 197, 197,0.02) 26%,transparent 26%, transparent 49%,rgba(58, 58, 58,0.02) 49%, rgba(58, 58, 58,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
 }
.hero.is-info.is-bold{
  background-image :none;
  background-color: white;
}
.hero.is-info .title{
  /*text-shadow: 1px 1px 5px black;*/
  color: black;

}
.hero.is-info .subtitle{
  /*text-shadow: 1px 1px 3px black;*/
  color:black;
}
.imageblock{
  /*background-color: yellow;*/
}
.logo{
  display: inline-block;
}
/*DESKTOP*/
@media screen and (min-width: 769px){
  .hero.is-medium .hero-body{
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 5rem;
    background-image: linear-gradient(16deg, rgba(116, 116, 116,0.02) 0%, rgba(116, 116, 116,0.02) 25%,transparent 25%, transparent 96%,rgba(177, 177, 177,0.02) 96%, rgba(177, 177, 177,0.02) 100%),linear-gradient(236deg, rgba(148, 148, 148,0.02) 0%, rgba(148, 148, 148,0.02) 53%,transparent 53%, transparent 59%,rgba(56, 56, 56,0.02) 59%, rgba(56, 56, 56,0.02) 100%),linear-gradient(284deg, rgba(16, 16, 16,0.02) 0%, rgba(16, 16, 16,0.02) 46%,transparent 46%, transparent 71%,rgba(181, 181, 181,0.02) 71%, rgba(181, 181, 181,0.02) 100%),linear-gradient(316deg, rgba(197, 197, 197,0.02) 0%, rgba(197, 197, 197,0.02) 26%,transparent 26%, transparent 49%,rgba(58, 58, 58,0.02) 49%, rgba(58, 58, 58,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  }
  .hero.is-info .title{
    padding-top: 5rem;
  }
  .subtitle{
    padding-top: 1rem;
  }
}
#mobile{
  display: none;
  color: black;
}
/*MOBILE*/
@media screen and (max-width: 769px){
  .hero-body.columns{
    padding-top: 0.5rem;
  }
  .title{
    display: none;
  }
  #desktop{
    display: none;
  }
  #mobile{
    display: block;
    letter-spacing: 1px;
    text-align: center;
  }
  .imageblock {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageblock img{
    width: 200px;
  }
}
</style>