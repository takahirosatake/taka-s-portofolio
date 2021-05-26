<template>
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
       <router-link to="/" class="nav__link">Home</router-link>
    </li>
    <li class="nav__item">
       <router-link to="/about" class="nav__link">About</router-link>
    </li>
    <li class="nav__item">
       <router-link to="/works" class="nav__link">Works</router-link>
    </li>
    <li class="nav__item">
       <router-link to="/contact" class="nav__link">Contact</router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.nav {
  @include mq-md {
    flex-basis: 100%;
  }
  a {
    text-decoration: none;
  }

  &__list {
      margin-left: 0;
      list-style: none;
      @include mq-md {
        margin: 10px 0 12px;
      }
  }
  &__item {
      display: inline-block;
  }
  &__link {
      padding: 20px 20px 17px;
      line-height: 1;
      color: $text-color;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.2s;
      &:hover {
        border-bottom-color: $bg-color3;
      }
      @include mq-md {
        border-bottom: 0;
        padding: 0;
        margin: 6px 10px;
      }
  }
}

.nav_list {
  margin-left: 0;
  list-style: none;
  @include mq-md {
    margin: 10px 0 12px;
  }
}

.nav_item {
  display: inline-block;
}

.nav_link {
  padding: 20px 20px 17px;
  line-height: 1;
  color: $text-color;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.2s;
  &:hover {
    border-bottom-color: $bg-color3;
  }
  @include mq-md {
    border-bottom: 0;
    padding: 0;
    margin: 6px 10px;
  }
}

</style>
