---
title: "Nav Mobile Bottom icon"
slug: nav-mobile-bottom-icon
date: 2022-03-16T17:06:37+07:00
lastmod: 2022-03-16T17:06:44+07:00

tag:
  - nav

image: ""
description: "Nav mobile bottom icon, native mobile"
---
```html
<nav class=" sticky bottom-0 md:top-0 w-full flex overflow-x-auto h-fit md:w-[300px] ">
  <div class="fixed bottom-[50px] w-full">
    <!-- back to top -->
    <div class="m-auto bg-main-1 p-3 w-fit rounded-xl">
      <a href="#">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"
          />
        </svg>
      </a>
    </div>
  </div>
  <!-- navigation -->
  {{ range.Site.Menus.nav.Sort.ByWeight }}
  <a
      href="{{ .URL }}"
    class="navlink whitespace-no-wrap hover:bg-main-1 focus:text-orange-500">
    <span class="{{ .Name }}" ></span>
      <span class="text-sm capitalize">{{ .Identifier }}</span>
  </a>
  {{ end }}
</nav>
```
