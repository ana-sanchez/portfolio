"use strict";console.log(">> Ready :)");const menu=document.querySelector(".hamburger");function toggleMenu(e){this.classList.toggle("is-active"),document.querySelector(".menuppal").classList.toggle("is_active"),e.preventDefault()}const elementportfolio=document.querySelectorAll(".portfolio"),elementWeb=document.getElementById("js-web"),elementJs=document.getElementById("js-javascript"),elementReact=document.getElementById("js-react"),elementRicky=document.getElementById("js-ricky"),elementSciencie=document.getElementById("js-sciencie"),elementCero=document.getElementById("js-cero"),buttonAll=document.querySelector("#btn-all"),buttonWeb=document.getElementById("btn-web"),buttonJs=document.querySelector("#btn-js"),buttonReact=document.querySelector("#btn-react"),buttonWordpress=document.querySelector("#btn-wordpress");function selectCategoryAll(){elementWeb.classList.remove("hidden"),elementReact.classList.remove("hidden"),elementRicky.classList.remove("hidden"),elementJs.classList.remove("hidden"),elementSciencie.classList.remove("hidden"),elementCero.classList.remove("hidden")}function selectCategoryWeb(){elementJs.classList.add("hidden"),elementReact.classList.add("hidden"),elementRicky.classList.add("hidden"),elementWeb.classList.remove("hidden"),elementSciencie.classList.remove("hidden"),elementCero.classList.remove("hidden")}function selectCategoryJs(){elementJs.classList.remove("hidden"),elementReact.classList.add("hidden"),elementRicky.classList.add("hidden"),elementWeb.classList.add("hidden"),elementSciencie.classList.add("hidden"),elementCero.classList.add("hidden")}function selectCategoryReact(){elementJs.classList.add("hidden"),elementReact.classList.remove("hidden"),elementRicky.classList.remove("hidden"),elementWeb.classList.add("hidden"),elementSciencie.classList.add("hidden"),elementCero.classList.add("hidden")}function selectCategoryWordpress(){elementJs.classList.add("hidden"),elementReact.classList.add("hidden"),elementRicky.classList.add("hidden"),elementWeb.classList.add("hidden"),elementSciencie.classList.remove("hidden"),elementCero.classList.remove("hidden")}menu.addEventListener("click",toggleMenu,!1),buttonAll.addEventListener("click",selectCategoryAll),buttonWeb.addEventListener("click",selectCategoryWeb),buttonJs.addEventListener("click",selectCategoryJs),buttonReact.addEventListener("click",selectCategoryReact),buttonWordpress.addEventListener("click",selectCategoryWordpress);