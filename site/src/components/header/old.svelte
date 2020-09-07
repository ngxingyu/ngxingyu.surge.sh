<script>
	export let segment;
  import {onMount} from "svelte";
  let showMobileMenu=false;
  const handleMobileIconClick = () =>(showMobileMenu = !showMobileMenu);
  const mediaQueryHandler = e => {
    if(!e.matches){showMobileMenu=false};
  };
  const handleLnClick = () =>{
    if (showMobileMenu){showMobileMenu=false}
  };
  onMount(()=>{
    const mediaListener=window.matchMedia("(max-width:767px)");
    mediaListener.addListener(mediaQueryHandler);
  });

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 1.5em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

  .logo {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 30px;
    margin: 15px 20px 10px 20px;
  }

  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: rgba(255, 255, 255, 0.97);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
    z-index:1;
  }

  .navbar-list.mobile li {
    display:block;
    width:100%;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list a {
    color: black;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 13px;
  }

  .navbar-list a.disabled{
    pointer-events:none;
    cursor:default;
    color:lightgray;
  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }
</style>

<nav>
  <div class='inner'>
     <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line"></div>
    </div>
	  <ul on:click={handleLnClick} class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="."><img class='logo' src='favicon.ico' alt='home'></a></li>
		  <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
      <li><a aria-current="{segment === 'transport' ? 'page' : undefined}" href="transport" class="disabled">transport</a></li>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		  <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
      <li><a rel=prefetch aria-current="{segment === 'widgets' ? 'page' : undefined}" href="widgets">widgets</a></li>

    </ul>
  </div>
</nav>
