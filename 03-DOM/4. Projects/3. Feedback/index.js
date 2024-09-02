const ratings = document.querySelectorAll(".rating");
console.log(
  JSON.stringify(
    Array.from(ratings).map((rating) => ({
      icon: rating.querySelector(".icon").textContent,
      text: rating.querySelector("small").textContent,
    }))
  )
);
